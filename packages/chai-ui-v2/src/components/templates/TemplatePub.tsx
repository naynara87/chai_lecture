import React from "react";
import { ComponentContsInfo } from "../molecules";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel side-panel">
        <ComponentContsInfo
          text="이벤엔 중국 문화에 대해 알아볼 차례예요!
빈 칸에 들어갈 말이 무엇일지 생각해볼까요?"
        />
      </div>
      <div className="layout-panel wide-panel">
        {/* <ComponentStepCard /> */}
      </div>
    </div>
  );
};

export default TemplatePub;
