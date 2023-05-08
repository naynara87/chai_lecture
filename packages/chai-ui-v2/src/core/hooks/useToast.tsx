import React, { useCallback } from "react";
import { Alert, AlertColor } from "@mui/material";
import { toast } from "react-toastify";

type ToastType = AlertColor;

/**
 * 토스트 설정은 index.tsx의 ToastContainer에서 설정한다.
 * @docs https://fkhadra.github.io/react-toastify/introduction
 */
const useToast = () => {
  const addToast = useCallback((message: string, type: ToastType = "info") => {
    return toast(<Alert severity={type}>{message}</Alert>);
  }, []);

  return { addToast };
};

export default useToast;
