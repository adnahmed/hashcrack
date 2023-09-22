import { wpaGroups } from "@/assets/constants";
export interface WPAGroupItem {
    name: string;
    disabled?: boolean;
    value: string;
}
export const getWpaGroup = (hashType: string) => wpaGroups?.items.find((p) => p['value'] === hashType);
export const isWPA_EAPOL = (wpaGroup?: WPAGroupItem) => wpaGroup && /EAPOL/i.test(wpaGroup['name']);
export const isWPA_PMKID = (wpaGroup?: WPAGroupItem) => wpaGroup && /PMKID/i.test(wpaGroup['name']);

