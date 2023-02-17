import React from "react";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ComponentRoleplay from "../molecules/ComponentRoleplay";

const Template03 = () => {

  return (
    <div className="layout-panel-wrap grid37">
      <div className="layout-panel side-panel">
        <ComponentContsInfo />
      </div>
      <div className="layout-panel wide-panel">
        <ComponentRoleplay />
      </div>
    </div>
  );
};

export default Template03;
