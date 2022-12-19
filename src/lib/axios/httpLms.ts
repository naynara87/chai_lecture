import axios from "axios";

const httpLms = axios.create({
  baseURL: `${process.env.REACT_APP_LMS_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
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

export const setHttpLcmsToken = (token: string) => {
  httpLms.defaults.headers.common.Authorization = `${token}`;
};

export const clearHttpLcmsToken = () => {
  httpLms.defaults.headers.common.Authorization = undefined;
};

export default httpLms;
