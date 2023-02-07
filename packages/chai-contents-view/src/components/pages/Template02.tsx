import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";

interface Template02 {
  sideCard: JSX.Element,
  wideCard: JSX.Element,
}

const Template02 = ({sideCard, wideCard}: Template02) => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <div className="layout-card-wrap grid55">
          <div className="layout-card side-card">
          {sideCard}
          </div>
          <div className="layout-card wide-card">
          {wideCard}
          </div>
        </div>
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Template02;
