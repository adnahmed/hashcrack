import { useAppDispatch } from "@/hooks/useApp";
import { getErrorMessage, isFetchBaseQueryError } from "@/lib/error";
import { Dispatch, SetStateAction, useEffect } from "react";
import toast from "react-hot-toast";
interface useAnswerProps {
  setAnswer: Dispatch<SetStateAction<string>>;
  answer: string;
  refetch: ReturnType<typeof useGetCaptchaQuery>["refetch"];
  verifyCaptcha: ReturnType<typeof useVerifyCaptchaMutation>["0"];
}
export function useAnswer({
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
