import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutModal from "../molecules/LayoutModal";
import Template01 from "./Template01";
import Template02 from "./Template02";
import Template03 from "./Template03";
import TemplateConversation from "./TemplateConversation";

const Layout = () => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <Template03 />
        {/* <TemplateConversation /> */}
      </main>
      <LayoutFooter />
      <LayoutModal />
    </div>
  );
};

export default Layout;
