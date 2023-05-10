import axios from "axios";

const httpStt = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "multipart/form-data",
  },
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

export default httpStt;
