import React from "react";
import ComponentTitle from "../molecules/ComponentTitle";
import ComponentVideo from "../molecules/ComponentVideo";

const Template01 = () => {

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="무슨 이야기를 하고 있을까요?" />
        <ComponentVideo />
      </div>
    </div>
  );
};

export default Template01;
