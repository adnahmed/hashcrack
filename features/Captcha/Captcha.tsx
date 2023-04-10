// TODO: Replace with ReCaptcha Cloudflare.
import Image from "next/image";
import { ChangeEventHandler, useState } from "react";

import { useGetCaptchaQuery, useVerifyCaptchaMutation } from "./captchaSlice";
import { useAnswer } from "./lib";

export default function Captcha() {
  const [answer, setAnswer] = useState("");
  const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
    useGetCaptchaQuery(null, { refetchOnReconnect: true });
  const setAnswerValue: ChangeEventHandler<HTMLInputElement> = (e) =>
    setAnswer(e.target.value);
  const [verifyCaptcha, { isLoading: isVerifying }] =
    useVerifyCaptchaMutation();
  useAnswer({ answer, setAnswer, refetch, verifyCaptcha });
  return (
    <>
      {isLoading || isFetching ? (
        <div>...</div>
      ) : isError ? (
        <div>
          error loading captcha {JSON.stringify(error)}{" "}
          {/* TODO: improve error handling*/}
        </div>
      ) : (
        isSuccess &&
        data && (
          <>
            <Image
              unoptimized
              width="200"
              height="72"
              alt="captcha"
              src={`data:image/png;base64,${data.captcha}`}
            />
            <input
              value={answer}
              disabled={isVerifying}
              type="text"
              onChange={setAnswerValue}
            />
          </>
        )
      )}
      <button onClick={refetch}>retry</button>
    </>
  );
}
