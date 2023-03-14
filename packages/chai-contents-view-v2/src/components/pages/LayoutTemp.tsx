import { TemplatePub } from "chai-ui-v2";
import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";

const LayoutTemp = () => {
  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <TemplatePub />
      </main>
      {/* <LayoutFooter
        pages={[]}
        currentPageIndex={1}
        handleClickNext={() => {
          console.log("다음페이지");
        }}
        handleClickPrev={() => {
          console.log("이전페이지");
        }}
      /> */}
    </div>
  );
};

export default LayoutTemp;
