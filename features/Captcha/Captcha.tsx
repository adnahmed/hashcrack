import { getErrorMessage } from "@/lib/error";
import {
  UnauthorizedException,
  UnprocessableEntityException,
} from "next-api-decorators";
import Image from "next/image";
import { ChangeEventHandler, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useGetCaptchaQuery,
  useVerifyCaptchaMutation,
} from "../NewTask/newTaskSlice";

export default function Captcha() {
  const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
    useGetCaptchaQuery(null, { refetchOnReconnect: true });

  const [
    verifyCaptcha,
    { isLoading: isVerifying, data: verificationResponse },
  ] = useVerifyCaptchaMutation();
  const [answer, setAnswer] = useState("");

  const setAnswerValue: ChangeEventHandler<HTMLInputElement> = (e) =>
    setAnswer(e.target.value);

  useEffect(() => {
    (async () => {
      if (answer.length == parseInt(process.env.CAPTCHA_LETTER_NUM)) {
        try {
          await verifyCaptcha(answer).unwrap();
          // setCaptchaVerified(!!verificationResponse?.result); // dispatch verified captcha
        } catch (error) {
          // this error is internal only
          if (
            error instanceof UnprocessableEntityException ||
            error instanceof UnauthorizedException
          ) {
            const { message } = error;
            toast.error(`${getErrorMessage(message)}`, {
              duration: 2000,
            });
          }
        }
        setAnswer("");
        refetch();
      }
    })();
  }, [answer, refetch, verificationResponse?.result, verifyCaptcha]);
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
