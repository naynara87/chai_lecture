import axios from "axios";
import { isDevEnv } from "chai-ui-v2";

const httpLcms = axios.create({
  baseURL: isDevEnv
    ? `${process.env.REACT_APP_LCMS_DEV_URL}`
    : `${process.env.REACT_APP_LCMS_PROD_URL}`,
});

httpLcms.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  },
);

httpLcms.interceptors.response.use(
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
  httpLcms.defaults.headers.common.Authorization = `${token}`;
};

export const clearHttpLcmsToken = () => {
  httpLcms.defaults.headers.common.Authorization = undefined;
};

export default httpLcms;
