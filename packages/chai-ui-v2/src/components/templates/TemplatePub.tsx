import React from "react";
import { ComponentButtonRadiBorderMain, ComponentButtonRadiFillMain } from "../atoms";

const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel">
        <div className="btns-wrap">
          <ComponentButtonRadiBorderMain text="다시하기" />
          <ComponentButtonRadiFillMain text="정답확인" />
        </div>
      </div>
      <div className="layout-panel">
        <div className="step-card step3">
          <p className="text pinyin">{'zài'}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplatePub;
