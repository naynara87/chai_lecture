import React from "react";

interface Template03 {
  sideCard: JSX.Element,
  wideCard: JSX.Element,
}

const Template03 = ({ sideCard, wideCard }: Template03) => {

  return (
    <div className="layout-panel-wrap grid37">
      <div className="layout-panel side-panel">
        {sideCard}
      </div>
      <div className="layout-panel wide-panel">
        {wideCard}
      </div>
    </div>
  );
};

export default Template03;
