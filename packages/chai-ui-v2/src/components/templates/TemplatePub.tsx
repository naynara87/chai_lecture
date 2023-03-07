import React from "react";
import ModalCompleted from "../modal/ModalCompleted";
import { ComponentContsInfo, ComponentTitle } from "../molecules";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="다음 레슨에서는 이런 내용을 학습할 거예요!" />
        <ComponentContsInfo text="먼저 지난 레슨에서 학습한 내용을 점검해 볼까요?" />
      </div>
      <ModalCompleted />
    </div>
  );
};

export default TemplatePub;
