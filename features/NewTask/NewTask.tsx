import hashTypes from "@/data/hash-types.json";
import HashInput from "@/features/HashInput/HashInput";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectCaptchaVerified } from "../Captcha/captchaSlice";
import VerifyTask from "../VerifyTask/VerifyTask";

export default function NewTask() {
  const { optgroups } = hashTypes;
  const captchaVerified = useSelector(selectCaptchaVerified);
  const [hashType, setHashType] = useState<string | undefined>();
  return (
    <>
      <select onChange={(e) => setHashType(e.target.value)}>
        <option value="-1">Select hash type...</option>
        {optgroups.map((optgroup) => (
          <optgroup key={optgroup["@label"]} label={optgroup["@label"]}>
            {optgroup.options.map((option) => (
              <option
                key={option["#text"]}
                value={option["@value"]}
                disabled={option["@disabled"] !== undefined}
              >
                {option["#text"]}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {hashType !== undefined && hashType !== "-1" && (
        <HashInput hashType={hashType} />
      )}
      {captchaVerified && <VerifyTask />}
      <Toaster />
    </>
  );
}
