import HashlistContext from '@/Context/HashlistContext';
import AddHashlist from '@/components/AddHashlist';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import { Wizard, WizardStep } from '@patternfly/react-core';
import { useContext, useEffect } from 'react';
import VerifyHashlist from '../VerifyHashlist/VerifyHashlist';
import { selectHashlistVerified, selectWizardStepReached, stepIdReached, verifyHashlist } from './newTaskSlice';

export default function NewTask() {
    const wizardStepReached = useAppSelector(selectWizardStepReached);
    const hashlistVerified = useAppSelector(selectHashlistVerified);
    const hashlistConsumer = useContext(HashlistContext);
    const dispatch = useAppDispatch();
    useEffect(() => {
        console.log(wizardStepReached);
    }, [wizardStepReached]);

    const steps: WizardStep[] = (() => {
        let steps = [
            { name: 'Add Hashlist', component: <AddHashlist /> },
            { name: 'Verify Hashlist', component: <VerifyHashlist />, isDisabled: false },
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
        console.log('try me');
    };

    const onNext = ({ id }: WizardStep) => {
        if (id) {
            console.log(id);
            if (typeof id === 'string') {
                id = parseInt(id);
            }
            if (id === 2) {
                if (hashlistConsumer !== null) dispatch(verifyHashlist({ inputMethod: 'textarea', hashlist: hashlistConsumer.hashlist.split('\n') }));
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
