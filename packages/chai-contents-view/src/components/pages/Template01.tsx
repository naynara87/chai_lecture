import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutModal from "../molecules/LayoutModal";

interface Template01 {
  children: JSX.Element,
}

const Template01 = ({children}: Template01) => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <div className="layout-panel-wrap">
          <div className="layout-panel">
            {children}
          </div>
        </div>
      </main>
      <LayoutFooter />
      <LayoutModal />
    </div>
  );
};

export default Template01;
