import AddHashlist from '@/components/AddHashlist';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import { Wizard, WizardStep } from '@patternfly/react-core';
import { initiatedVerifyHashList, selectVerificationState, selectWizardStepReached, stepIdReached } from './newTaskSlice';
export default function NewTask() {
    const wizardStepReached = useAppSelector(selectWizardStepReached);
    const verificationSatus = useAppSelector(selectVerificationState);
    const dispatch = useAppDispatch();
    const steps: WizardStep[] = (() => {
        let steps = [
            { name: 'Add Hashlist', component: <AddHashlist /> },
            { name: 'Verify Hashlist', component: <AddHashlist /> },
        ];
        let id = 1;
        steps = steps.map((step) => ({
            ...step,
            id: id++,
            canJumpTo: id > 1 ? wizardStepReached : null,
        }));
        return steps;
    })();
    const closeWizard = () => {
        // eslint-disable-next-line no-console
        console.log('close wizard');
    };
    const onNext = ({ id }: WizardStep) => {
        if (id) {
            if (typeof id === 'string') {
                id = parseInt(id);
            }
            if (id === 2) {
                dispatch(initiatedVerifyHashList());
            }
            dispatch(stepIdReached(wizardStepReached < id ? id : wizardStepReached));
        }
    };

    return (
        <Wizard
            hideClose={true}
            cancelButtonText=""
            title=""
            onNext={onNext}
            onClose={closeWizard}
            onSubmit={function (data: unknown): Promise<void> {
                throw new Error('Function not implemented.');
            }}
            steps={steps}
        />
    );
}
