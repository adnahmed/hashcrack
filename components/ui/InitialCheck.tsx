import Captcha from "@/features/Captcha/Captcha";

function IntialCheck() {
  return (
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
  );
}

export default IntialCheck;
