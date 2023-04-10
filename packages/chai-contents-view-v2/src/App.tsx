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

const dummyDataCookie = {
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
};

const tempDataCookie = {
  uno: "1",
  uid: "1",
  applId: "1",
  cornerId: "808e1d4a-725c-45a4-bef7-ab01aae81103",
  pageId: "8b2add73-6277-4f98-9a7d-7832bd14ae44",
  courseId: "1",
  subjectId: "1",
  courseName: "\ube68\uac15",
  lessonId: "279",
  lessonName: "\ub808\uc2a8+1",
};

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setCookie<InitialAppData>("bubble-player", tempDataCookie, {
        path: "/",
      });
    }
  }, []);

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
