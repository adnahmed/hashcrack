import KaitaiStream from "@/kaitai-struct/KaitaiStream";

export interface HccapRecord {
    essid: Uint8Array;
    macAp: Uint8Array;
    macStation: Uint8Array;
    nonceStation: Uint8Array;
    nonceAp: Uint8Array;
    eapolBuffer: KaitaiStream<ArrayBuffer>;
    lenEapol: number;
    keyver: number;
    keymic: Uint8Array;
    _raw_eapolBuffer: Uint8Array;
}
export interface HccapxRecord {
    magic: Uint8Array;
    version: number;
    ignoreReplayCounter: boolean;
    messagePair: number;
    lenEssid: number;
    essid: Uint8Array;
    padding1: Uint8Array;
    keyver: number;
    keymic: Uint8Array;
    macAp: Uint8Array;
    nonceAp: Uint8Array;
    macStation: Uint8Array;
    nonceStation: Uint8Array;
    lenEapol: number;
    eapol: Uint8Array;
    padding2: Uint8Array;
}