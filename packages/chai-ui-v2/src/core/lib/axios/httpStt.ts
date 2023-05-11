import axios from "axios";

const httpStt = axios.create({
  baseURL: `${process.env.REACT_APP_STT_URL}`,
});

httpStt.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  },
);

httpStt.interceptors.response.use(
  (response) => {
    // do something with response data
    return response;
  },
  (error) => {
    // do something with response error
    return Promise.reject(error);
  },
);

export const setHttpSttToken = (token: string) => {
  httpStt.defaults.headers.common.Authorization = `jwt ${token}`;
};

export const clearHttpSttToken = () => {
  httpStt.defaults.headers.common.Authorization = undefined;
};

export default httpStt;
