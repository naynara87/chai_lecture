import React from "react";
import IconDictionaryButton from "../atoms/Button/IconDictionaryButton";
import IconPlayButton from "../atoms/Button/IconPlayButton";
import ComponentImage from "../molecules/ComponentImage";
import ComponentText from "../molecules/ComponentText";

const TemplatePub = () => {

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentImage />
        <ComponentText />
        <div className="btns-wrap">
          <IconPlayButton active={true} />
          <IconDictionaryButton />
        </div>
      </div>
    </div>
  );
};

export default TemplatePub;
