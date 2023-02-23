import React from "react";
// import LayoutHeader from "../molecules/LayoutHeader";
// import LayoutFooter from "../molecules/LayoutFooter";
// import LayoutModal from "../molecules/LayoutModal";

interface Template02Props {
  sideCard: JSX.Element;
  wideCard: JSX.Element;
}

const Template02 = ({ sideCard, wideCard }: Template02Props) => {
  return (
    <div className="layout-panel-wrap grid55">
      <div className="layout-panel side-panel">{sideCard}</div>
      <div className="layout-panel wide-panel">{wideCard}</div>
    </div>
  );
};

export default Template02;
