import React from "react";
import AppRouter from "./router/AppRouter";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import globalStyle from "./styles/globalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "./components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastContainer limit={3} autoClose={4000} hideProgressBar={true} closeButton={false} />
        <AuthProvider>
          <Global styles={globalStyle} />
          <AppRouter />
        </AuthProvider>
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
