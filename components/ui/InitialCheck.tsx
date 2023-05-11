import Captcha from "@/features/Captcha/Captcha";
import Logo from "@/public/favicon.svg";
import style from "@/styles/InitialCheck.module.css";
import { Toaster } from "react-hot-toast";
import DotLoader from "./DotLoader";

function IntialCheck() {
  return (
    <div className={style.main}>
      <img
        src={Logo}
        alt="Logo"
        width={150}
        height={150}
        className={style.logo}
      />
      <span className={style.waitmessage}>
        Please wait while we are checking your browser...
      </span>
      <div>
        <DotLoader />
        <Captcha className={style.captcha} />
      </div>
      <div className={style.footer}>
        <span>Connection Problems? Let us Know</span>
        <div>
          <a>Contact Us</a> | <a> Status</a>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default IntialCheck;
