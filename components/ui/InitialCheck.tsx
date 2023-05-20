import Captcha from "@/features/Captcha/Captcha";
import Logo from "@/public/favicon.svg";
import style from "@/styles/InitialCheck.module.css";
import { Toaster } from "react-hot-toast";
import Obfuscate from "react-obfuscate";
import DotLoader from "./DotLoader";

function IntialCheck() {
  return (
    <div className={style.main}>
      <img
        src={Logo}
        alt="Logo"
        className="w-fl-3xl h-fl-3xl"
      />
      <span className={`text-fl-md w-auto text-center`}>
        Please wait while we are checking your browser...
      </span>
      <div>
        <DotLoader />
        <Captcha />
      </div>
      <div>
        <span className="text-fl-xs text-center break-before-all">Connection Problems? Let us Know</span>
        <div className="text-center text-fl-2xs underline">
          <Obfuscate
            email="aboody.hammad@gmail.com"
            headers={{
              subject: "CrackQ.Me Support: *Your Issue* ",
              body: "",
            }}
            obfuscateChildren={false}
          >
            Contact Us
          </Obfuscate>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default IntialCheck;
