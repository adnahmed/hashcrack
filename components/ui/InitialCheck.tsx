import Captcha from "@/features/Captcha/Captcha";
import style from "@/styles/InitialCheck.module.css";
import Image from "next/image";
function IntialCheck() {
  return (
    <div className={style.main}>
      <Image
        alt="Logo"
        width={300}
        height={300}
        src="/favicon.ico"
        className={style.logo}
      />
      <span className={style.waitmessage}>
        Please wait while we are checking your browser...
      </span>
      <Captcha className={style.captcha} />
      <span className={style.connectionquery}>
        Connection Problems? Let us Know
      </span>
      <a className={style.contactus}>Contact Us</a>{" "}
      <a className={style.status}> Status</a>
    </div>
  );
}

export default IntialCheck;
