import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";

interface Template03 {
  sideCard: JSX.Element,
  wideCard: JSX.Element,
}

const Template03 = ({sideCard, wideCard}: Template03) => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <div className="layout-card-wrap grid37">
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

export default Template03;
