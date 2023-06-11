import hashTypes from '@/assets/hash-types.json';
import Captcha from '@/features/Captcha/Captcha';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import { selectCaptchaValidated } from '../Captcha/captchaSlice';
interface HashInputProps {
    hashType: string;
}

export default function HashInput({ hashType }: HashInputProps) {
    const { options } = hashTypes;
    const wirelessNetworkGroup = options.find((p) => /wireless networks/i.test(p['name']));
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const isWireless = wirelessNetworkGroup?.items.find((p) => p['value'] === hashType);
    const isEAPOL = isWireless && /EAPOL/i.test(isWireless['name']);
    const isPMKID = isWireless && /PMKID/i.test(isWireless['name']);
    const captchaVerified = useSelector(selectCaptchaValidated);
    return (
        <>
            {isWireless ? (
                <>
                    {isEAPOL ? (
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
                        </>
                    ) : (
                        <>
                            <textarea id="hashlist" name="hashlist" className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
                            <label htmlFor="hashlist" className="mx-auto text-sm leading-7 text-gray-600">
                                {isPMKID ? 'Paste your WPA PMKID here, multiple APs not allowed' : 'Paste your WPA hash (-m 22000) here, only one hash per task allowed'}
                                <span className="text-red-500">*</span>
                            </label>
                        </>
                    )}
                </>
            ) : (
                <>
                    <textarea id="hashlist" name="hashlist" className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
                    <label htmlFor="hashlist" className="mx-auto text-sm leading-7 text-gray-600">
                        Paste your hashlist here
                        <span className="text-red-500">*</span>
                    </label>
                    <p className="mx-auto text-lg leading-7 text-gray-800">OR</p>
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input name="hashlistFile" {...getInputProps()} />
                        <p className="dropzone-p">Drag here hashlist file or click to browse</p>
                    </div>
                </>
            )}
            <HashInputInstructions wireless={isWireless !== undefined} />
            {!captchaVerified && <Captcha />}
        </>
    );
}

function HashInputInstructions({ wireless }: { wireless: boolean }) {
    return wireless ? (
        <p className="text-sm leading-7 text-gray-600" id="pcap_capture_instructions">
            We accept WPA PCAP captures (*.cap, *.pcap) and converted HCCAP/HCCAPX (*.hccap,*.hccapx) files. <br />
            If your capture contains handshakes of different APs please fill ESSID/BSSID fields.
            <br />
            If you want to upload WPA PMKID (-m 16800) or newer WPA hash (-m 22000) please select the appropriate WPA/WPA hash type above
        </p>
    ) : (
        <p id="hashlist_instructions" className="text-sm leading-7 text-gray-600">
            Your lists must be in the right format and use `:` as a separator if the algorithm uses salts.
            <br />
            For non-salted algorithms, it is just the hash and nothing else.
            <br />
            For salted algorithms, use the hash:salt format and nothing else.
        </p>
    );
}
