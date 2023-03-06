import React from "react";
import ModalCompleted from "../modal/ModalCompleted";
import { ComponentTitle } from "../molecules";
import ComponentNextLesson from "../molecules/ComponentNextLesson";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="다음 레슨에서는 이런 내용을 학습할 거예요!" />
        <ComponentNextLesson />
      </div>
      <ModalCompleted />
    </div>
  );
};

export default TemplatePub;
