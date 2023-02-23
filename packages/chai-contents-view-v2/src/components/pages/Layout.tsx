import React from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";
import {  TemplateQuizWordBlank } from "chai-ui-v2";

const Layout = () => {
  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <TemplateQuizWordBlank />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
