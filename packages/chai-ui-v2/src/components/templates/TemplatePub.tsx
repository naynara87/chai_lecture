import React from "react";
import PlayButtonOnly from "../atoms/Button/PlayButtonOnly";
import ComponentDescriptionBubble from "../molecules/ComponentDescriptionBubble";
import ComponentWordCard from "../molecules/ComponentWordCard";
// import ComponentTitle from "../molecules/ComponentTitle";


const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        {/* <ComponentTitle text="회화 속 주인공이 되어 말하기 연습을 해보세요." /> */}
        <ComponentWordCard />
        <div className="btns-wrap"><PlayButtonOnly /></div>
        <ComponentDescriptionBubble />
      </div>
    </div>
  );
};

export default TemplatePub;
