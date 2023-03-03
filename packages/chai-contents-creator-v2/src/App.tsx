import React from "react";
import AppRouter from "./router/AppRouter";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "chai-ui-v2/dist/assets/globalStyle.css";

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
        <AppRouter />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
