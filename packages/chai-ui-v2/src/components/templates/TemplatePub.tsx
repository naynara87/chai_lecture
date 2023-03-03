import React from "react";
import { ComponentRecordButton } from "../molecules";
import ComponentStepSentenceCard from "../molecules/ComponentStepSentenceCard";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentStepSentenceCard />
        <ComponentRecordButton />
      </div>
    </div>
  );
};

export default TemplatePub;
