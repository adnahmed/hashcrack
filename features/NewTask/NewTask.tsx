import AddHashlist from '@/components/AddHashlist';
import { Wizard, WizardStep } from '@patternfly/react-core';
import { useDispatch, useSelector } from 'react-redux';
import { initiatedVerifyHashList, selectVerificationState, selectWizardStepReached, stepIdReached } from './newTaskSlice';
export default function NewTask() {
    const wizardStepReached = useSelector(selectWizardStepReached);
    const verificationSatus = useSelector(selectVerificationState);
    const dispatch = useDispatch();
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
