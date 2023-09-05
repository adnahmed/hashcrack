import HashlistContext from '@/Context/HashlistContext';
import AddHashlist from '@/components/AddHashlist';
import ExtraStep from '@/components/ExtraStep';
import FinishStep from '@/components/FinishStep';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { Button, Wizard, WizardContextConsumer, WizardFooter, WizardStep } from '@patternfly/react-core';
import React, { useContext, useMemo } from 'react';
import toast from 'react-hot-toast';
import { animateScroll as scroll } from 'react-scroll';
import { selectActiveTab } from '../../features/Navigation/navigationSlice';
import ConfigureTask from '../ConfigureTask/ConfigureTask';
import VerifyHashlist from '../VerifyHashlist/VerifyHashlist';
import { selectWizardStepReached, stepIdReached } from '../Wizard/wizardSlice';
import { createdTask, resettedWizard, selectParsedHashlist, selectTaskData, selectTermsAndConditions, useSubmitTaskMutation } from './newTaskSlice';
import { verifyHashlist } from './verifyHashlistThunk';

export default function NewTask() {
    const wizardStepReached = useAppSelector(selectWizardStepReached);
    const [submitTask, { isError: failedTaskSubmission, isSuccess: submittedTask, error: failedSubmissionError, isLoading: isSubmittingTask }] = useSubmitTaskMutation();
    const { selectedHashType, hashlistVerified, verifyingHashlist, hashlistFile, attackConfigured, rejectedHashlist: rejectedHashes, ...taskData } = useAppSelector(selectTaskData);
    const parsedHashes = useAppSelector(selectParsedHashlist);
    const hashlistConsumer = useContext(HashlistContext);
    const activeTab = useAppSelector(selectActiveTab);
    const accptedTermsAndConditions = useAppSelector(selectTermsAndConditions);
    const usingTextArea = hashlistConsumer && hashlistConsumer.hashlist.length !== 0;
    const VerifyStepDisabled = useMemo(() => (hashlistFile === undefined && !usingTextArea) || selectedHashType === '-1', [hashlistFile, usingTextArea, selectedHashType]);
    const ConfigureStepDisabled = useMemo(() => parsedHashes.length === 0, [parsedHashes.length]);
    const ExtrasStepDisabled = useMemo(() => wizardStepReached < 3 || !attackConfigured, [attackConfigured, wizardStepReached]);
    // const FinishStepDisabled = useMemo(() => wizardStepReached < 4 || !accptedTermsAndConditions, [accptedTermsAndConditions, wizardStepReached]);
    const dispatch = useAppDispatch();
    const usingInput = usingTextArea || hashlistFile !== undefined;
    React.useEffect(() => {
        if (usingInput) scroll.scrollToBottom();
        else scroll.scrollToTop();
    }, [usingInput]);
    const steps: WizardStep[] = useMemo(
        () => [
            {
                id: '1',
                name: 'Add Hashlist',
                component: <AddHashlist />,
                isDisabled: verifyingHashlist || hashlistVerified,
                canJumpTo: true,
            },
            {
                id: '2',
                name: 'Verify Hashlist',
                component: <VerifyHashlist />,
                isDisabled: VerifyStepDisabled,
                canJumpTo: wizardStepReached >= 1,
            },
            {
                id: '3',
                name: 'Configure Task',
                component: <ConfigureTask />,
                isDisabled: ConfigureStepDisabled,
                canJumpTo: wizardStepReached >= 2,
            },
            {
                id: '4',
                name: 'Extras',
                component: <ExtraStep />,
                isDisabled: ExtrasStepDisabled,
                canJumpTo: wizardStepReached >= 3,
            },
            {
                id: '5',
                name: 'Finish',
                component: <FinishStep />,
                isDisabled: !submittedTask,
                canJumpTo: wizardStepReached >= 4,
            },
        ],
        [ConfigureStepDisabled, ExtrasStepDisabled, VerifyStepDisabled, hashlistVerified, submittedTask, verifyingHashlist, wizardStepReached]
    );

    const closeWizard = () => {
        // eslint-disable-next-line no-console
        console.log('try me');
    };

    const onNext = async ({ id }: WizardStep) => {
        if (id) {
            if (typeof id === 'string') {
                id = parseInt(id);
            }
            const nextStep = (id: number) => dispatch(stepIdReached(wizardStepReached < id ? id : wizardStepReached));
            console.log(wizardStepReached);
            if (id === 2) {
                if (usingTextArea) {
                    const hashlist = getHashlist(hashlistConsumer.hashlist);
                    dispatch(verifyHashlist({ inputMethod: 'textarea', hashlist }));
                }
                if (hashlistFile) {
                    try {
                        const resp = await dispatch(verifyHashlist({ inputMethod: 'file' })).unwrap();
                        console.log(resp);
                    } catch (err) {
                        console.error(err);
                    }
                }
                if (usingTextArea || hashlistFile) {
                    nextStep(id);
                }
            } else {
                nextStep(id);
            }
        }
    };

    function resetWizard(goToStep: (step: string) => void) {
        hashlistConsumer?.setHashlist('');
        dispatch(stepIdReached(1));
        dispatch(resettedWizard(2));
        goToStep('1');
    }
    const NextStepDisabled = useMemo(() => (VerifyStepDisabled && wizardStepReached === 1) || (ExtrasStepDisabled && wizardStepReached === 3), [ExtrasStepDisabled, VerifyStepDisabled, wizardStepReached]);
    const NoHashFound = (id: string | number | undefined) => id === '2' && parsedHashes.length === 0;
    const CustomFooter = (
        <WizardFooter>
            <WizardContextConsumer>
                {({ activeStep, goToStepByName, onNext, onBack, onClose, goToStepById: goToStep }) => (
                    <>
                        {NoHashFound(activeStep.id) || activeStep.id === '4' ? undefined : (
                            <Button variant="primary" className={NextStepDisabled ? 'pf-m-disabled' : ''} type="submit" onClick={onNext}>
                                {rejectedHashes.length > 0 && activeStep.id === '2' ? '⚠️ Continue' : 'Next'}
                            </Button>
                        )}
                        {activeStep.id !== '4' ? undefined : (
                            <Button
                                variant="primary"
                                className={!accptedTermsAndConditions ? 'pf-m-disabled' : ''}
                                type="submit"
                                isLoading={isSubmittingTask}
                                onClick={async () => {
                                    // Submit Task
                                    try {
                                        const response = await submitTask({
                                            ...taskData,
                                            attackConfigured,
                                            hashlistVerified,
                                            selectedHashType,
                                            rejectedHashlist: rejectedHashes,
                                        }).unwrap();
                                        if (response.success && submittedTask) {
                                            dispatch(createdTask(response.task));
                                            dispatch(stepIdReached(5));
                                        }
                                        if (failedTaskSubmission) {
                                            toast.dismiss();
                                            toast.error(`Error occurred while submitting task , Please try again.`);
                                        }
                                    } catch (err) {
                                        //TODO: Log the error
                                        toast.dismiss();
                                        toast.error(`Error occurred while submitting task, Please try again.`);
                                    }
                                }}>
                                Submit
                            </Button>
                        )}
                        <Button variant="secondary" className={usingInput ? '' : 'pf-m-disabled'} type="submit" onClick={() => resetWizard(goToStep)}>
                            Reset
                        </Button>
                    </>
                )}
            </WizardContextConsumer>
        </WizardFooter>
    );
    return (
        <Wizard
            hideClose={true}
            cancelButtonText=""
            title=""
            onNext={onNext}
            footer={CustomFooter}
            onClose={closeWizard}
            onSubmit={function (data: unknown): Promise<void> {
                throw new Error('Function not implemented.');
            }}
            backButtonText={'Reset'}
            steps={steps}
        />
    );
}
