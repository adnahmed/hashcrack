import Captcha from "@/features/Captcha/Captcha";
import style from "@/styles/InitialCheck.module.css";
import Image from "next/image";
import DotLoader from "./DotLoader";
function IntialCheck() {
  return (
    <div className={style.main}>
      <Image
        alt="Logo"
        width={150}
        height={150}
        src="/favicon.ico"
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
    </div>
  );
}

export default IntialCheck;
