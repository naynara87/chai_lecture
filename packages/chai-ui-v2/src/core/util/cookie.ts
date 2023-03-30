import { Cookies } from "react-cookie";
const cookies = new Cookies();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setCookie = <T = any>(name: string, value: T, option: any) => {
  return cookies.set(name, value, { ...option });
};
export const getCookie = <T = unknown>(name: string) => {
  return cookies.get<T | undefined>(name);
};
