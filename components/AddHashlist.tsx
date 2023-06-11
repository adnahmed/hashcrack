import hashTypes from '@/assets/hash-types.json';
import HashInput from '@/features/HashInput/HashInput';
import { selectSelectedHashType, selectedHashType } from '@/features/NewTask/newTaskSlice';
import { Section } from '@patternfly-labs/react-form-wizard';
import { useDispatch, useSelector } from 'react-redux';
import SelectSearch from 'react-select-search';
function AddHashlist() {
    const dispatch = useDispatch();
    const hashtype = useSelector(selectSelectedHashType);
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
