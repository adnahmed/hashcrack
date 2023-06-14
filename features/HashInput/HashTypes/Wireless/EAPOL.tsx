import hashTypes from '@/assets/hash-types.json';
import { useDropzone } from 'react-dropzone';
import { HashInputInstructions, HashInputProps } from '../../HashInput';

const EAPOLWirelessHash: React.FunctionComponent<HashInputProps> = ({ hashType }) => {
    const { options } = hashTypes;
    const wirelessNetworkGroup = options.find((p) => /wireless networks/i.test(p['name']));
    const isWireless = wirelessNetworkGroup?.items.find((p) => p['value'] === hashType);
    const isEAPOL = isWireless && /EAPOL/i.test(isWireless['name']);
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    return isEAPOL ? (
        <>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input name="capFile" {...getInputProps()} />
                <p className="dropzone-p">Drag here .hccap, .hccapx, .cap, .pcap with WPA handshake or click to browse</p>
            </div>
            <label htmlFor="essid" className="text-sm leading-7 text-gray-600">
                ESSID
                <input id="essid" placeholder="(case sensitive, leave blank for autodetect)" maxLength={32} type="text" name="essid" className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
            </label>
            <label htmlFor="bssid" className="text-sm leading-7 text-gray-600">
                BSSID
                <input id="bssid" placeholder="(hexadecimal, leave blank for autodetect)" maxLength={17} type="text" name="bssid" className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
            </label>
            <HashInputInstructions wireless={true} />
        </>
    ) : null;
};

export default EAPOLWirelessHash;
