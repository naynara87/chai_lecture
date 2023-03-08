import React from "react";
import IconDictionaryFillButton from "../atoms/Button/IconDictionaryFillButton";
import ComponentContsStart from "../molecules/ComponentContsStart";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentContsStart />
        <IconDictionaryFillButton />
      </div>
    </div>
  );
};

export default TemplatePub;
