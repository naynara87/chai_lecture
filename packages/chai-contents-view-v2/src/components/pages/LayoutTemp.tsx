import { TemplatePub } from "chai-ui-v2";
import React from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";

const LayoutTemp = () => {
  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <TemplatePub />
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

export default LayoutTemp;
