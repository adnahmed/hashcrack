import HashlistContext from '@/Context/HashlistContext';
import AddHashlist from '@/components/AddHashlist';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { Button, Wizard, WizardContextConsumer, WizardFooter, WizardStep } from '@patternfly/react-core';
import React, { useContext, useMemo } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { activeTabChanged, selectActiveTab } from '../../features/Navigation/navigationSlice';
import ConfigureTask from '../ConfigureTask/ConfigureTask';
import VerifyHashlist from '../VerifyHashlist/VerifyHashlist';
import { selectWizardStepReached, stepIdReached } from '../Wizard/wizardSlice';
import { selectHashlistFile, selectHashlistVerified, selectParsedHashlist, selectRejectedHashlist, selectSelectedHashType, selectVerifyingHashlist } from './newTaskSlice';
import { verifyHashlist } from './verifyHashlistThunk';

export default function NewTask() {
    const wizardStepReached = useAppSelector(selectWizardStepReached);
    const selectedHashType = useAppSelector(selectSelectedHashType);
    const hashlistVerified = useAppSelector(selectHashlistVerified);
    const verifyingHashlist = useAppSelector(selectVerifyingHashlist);
    const hashlistFile = useAppSelector(selectHashlistFile);
    const parsedHashes = useAppSelector(selectParsedHashlist);
    const rejectedHashes = useAppSelector(selectRejectedHashlist);
    const hashlistConsumer = useContext(HashlistContext);
    const activeTab = useAppSelector(selectActiveTab);
    const usingTextArea = hashlistConsumer && hashlistConsumer.hashlist.length !== 0;
    const VerifyStepDisabled = useMemo(() => (hashlistFile === undefined && !usingTextArea) || selectedHashType === '-1', [hashlistFile, usingTextArea, selectedHashType]);
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
            },
            {
                id: '2',
                name: 'Verify Hashlist',
                component: <VerifyHashlist />,
                isDisabled: VerifyStepDisabled,
                canJumpTo: wizardStepReached === 2,
            },
            {
                id: '3',
                name: 'Configure Task',
                component: <ConfigureTask />,
                isDisabled: parsedHashes.length === 0,
                canJumpTo: wizardStepReached === 2,
            },
        ],
        [hashlistFile, hashlistVerified, selectedHashType, usingTextArea, verifyingHashlist, wizardStepReached]
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
            }
        }
    };

    function resetWizard(goToStep: (step: string) => void) {
        hashlistConsumer?.setHashlist('');
        dispatch(activeTabChanged(1));
        goToStep('1');
    }
    const NextStepDisabled = VerifyStepDisabled;
    const CustomFooter = (
        <WizardFooter>
            <WizardContextConsumer>
                {({ activeStep, goToStepByName, onNext, onBack, onClose, goToStepById: goToStep }) => (
                    <>
                        {activeStep.id === '2' && parsedHashes.length === 0 ? undefined : (
                            <Button variant="primary" className={NextStepDisabled ? 'pf-m-disabled' : ''} type="submit" onClick={onNext}>
                                {rejectedHashes.length > 0 && activeStep.id === '2' ? '⚠️ Continue' : 'Next'}
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
