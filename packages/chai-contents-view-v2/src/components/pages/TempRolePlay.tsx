import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";
import { Template03 } from "chai-ui-v2";

const TempRolePlay = () => {
  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <Template03 />
        {/* <TemplateConversation /> */}
      </main>
      <LayoutFooter
        pages={[]}
        currentPageIndex={1}
        handleClickNext={function (): void {
          throw new Error("Function not implemented.");
        }}
        handleClickPrev={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default TempRolePlay;
