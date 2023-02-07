import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";

interface Template01 {
  children: JSX.Element,
}

const Template01 = ({children}: Template01) => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <div className="layout-card-wrap">
          <div className="layout-card">
            {children}
          </div>
        </div>
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Template01;
