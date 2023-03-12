import { useAppDispatch } from "@/hooks/useApp";
import { getErrorMessage } from "@/lib/error";
import Image from "next/image";
import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { isFetchBaseQueryError } from "../../lib/error";
import {
  captchaVerified,
  useGetCaptchaQuery,
  useVerifyCaptchaMutation,
} from "./captchaSlice";
interface useAnswerProps {
  setAnswer: Dispatch<SetStateAction<string>>;
  answer: string;
  refetch: ReturnType<typeof useGetCaptchaQuery>["refetch"];
  verifyCaptcha: ReturnType<typeof useVerifyCaptchaMutation>["0"];
}
function useAnswer({
  setAnswer,
  answer,
  refetch,
  verifyCaptcha,
}: useAnswerProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      if (answer.length == parseInt(process.env.CAPTCHA_LETTER_NUM)) {
        try {
          const result = await verifyCaptcha(answer).unwrap();
          if (result.verified) {
            dispatch(captchaVerified({ result }));
          }
        } catch (error) {
          if (isFetchBaseQueryError(error)) {
            const { data } = error;
            toast.error(`${getErrorMessage(data)}`, {
              duration: 5000,
            });
          }
          refetch();
        }
        setAnswer("");
      }
    })();
  }, [answer, dispatch, refetch, setAnswer, verifyCaptcha]);
}

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
