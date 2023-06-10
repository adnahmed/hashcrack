import hashTypes from '@/assets/hash-types.json';
import { Section, Step, WizardPage } from '@patternfly-labs/react-form-wizard';
import { useState } from 'react';
import SelectSearch from 'react-select-search';
import HashInput from '../HashInput/HashInput';
export default function NewTask() {
    const { options } = hashTypes;
    const [hashType, setHashType] = useState<string>('-1');
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
                <Section autohide={false} id="select-hashtype" label={'Select Hash Type'}>
                    <SelectSearch
                        onChange={(selectedValue) => {
                            setHashType(selectedValue.toString());
                        }}
                        search
                        options={options}
                        placeholder="Choose Hash Type"
                    />
                </Section>
                {hashType !== undefined && hashType !== '-1' && (
                    <Section autohide={false} id="input-hash" label={'Input Hashlist'}>
                        <HashInput hashType={hashType} />
                    </Section>
                )}
            </Step>
        </WizardPage>
    );
}
