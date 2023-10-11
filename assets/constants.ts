import hashTypes from '@/assets/hash-types.json';
import HashtypePrototypes from '@/assets/hashtype_prototypes.json';
const { options } = hashTypes;
export const CAPTCHA_HEADER_TOKEN = "X-CF-CAPTCHA-TOKEN";

export const hashcat_modes = HashtypePrototypes
    // Filter protos with null hashcat modes.
    .filter(proto => proto.modes.find(d => d.hashcat !== null))
    .map(proto => proto.modes.map(d => d.hashcat))
    .reduce((prev, modes) => prev.concat(modes))
    .filter(m => m !== null)
    .map(m => m?.toString());

export const WPACaptureFileTypes = ['.cap', '.pcap', '.hccap', '.hccapx', '.pcapng'];

export type WPACaptureFileType = 'cap' | 'pcap' | 'hccap' | 'hccapx' | 'pcapng'

export const wpaGroups = options.find((p) => /wireless networks/i.test(p['name']));