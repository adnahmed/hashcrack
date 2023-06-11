import AddHashlist from '@/components/AddHashlist';
import { Wizard } from '@patternfly/react-core';
const steps = [{ name: 'Add Hashlist', component: <AddHashlist /> }];
export default function NewTask() {
    return (
        <Wizard
            title=""
            onSubmit={function (data: unknown): Promise<void> {
                throw new Error('Function not implemented.');
            }}
            steps={steps}
        />
    );
}
