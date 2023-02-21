import axios from "axios";
import { AUTH_KEY } from "../../constants/api";

const httpLms = axios.create({
  baseURL: `${process.env.REACT_APP_LMS_URL}`,
  headers: {
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_LMS_URL}`,
    "Access-Control-Allow-Credentials": true,
    Authorization: AUTH_KEY,
  },
  withCredentials: true,
});

httpLms.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  },
);

httpLms.interceptors.response.use(
  (response) => {
    // do something with response data
    return response;
  },
  (error) => {
    // do something with response error
    return Promise.reject(error);
  },
);

export const setHttpLmsToken = (token: string) => {
  httpLms.defaults.headers.common.Authorization = `${token}`;
};

export const clearHttpLmsToken = () => {
  httpLms.defaults.headers.common.Authorization = undefined;
};

export default httpLms;
