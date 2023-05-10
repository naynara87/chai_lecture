import httpStt from "../lib/axios/httpStt";

export const saveStt = async (formData: FormData) => {
  const res = await httpStt.post("/stt", formData);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.data;
};
