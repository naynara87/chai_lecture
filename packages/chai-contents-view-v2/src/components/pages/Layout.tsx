import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";
import Template01 from "./Template01";
import Template02 from "./Template02";
import Template03 from "./Template03";
import TemplateDialogue from "./TemplateDialogue";
import TemplateQuizDialogue from "./TemplateQuizDialogue";

const Layout = () => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        {/* <Template01 /> */}
        {/* <TemplateDialogue /> */}
        <TemplateQuizDialogue />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
