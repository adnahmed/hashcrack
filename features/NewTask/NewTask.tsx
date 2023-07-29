import HashlistContext from '@/Context/HashlistContext';
import AddHashlist from '@/components/AddHashlist';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import { getHashlist } from '@/lib/utils';
import { Button, Wizard, WizardContextConsumer, WizardFooter, WizardStep } from '@patternfly/react-core';
import { useContext, useMemo } from 'react';
import ConfigureTask from '../ConfigureTask/ConfigureTask';
import VerifyHashlist from '../VerifyHashlist/VerifyHashlist';
import { selectWizardStepReached, stepIdReached } from '../Wizard/wizardSlice';
import { selectHashlistFile, selectHashlistVerified, selectParsedHashlist, selectSelectedHashType, selectVerifyingHashlist } from './newTaskSlice';
import { verifyHashlist } from './verifyHashlistThunk';

export default function NewTask() {
    const wizardStepReached = useAppSelector(selectWizardStepReached);
    const selectedHashType = useAppSelector(selectSelectedHashType);
    const hashlistVerified = useAppSelector(selectHashlistVerified);
    const verifyingHashlist = useAppSelector(selectVerifyingHashlist);
    const hashlistFile = useAppSelector(selectHashlistFile);
    const parsedHashes = useAppSelector(selectParsedHashlist);
    const hashlistConsumer = useContext(HashlistContext);
    const usingTextArea = hashlistConsumer && hashlistConsumer.hashlist.length !== 0;
    const VerifyStepDisabled = useMemo(() => (hashlistFile === undefined && !usingTextArea) || selectedHashType === '-1', [hashlistFile, usingTextArea, selectedHashType]);
    const dispatch = useAppDispatch();
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

    const onReset = ({ id }: WizardStep) => {
        // TODO: Add reset reducer
    };

    const CustomFooter = (
        <WizardFooter>
            <WizardContextConsumer>
                {({ activeStep, goToStepByName, onNext, onBack, onClose }) => {
                    if (activeStep.id === '1') {
                        return (
                            <>
                                <Button variant="primary" className={VerifyStepDisabled ? 'pf-m-disabled' : ''} type="submit" onClick={onNext}>
                                    Next
                                </Button>
                            </>
                        );
                    }
                    return (
                        <>
                            {/* <Button onClick={() => validateLastStep(onNext)}>Validate</Button> */}
                            {/* <Button onClick={() => goToStepByName('First step')}>Go to Beginning</Button> */}
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
            onBack={onReset}
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
