import React from "react";
import { ComponentButtonRadiBorderMain, ComponentButtonRadiFillMain } from "../atoms";
import IconDictionaryButton from "../atoms/Button/IconDictionaryButton";
import IconPlayButton from "../atoms/Button/IconPlayButton";

const TemplatePub = () => {

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <div className="btns-wrap">
          <IconPlayButton active={true} />
          <IconDictionaryButton />
        </div>
        <div className="btns-wrap">
          <ComponentButtonRadiBorderMain text="다시하기" />
          <ComponentButtonRadiFillMain text="정답확인" />
        </div>
      </div>
    </div>
  );
};

export default TemplatePub;
