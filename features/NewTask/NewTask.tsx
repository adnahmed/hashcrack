import HashlistContext from '@/Context/HashlistContext';
import AddHashlist from '@/components/AddHashlist';
import ExtraStep from '@/components/ExtraStep';
import FinishStep from '@/components/FinishStep';
import { isErrorWithMessage } from '@/lib/error';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { Button, Modal, ModalVariant, Wizard, WizardContextConsumer, WizardFooter, WizardStep } from '@patternfly/react-core';
import React, { useContext, useMemo } from 'react';
import toast from 'react-hot-toast';
import { animateScroll as scroll } from 'react-scroll';
import { selectActiveTab } from '../../features/Navigation/navigationSlice';
import ConfigureTask from '../ConfigureTask/ConfigureTask';
import VerifyHashlist from '../VerifyHashlist/VerifyHashlist';
import { selectWizardStepReached, stepIdReached } from '../Wizard/wizardSlice';
import { isFetchError } from '../api/apiSlice';
import { TaskData, createdTask, resettedWizard, selectParsedHashlist, selectTaskData, selectTermsAndConditions, useSubmitTaskMutation } from './newTaskSlice';
import { verifyHashlist } from './verifyHashlistThunk';
export default function NewTask() {
    const wizardStepReached = useAppSelector(selectWizardStepReached);
    const [submitTask, { isError: failedTaskSubmission, isSuccess: submittedTask, error: failedSubmissionError, isLoading: isSubmittingTask, reset: ResetSubmitted }] = useSubmitTaskMutation();
    const { selectedHashType, hashlistVerified, verifyingHashlist, hashlistFile, attackConfigured, rejectedHashlist: rejectedHashes, ...taskData } = useAppSelector(selectTaskData);
    const parsedHashes = useAppSelector(selectParsedHashlist);
    const hashlistConsumer = useContext(HashlistContext);
    const activeTab = useAppSelector(selectActiveTab);
    const accptedTermsAndConditions = useAppSelector(selectTermsAndConditions);
    const usingTextArea = hashlistConsumer && hashlistConsumer.hashlist.length !== 0;
    const VerifyStepDisabled = useMemo(() => (hashlistFile === undefined && !usingTextArea) || selectedHashType === '-1', [hashlistFile, usingTextArea, selectedHashType]);
    const ConfigureStepDisabled = useMemo(() => parsedHashes.length === 0, [parsedHashes.length]);
    const ExtrasStepDisabled = useMemo(() => wizardStepReached < 3 || !attackConfigured, [attackConfigured, wizardStepReached]);
    const FinishStepDisabled = useMemo(() => wizardStepReached < 4 || !accptedTermsAndConditions || !submittedTask, [accptedTermsAndConditions, submittedTask, wizardStepReached]);
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
                canJumpTo: wizardStepReached > 1,
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
                component: <ExtraStep submittedTask={submittedTask} submittingTask={isSubmittingTask} />,
                isDisabled: ExtrasStepDisabled,
                canJumpTo: wizardStepReached >= 3,
            },
            {
                id: '5',
                name: 'Finish',
                component: <FinishStep />,
                isDisabled: FinishStepDisabled,
                canJumpTo: wizardStepReached >= 4,
            },
        ],
        [ConfigureStepDisabled, ExtrasStepDisabled, FinishStepDisabled, VerifyStepDisabled, hashlistVerified, verifyingHashlist, wizardStepReached]
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
        ResetSubmitted();
        dispatch(stepIdReached(1));
        dispatch(resettedWizard(2));
        goToStep('1');
    }
    const NextStepDisabled = useMemo(() => (VerifyStepDisabled && wizardStepReached === 1) || (ExtrasStepDisabled && wizardStepReached === 3), [ExtrasStepDisabled, VerifyStepDisabled, wizardStepReached]);
    const NoHashFound = (id: string | number | undefined) => id === '2' && parsedHashes.length === 0;
    const [isResetModalOpen, setIsResetModalOpen] = React.useState(false);
    const onClickSubmit = async (goToStep: (step: string) => void) => {
        toast.dismiss();
        // Submit Task
        if (submittedTask) {
            goToStep('5');
            return;
        }
        try {
            const task: TaskData = {
                ...taskData,
                selectedHashType,
                rejectedHashlist: rejectedHashes,
            };
            const response = await submitTask(task).unwrap();
            if (response.success) {
                dispatch(createdTask(response));
                goToStep('5');
                toast.success('Task submitted successfully.');
            }
        } catch (err) {
            //TODO: Log the error
            const defaultError = `Error occurred while submitting task, Please try again.`;
            if (isFetchError(err)) {
                const errors = err.data.errors;
                if (errors && errors.length > 0) {
                    errors.forEach((err) => toast.error(err));
                }
            } else if (isErrorWithMessage(err)) toast.error(err.message);
            else toast.error(defaultError);
        }
    };
    const CustomFooter = (
        <WizardFooter>
            <WizardContextConsumer>
                {({ activeStep, goToStepByName, onNext, onBack, onClose, goToStepById: goToStep }) => {
                    return (
                        <>
                            {NoHashFound(activeStep.id) || ['4', '3', '5'].includes(activeStep.id as string) ? undefined : (
                                <Button variant="primary" className={NextStepDisabled && parsedHashes.length === 0 ? 'pf-m-disabled' : ''} type="submit" onClick={onNext}>
                                    {rejectedHashes.length > 0 && activeStep.id === '2' ? '⚠️ Continue' : 'Next'}
                                </Button>
                            )}
                            {activeStep.id === '4' ? (
                                <Button variant={failedTaskSubmission ? 'warning' : 'primary'} className={(!accptedTermsAndConditions ? 'pf-m-disabled' : '') + (failedSubmissionError ? 'text-[var(--theme)]' : '')} type="submit" isLoading={isSubmittingTask} onClick={() => onClickSubmit(goToStep)}>
                                    {submittedTask ? 'Next' : isSubmittingTask ? 'Submitting' : failedTaskSubmission ? 'Retry' : 'Submit'}
                                </Button>
                            ) : undefined}
                            {parseInt(activeStep.id as string) > 2 ? (
                                <Button onClick={onBack} variant="secondary">
                                    Back
                                </Button>
                            ) : undefined}
                            <Button variant="tertiary" className={usingInput ? '' : 'pf-m-disabled'} type="submit" onClick={() => setIsResetModalOpen(true)}>
                                Reset
                            </Button>
                            <Modal
                                variant={ModalVariant.small}
                                title="Reset Wizard"
                                isOpen={isResetModalOpen}
                                onClose={() => setIsResetModalOpen(false)}
                                actions={[
                                    <Button
                                        key="confirm"
                                        variant="primary"
                                        onClick={() => {
                                            resetWizard(goToStep);
                                            setIsResetModalOpen(false);
                                        }}>
                                        Confirm
                                    </Button>,
                                    <Button key="cancel" variant="link" onClick={() => setIsResetModalOpen(false)}>
                                        Cancel
                                    </Button>,
                                ]}>
                                Are you sure you want to reset this wizard?
                            </Modal>
                        </>
                    );
                }}
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
