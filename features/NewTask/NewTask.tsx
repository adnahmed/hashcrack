import hashTypes from '@/assets/hash-types.json';
import { Section, Step, WizardPage } from '@patternfly-labs/react-form-wizard';
import { useDispatch, useSelector } from 'react-redux';
import SelectSearch from 'react-select-search';
import HashInput from '../HashInput/HashInput';
import { selectSelectedHashType, selectedHashType } from './newTaskSlice';
export default function NewTask() {
    const { options } = hashTypes;
    const dispatch = useDispatch();
    const hashtype = useSelector(selectSelectedHashType);
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
                            dispatch(selectedHashType(selectedValue.toString()));
                        }}
                        search
                        options={options}
                        placeholder="Choose Hash Type"
                    />
                </Section>
                {hashtype !== undefined && hashtype !== '-1' && <HashInput hashType={hashtype} />}
            </Step>
            <Step
                hidden={(item) => {
                    return true;
                }}
                label={'Verify Hashlist'}
                id={'verify-hashlist'}></Step>
        </WizardPage>
    );
}
