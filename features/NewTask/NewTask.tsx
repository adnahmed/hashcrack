import Title from "@/components/Title";
import hashTypes from "@/data/hash-types.json";
import HashInput from "@/features/HashInput/HashInput";
import style from '@/styles/NewTask.module.css';
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import SelectSearch from 'react-select-search';
import { selectCaptchaValidated } from "../Captcha/captchaSlice";
import VerifyTask from "../VerifyTask/VerifyTask";

export default function NewTask() {
  const { options } = hashTypes;
  const captchaVerified = useSelector(selectCaptchaValidated);
  const [hashType, setHashType] = useState<string>("-1");
  return (
    <div className={`my-auto flex flex-col items-center justify-center gap-fl-md text-center ${style.main} `}>
      <Title className="text-fl-sm sm:text-fl-lg md:text-fl-xl lg:text-2xl" text={hashType === '-1' ? "Please choose a hash type to continue." : "Add Hash Lists"} />
      <SelectSearch onChange={(selectedValue) => setHashType(selectedValue.toString())} search options={options} placeholder="Choose Hash Type" />
      {hashType !== undefined && hashType !== "-1" && (
        <HashInput hashType={hashType} />
      )}
      {captchaVerified && <VerifyTask />}
      <Toaster />
    </div>
  );
}
