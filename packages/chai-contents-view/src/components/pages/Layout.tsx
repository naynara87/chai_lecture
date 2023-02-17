import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutModal from "../molecules/LayoutModal";
import ComponentConversation from "../molecules/ComponentConversation";

const Layout = () => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <ComponentConversation />
      </main>
      <LayoutFooter />
      <LayoutModal />
    </div>
  );
};

export default Layout;
