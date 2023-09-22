import HashlistText from '@/components/HashlistText';
import { getWpaGroup, isWPA_EAPOL, isWPA_PMKID } from '@/utils/wpa';
import { useMemo } from 'react';
import { HashInputInstructions, HashInputProps } from '../../HashInput';

const WPAPMKIDHash: React.FunctionComponent<HashInputProps> = ({ hashType }) => {
    const wpaGroup = useMemo(() => getWpaGroup(hashType), [hashType]);
    const isEAPOL = useMemo(() => isWPA_EAPOL(wpaGroup), [wpaGroup]);
    const isPMKID = useMemo(() => isWPA_PMKID(wpaGroup), [wpaGroup]);
    if (!wpaGroup || isEAPOL) return null;
    return (
        <>
            <HashlistText wireless isPMKID={isPMKID} />
            <HashInputInstructions wireless={true} />
        </>
    );
};

export default WPAPMKIDHash;
