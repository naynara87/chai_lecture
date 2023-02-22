import { useTemplateMapper } from "chai-ui-v2";
import React from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";

const Layout = () => {
  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">{/* <Template03 /> */}</main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
