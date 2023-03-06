import React from "react";
import { ComponentContsInfo } from "../molecules";
import ComponentRecordSubmit from "../molecules/ComponentRecordSubmit";

const TemplatePub = () => {

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel">
        <ComponentContsInfo text="다음 문장을 중국어로 말해 보세요." />
      </div>
      <div className="layout-panel">
        <ComponentRecordSubmit />
      </div>
    </div>
  );
};

export default TemplatePub;
