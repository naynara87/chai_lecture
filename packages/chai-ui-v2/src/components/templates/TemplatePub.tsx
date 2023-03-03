import React from "react";
import ComponentTitle from "../molecules/ComponentTitle";
import ComponentImage from "../molecules/ComponentImage";
import ComponentText from "../molecules/ComponentText";
import ComponentTabContents from "../molecules/ComponentTabContents";


const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel side-panel">
        <ComponentImage />
        <ComponentTitle text="정도부사에 대해 알아봅시다." />
        <ComponentText />
      </div>
      <div className="layout-panel wide-panel">
        <ComponentTabContents />
      </div>
    </div>
  );
};

export default TemplatePub;
