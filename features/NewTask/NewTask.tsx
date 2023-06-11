import AddHashlist from '@/components/AddHashlist';
import { Step, WizardPage } from '@patternfly-labs/react-form-wizard';
export default function NewTask() {
    return (
        <WizardPage
            yaml={false}
            title=""
            onSubmit={function (data: unknown): Promise<void> {
                throw new Error('Function not implemented.');
            }}
            onCancel={function (): void {
                throw new Error('Function not implemented.');
            }}>
            <Step label="Add Hashlist" id="add-hashlist">
                <AddHashlist />
            </Step>
            <Step label={'Verify Hashlist'} id={'verify-hashlist'}></Step>
        </WizardPage>
    );
}
