import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "./components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import { globalStyle, InitialAppData, setCookie } from "chai-ui";

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
          // turnId: "1",
          // pageId: "3",
          courseId: "1",
          subjectId: "1",
          courseName: "\ube68\uac15",
          lessonId: "1",
          lessonName: "\ub808\uc2a8+1",
        },
        {
          path: "/",
        },
      );

      setCookie(
        "quiz-data",
        {
          result: [
            { id: 32, isCorrect: "correct" },
            { id: 33, isCorrect: "correct" },
            { id: 34, isCorrect: "inCorrect" },
            { id: 35, isCorrect: "correct" },
            { id: 36, isCorrect: "inCorrect" },
            { id: 37, isCorrect: "current" },
          ],
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
          <ToastContainer limit={3} autoClose={4000} hideProgressBar={true} closeButton={false} />
          <AuthProvider>
            <Global styles={globalStyle} />
            <AppRouter />
          </AuthProvider>
        </RecoilRoot>
      </CookiesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;