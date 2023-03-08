import React from "react";
import { ComponentButtonRadiBorderMain, ComponentButtonRadiFillMain } from "../atoms";
import { ComponentTitle } from "../molecules";
import ComponentText from "../molecules/ComponentText";

const TemplatePub = () => {

  return (
    <div className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel">
        <ComponentTitle text="title" />
        <ComponentText />
      </div>
      <div className="layout-panel">
        <div className="btns-wrap">
          <ComponentButtonRadiBorderMain text="다시하기" />
          <ComponentButtonRadiFillMain text="정답확인" />
        </div>
      </div>
    </div>
  );
};

export default TemplatePub;
