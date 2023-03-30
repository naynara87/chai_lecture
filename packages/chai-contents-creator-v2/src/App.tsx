import React from "react";
import AppRouter from "./router/AppRouter";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "chai-ui-v2/dist/assets/globalStyle.css";
import { Global } from "@emotion/react";
import creatorGlobal from "./styles/creatorGlobal";
import { GlobalAudioProvider } from "chai-ui-v2";
import AuthProvider from "./components/AuthProvider";
import { CookiesProvider } from "react-cookie";

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
          <Global styles={creatorGlobal} />
          <AuthProvider>
            <GlobalAudioProvider>
              <AppRouter />
            </GlobalAudioProvider>
          </AuthProvider>
        </RecoilRoot>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
