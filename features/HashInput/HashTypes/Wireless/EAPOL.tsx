import hashTypes from '@/assets/hash-types.json';
import { verifyHashlist } from '@/features/NewTask/newTaskSlice';
import clsx from 'clsx';
import { useCallback } from 'react';
import { useDropzone, type DropzoneOptions } from 'react-dropzone';
import { useAppDispatch } from '../../../../lib/redux/store';
import { HashInputInstructions, HashInputProps } from '../../HashInput';
export const WPACaptureFileTypes = ['.cap', '.pcap', '.hccap', '.hccapx'];
const EAPOLWirelessHash: React.FunctionComponent<HashInputProps> = ({ hashType }) => {
    const { options } = hashTypes;
    const wirelessNetworkGroup = options.find((p) => /wireless networks/i.test(p['name']));
    const isWireless = wirelessNetworkGroup?.items.find((p) => p['value'] === hashType);
    const isEAPOL = isWireless && /EAPOL/i.test(isWireless['name']);
    const dispatch = useAppDispatch();
    const onDrop = useCallback<NonNullable<DropzoneOptions['onDrop']>>(async (acceptedFiles) => {
        try {
            const resp = await dispatch(verifyHashlist({ inputMethod: 'file', hashlistFile: acceptedFiles[0] })).unwrap();
            console.log(resp);
        } catch (err) {
            console.error(err);
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'application/octet-stream': WPACaptureFileTypes,
        },
    });
    return isEAPOL ? (
        <>
            <div {...getRootProps({ className: clsx({ dropzone: true, 'border-gray-500': true, 'bg-green-100': isDragReject, 'border-green-300': isDragReject }) })}>
                <input name="capFile" {...getInputProps()} />
                <p className="dropzone-p">{!isDragActive ? 'Drag here .hccap, .hccapx, .cap, .pcap with WPA handshake or click to browse' : 'Drop file here...'}</p>
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
