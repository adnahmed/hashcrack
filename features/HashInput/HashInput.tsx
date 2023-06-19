import { persistor } from '@/lib/redux/store';
import dynamic from 'next/dynamic';
import AllHashTypes from './HashTypes/All';
import EAPOLWirelessHash from './HashTypes/Wireless/EAPOL';
import WPAPMKIDHash from './HashTypes/Wireless/WPAPMKID';
const PersistGate = dynamic(import('redux-persist/integration/react').then((module) => module.PersistGate));
export interface HashInputProps {
    hashType: string;
}

export default function HashInput({ hashType }: HashInputProps) {
    return (
        <PersistGate persistor={persistor}>
            <EAPOLWirelessHash hashType={hashType} />
            <WPAPMKIDHash hashType={hashType} />
            <AllHashTypes hashType={hashType} />
        </PersistGate>
    );
}

export function HashInputInstructions({ wireless }: { wireless: boolean }) {
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
