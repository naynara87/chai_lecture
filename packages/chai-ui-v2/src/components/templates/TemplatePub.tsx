import React from "react";
import ComponentStepCard from "../molecules/ComponentStepCard";
import ComponentTitle from "../molecules/ComponentTitle";


const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="회화 속 주인공이 되어 말하기 연습을 해보세요." />
        <ComponentStepCard />
      </div>
    </div>
  );
};

export default TemplatePub;
