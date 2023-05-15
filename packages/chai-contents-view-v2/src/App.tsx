import React from "react";
import AppRouter from "./router/AppRouter";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider, GlobalAudioProvider } from "chai-ui-v2";
import { CookiesProvider } from "react-cookie";
import XapiProvider from "./XapiProvider";
import viewGlobal from "./styles/viewGlobal";
import { Global } from "@emotion/react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <RecoilRoot>
          <ToastContainer
            limit={3}
            autoClose={3000}
            hideProgressBar={true}
            closeButton={false}
          />
          <Global styles={viewGlobal} />
          <AuthProvider>
            <XapiProvider>
              <GlobalAudioProvider>
                <AppRouter />
              </GlobalAudioProvider>
            </XapiProvider>
          </AuthProvider>
        </RecoilRoot>
      </CookiesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
