import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export const useInterval = (callback: Function, delay: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const savedCallback = useRef<Function>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const handler = (...args: any) => savedCallback.current?.(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
