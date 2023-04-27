import Captcha from "@/features/Captcha/Captcha";
import style from "@/styles/InitialCheck.module.css";
import Image from "next/image";
function IntialCheck() {
  return (
    <div className={style.main}>
      <Image
        alt="Logo"
        width={200}
        height={200}
        src="/favicon.ico"
        className={style.logo}
      />
      <span className={style.waitmessage}>
        Please wait while we are checking your browser...
      </span>
      <Captcha className={style.captcha} />
      <div className={style.status}>
        <span className={style.connectionquery}>
          Connection Problems? Let us Know
        </span>
        <div>
          <a>Contact Us</a> <a> Status</a>
        </div>
      </div>
    </div>
  );
}

export default IntialCheck;
