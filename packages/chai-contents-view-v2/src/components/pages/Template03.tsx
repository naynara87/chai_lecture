import React from "react";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ComponentRoleplay from "../molecules/ComponentRoleplay";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";

const Template03 = () => {

  return (
    <div className="layout-panel-wrap grid-37">
      <div className="layout-panel side-panel">
        <ComponentContsInfo />
      </div>
      <div className="layout-panel wide-panel">
        <ComponentRoleplay />
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </div>
  );
};

export default Template03;
