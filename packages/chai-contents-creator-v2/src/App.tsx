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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastContainer
          limit={3}
          autoClose={4000}
          hideProgressBar={true}
          closeButton={false}
        />
        <Global styles={creatorGlobal} />
        <GlobalAudioProvider>
          <AppRouter />
        </GlobalAudioProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
