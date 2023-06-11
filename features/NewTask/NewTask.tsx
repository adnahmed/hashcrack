import AddHashlist from '@/components/AddHashlist';
import { Step, WizardPage } from '@patternfly-labs/react-form-wizard';
const steps = [{ name: 'Add Hashlist', component: <AddHashlist /> }];
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
            {steps.map((step) => (
                <Step key={step.name} label={step.name} id={step.name.toLocaleLowerCase().replace(' ', '-')}>
                    {step.component}
                </Step>
            ))}
        </WizardPage>
    );
}
