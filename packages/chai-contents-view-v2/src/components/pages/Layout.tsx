import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";
import Template01 from "./Template01";
import Template02 from "./Template02";
import Template03 from "./Template03";
import TemplateConversation from "./TemplateConversation";

const Layout = () => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <Template01 />
        {/* <TemplateConversation /> */}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
