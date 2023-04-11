import { useEffect, useRef } from "react";

const useUnload = (fn: (event: BeforeUnloadEvent) => void) => {
  const callback = useRef(fn);

  useEffect(() => {
    const onUnload = callback.current;
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [callback]);
};

export default useUnload;
