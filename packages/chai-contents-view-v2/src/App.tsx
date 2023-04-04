import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AuthProvider,
  GlobalAudioProvider,
  InitialAppData,
  setCookie,
} from "chai-ui-v2";
import { CookiesProvider } from "react-cookie";
import XapiProvider from "./XapiProvider";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setCookie<InitialAppData>(
        "bubble-player",
        {
          uno: "1",
          uid: "1",
          applId: "1",
          cornerId: "11",
          pageId: "1",
          courseId: "1",
          subjectId: "1",
          courseName: "\ube68\uac15",
          lessonId: "1",
          lessonName: "\ub808\uc2a8+1",
          lessonTpCd: "20",
        },
        {
          path: "/",
        },
      );
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <RecoilRoot>
          <ToastContainer
            limit={3}
            autoClose={4000}
            hideProgressBar={true}
            closeButton={false}
          />
          <AuthProvider>
            <XapiProvider>
              <GlobalAudioProvider>
                <AppRouter />
              </GlobalAudioProvider>
            </XapiProvider>
          </AuthProvider>
        </RecoilRoot>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
