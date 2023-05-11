import { GET_STT_TOKEN, SAVE_STT } from "../constants";
import httpStt from "../lib/axios/httpStt";

export type ResponseSaveStt = {
  success: "True" | "False";
  file_name: string;
};

export const saveStt = async (formData: FormData) => {
  const res = await httpStt.post<ResponseSaveStt>(SAVE_STT, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export type ResponseGetSttToken = {
  token: string;
};

export const getSttAccessToken = async () => {
  const res = await httpStt.post<ResponseGetSttToken>(GET_STT_TOKEN, {
    // FIXME: 임시로 하드 코딩
    username: "admin",
    password: "admin",
  });
  return res.data;
};
