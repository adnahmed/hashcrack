import hashTypes from "@/data/hash-types.json";
import Captcha from "@/features/Captcha/Captcha";
import { useSelector } from "react-redux";
import { selectCaptchaValidated } from "../Captcha/captchaSlice";
interface HashInputProps {
  hashType: string;
}

export default function HashInput({ hashType }: HashInputProps) {
  const { optgroups } = hashTypes;
  const wirelessNetworkGroup = optgroups.find((p) =>
    /wireless networks/i.test(p["@label"])
  );
  const isWireless = wirelessNetworkGroup?.options.find(
    (p) => p["@value"] === hashType
  );
  const isEAPOL = isWireless && /EAPOL/i.test(isWireless["#text"]);
  const isPMKID = isWireless && /PMKID/i.test(isWireless["#text"]);
  const captchaVerified = useSelector(selectCaptchaValidated);
  return (
    <>
      {isWireless ? (
        <>
          {isEAPOL ? (
            <>
              <label>
                <input type="file" name="capFile" />
                Drag here .hccap, .hccapx, .cap, .pcap with WPA handshake or
                click to browse
              </label>
              <label>
                ESSID (case sensitive, leave blank for autodetect)
                <input type="text" name="essid" />
              </label>
              <label>
                BSSID (hexadecimal, leave blank for autodetect)
                <input type="number" name="bssid" />
              </label>
            </>
          ) : (
            <label>
              <input type="text" name="hashlist" />
              {isPMKID
                ? "Paste your WPA PMKID here, multiple APs not allowed"
                : "Paste your WPA hash (-m 22000) here, only one hash per task allowed"}
            </label>
          )}
        </>
      ) : (
        <>
          <label>
            <input type="text" name="hashlist" />
            Paste your hashlist here
          </label>
          OR
          <label>
            <input type="file" name="hashlistFile" />
            Drag here hashlist file or click to browse
          </label>
        </>
      )}
      <HashInputInstructions wireless={isWireless !== undefined} />
      {!captchaVerified && <Captcha />}
    </>
  );
}

function HashInputInstructions({ wireless }: { wireless: boolean }) {
  return wireless ? (
    <p id="pcap_capture_instructions">
      We accept WPA PCAP captures (*.cap, *.pcap) and converted HCCAP/HCCAPX
      (*.hccap,*.hccapx) files If your capture contains handshakes of different
      APs please fill ESSID/BSSID fields If you want to upload WPA PMKID (-m
      16800) or newer WPA hash (-m 22000) please select the appropriate WPA/WPA
      hash type above
    </p>
  ) : (
    <p id="hashlist_instructions">
      Your lists must be in the right format and use `:` as a separator if the
      algorithm uses salts For non-salted algorithms, it is just the hash and
      nothing else For salted algorithms, use the hash:salt format and nothing
      else
    </p>
  );
}
