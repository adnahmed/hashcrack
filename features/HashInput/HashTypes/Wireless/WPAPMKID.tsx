import hashTypes from '@/assets/hash-types.json';
import { HashInputInstructions, HashInputProps } from '../../HashInput';

const WPAPMKIDHash: React.FunctionComponent<HashInputProps> = ({ hashType }) => {
    const { options } = hashTypes;
    const wirelessNetworkGroup = options.find((p) => /wireless networks/i.test(p['name']));
    const isWireless = wirelessNetworkGroup?.items.find((p) => p['value'] === hashType);
    const isEAPOL = isWireless && /EAPOL/i.test(isWireless['name']);
    const isPMKID = isWireless && /PMKID/i.test(isWireless['name']);
    return isWireless && !isEAPOL ? (
        <>
            <textarea id="hashlist" name="hashlist" className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
            <label htmlFor="hashlist" className="mx-auto mb-5 text-sm leading-7 text-gray-600">
                {isPMKID ? 'Paste your WPA PMKID here, multiple APs not allowed' : 'Paste your WPA hash (-m 22000) here, only one hash per task allowed'}
                <span className="text-red-500">*</span>
            </label>
            <HashInputInstructions wireless={true} />
        </>
    ) : null;
};

export default WPAPMKIDHash;
