import React from "react";
import AppRouter from "./router/AppRouter";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { globalStyle } from "chai-ui";

function App() {
  return (
    <RecoilRoot>
      <Global styles={globalStyle} />
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
