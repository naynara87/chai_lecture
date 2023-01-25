import { useCallback, useEffect } from "react";

export const useDebounced = (func: () => void, delay: number) => {
  const callback = useCallback(func, [func]);

  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
};
