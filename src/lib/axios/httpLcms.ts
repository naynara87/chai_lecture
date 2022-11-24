import axios from "axios";

const httpLcms = axios.create({
  baseURL: "http://106.248.245.114:28123",
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
