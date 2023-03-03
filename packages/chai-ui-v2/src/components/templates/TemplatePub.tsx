import React from "react";
import { ComponentContsInfo } from "../molecules";
import ComponentCultureList from "../molecules/ComponentCultureList";
import ComponentText from "../molecules/ComponentText";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="명칭의 유래" />
      </div>
      <div className="layout-panel wide-panel">
        <ComponentText />
        <ComponentCultureList />
      </div>
    </div>
  );
};

export default TemplatePub;
