import hashTypes from '@/assets/hash-types.json';
import HashlistText from '@/components/HashlistText';
import { HashInputInstructions, HashInputProps } from '../../HashInput';

const WPAPMKIDHash: React.FunctionComponent<HashInputProps> = ({ hashType }) => {
    const { options } = hashTypes;
    const wirelessNetworkGroup = options.find((p) => /wireless networks/i.test(p['name']));
    const isWireless = wirelessNetworkGroup?.items.find((p) => p['value'] === hashType);
    const isEAPOL = isWireless && /EAPOL/i.test(isWireless['name']);
    const isPMKID = isWireless && /PMKID/i.test(isWireless['name']);
    return isWireless && !isEAPOL ? (
        <>
            <HashlistText wireless isPMKID={isPMKID} />
            <HashInputInstructions wireless={true} />
        </>
    ) : null;
};

export default WPAPMKIDHash;
