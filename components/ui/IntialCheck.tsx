import Captcha from "@/features/Captcha/Captcha";
import { selectCaptchaValidated } from "@/features/Captcha/captchaSlice";
import { useSelector } from "react-redux";

function IntialCheck({ children }: { children: JSX.Element }) {
  const captchaValidated = useSelector(selectCaptchaValidated);
  return !captchaValidated ? (
    <div>
      <div>
        <span>Please wait while we are checking your browser...</span>
      </div>
      <div>
        <span>Connection Problems? Let us Know</span>
        <div>
          <a>Contact Us</a> <a> Status</a>
        </div>
      </div>
      <Captcha />
    </div>
  ) : (
    children
  );
}

export default IntialCheck;
