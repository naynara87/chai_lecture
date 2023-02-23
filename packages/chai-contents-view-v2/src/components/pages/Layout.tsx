import React from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";
import { Template03 } from "chai-ui-v2";

const Layout = () => {
  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <Template03 />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
