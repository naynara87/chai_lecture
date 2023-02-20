import React from "react";
import ComponentChoiceRole from "../molecules/ComponentChoiceRole";
import ComponentTitle from "../molecules/ComponentTitle";

const Template01 = () => {

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle />
        <ComponentChoiceRole />
      </div>
    </div>
  );
};

export default Template01;
