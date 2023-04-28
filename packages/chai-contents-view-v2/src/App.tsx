import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
import viewGlobal from "./styles/viewGlobal";
import { Global } from "@emotion/react";

const queryClient = new QueryClient();

const contentDummyCookie: InitialAppData = {
  uno: "1",
  uid: "12345",
  name: "버블콘",
  applId: "1",
  courseId: "1",
  courseName: "red",
  subjectId: "1",
  lessonId: "279",
  lessonName: "red1",
  turnId: "808e1d4a-725c-45a4-bef7-ab01aae81103",
  pageId: "fa25b9ac-e940-46a6-a487-4410e32d784a",
  type: "lesson",
};

const prdContentDummyCookie: InitialAppData = {
  uno: "1",
  uid: "12345",
  name: "버블콘",
  applId: "1",
  courseId: "10",
  courseName: "red",
  subjectId: "1",
  lessonId: "194",
  lessonName: "red1",
  turnId: "0892255b-3b04-46c7-acdc-cf16f1c3f49e",
  pageId: "3ea2f658-b6ab-4509-96b2-de5fa88dea46",
  type: "lesson",
};

const questionDummyCookie: InitialAppData = {
  uno: "1",
  uid: "12345",
  name: "버블콘",
  applId: "1",
  courseId: "1",
  courseName: "\ube68\uac15",
  subjectId: "1",
  lessonId: "280",
  lessonName: "\ub808\uc2a8+1",
  turnId: "0c3460cf-f765-4526-8f28-2a0722377ba8",
  pageId: "4b4ce5e8-4e83-4eec-9352-cb62122ceca5",
  type: "lesson",
};

const paperDummyCookie: InitialAppData = {
  uno: "1",
  uid: "12345",
  name: "버블콘",
  applId: "1",
  courseId: "1",
  courseName: "\ube68\uac15",
  subjectId: "1",
  lessonId: "6",
  lessonName: "\ub808\uc2a8+1",
  turnId: "0c3460cf-f765-4526-8f28-2a0722377ba8",
  pageId: "4b4ce5e8-4e83-4eec-9352-cb62122ceca5",
  type: "paper",
};

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setCookie<InitialAppData>("bubble-player", contentDummyCookie, {
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
