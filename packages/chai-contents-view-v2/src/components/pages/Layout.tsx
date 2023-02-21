import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";
import Template01 from "./Template01";
import Template02 from "./Template02";
import Template03 from "./Template03";
import TemplateDialogue from "./TemplateDialogue";
import TemplateQuizDialogueWordBlank from "./TemplateQuizDialogueWordBlank";
import "../../styles/scss/ui.scss";

const Layout = () => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        {/* <Template01 /> */}
        {/* <TemplateDialogue /> */}
        <TemplateQuizDialogueWordBlank />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
