import axios from "axios";

const httpPhp = axios.create({
  baseURL: `${process.env.REACT_APP_PHP_URL}`,
});

httpPhp.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  },
);

httpPhp.interceptors.response.use(
  (response) => {
    // do something with response data
    return response;
  },
  (error) => {
    // do something with response error
    return Promise.reject(error);
  },
);

export default httpPhp;
