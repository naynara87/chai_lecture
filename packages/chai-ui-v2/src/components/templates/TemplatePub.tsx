import React from "react";
import { ComponentTitle } from "../molecules";
import ComponentTraining from "../molecules/ComponentTraining";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="이번 레슨에서 배운 내용을 확인해볼까요?" />
        <ComponentTraining />
      </div>
    </div>
  );
};

export default TemplatePub;
