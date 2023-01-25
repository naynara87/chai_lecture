import { useRef } from "react";

const useThrottle = () => {
  const isBlockedRef = useRef<boolean>(false);

  const addThrottle = (setTime: number, callback: () => void) => {
    if (isBlockedRef.current) {
      return;
    }
    callback();
    isBlockedRef.current = true;
    setTimeout(() => {
      isBlockedRef.current = false;
    }, setTime);
  };

  return {
    addThrottle,
  };
};

export default useThrottle;
