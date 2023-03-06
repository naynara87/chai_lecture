import React, { useState } from "react";
import ModalLessonFinish from "../modal/ModalLessonFinish";
import { ComponentTitle } from "../molecules";
import ComponentTraining from "../molecules/ComponentTraining";

const TemplatePub = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="이번 레슨에서 배운 내용을 확인해볼까요?" />
        <ComponentTraining />
        <ModalLessonFinish
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          wideModal={true}
        />
      </div>
    </div>
  );
};

export default TemplatePub;
