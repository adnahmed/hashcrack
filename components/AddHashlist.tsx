import hashTypes from '@/assets/hash-types.json';
import HashInput from '@/features/HashInput/HashInput';
import { selectSelectedHashType, selectedHashType } from '@/features/NewTask/newTaskSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import { Section } from '@patternfly-labs/react-form-wizard';
import { Progress } from 'flowbite-react';
import SelectSearch from 'react-select-search';

const ReadingHashlistProgress: React.FunctionComponent = () => <Progress title="Reading Hashlist" progress={0} />;
function AddHashlist() {
    const dispatch = useAppDispatch();
    const hashtype = useAppSelector(selectSelectedHashType);
    const { options } = hashTypes;
    return (
        <>
            <Section autohide={false} id="select-hashtype" label={'Select Hash Type'}>
                <SelectSearch
                    onChange={(selectedValue) => {
                        dispatch(selectedHashType(selectedValue.toString()));
                    }}
                    search
                    options={options}
                    value={hashtype}
                    placeholder="Choose Hash Type"
                />
            </Section>
            {hashtype !== undefined && hashtype !== '-1' && <HashInput hashType={hashtype} />}
        </>
    );
}

export default AddHashlist;
