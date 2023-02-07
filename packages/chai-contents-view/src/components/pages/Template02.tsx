import React from "react";
import LayoutHeader from "../molecules/LayoutHeader";
import LayoutFooter from "../molecules/LayoutFooter";

const Template02 = () => {

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        <div className="layout-card-wrap grid55">
          <div className="layout-card">
            여기에 콘텐츠 위치할 예정
          </div>
          <div className="layout-card">
            여기에 콘텐츠 위치할 예정
          </div>
        </div>
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Template02;
