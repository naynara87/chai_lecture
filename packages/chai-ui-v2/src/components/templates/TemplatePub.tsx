import React from "react";
import ComponentImageMultiCaption from "../molecules/ComponentImageMultiCaption";
import ComponentText from "../molecules/ComponentText";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentText />
        <ComponentImageMultiCaption />
        <ComponentText />
      </div>
    </div>
  );
};

export default TemplatePub;
