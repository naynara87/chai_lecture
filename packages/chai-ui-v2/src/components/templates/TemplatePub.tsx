import React from "react";
import DictionaryButton from "../atoms/Button/DictionaryButton";
import PlayButtonOnly from "../atoms/Button/PlayButtonOnly";
import ComponentImage from "../molecules/ComponentImage";
import ComponentText from "../molecules/ComponentText";
// import ComponentTitle from "../molecules/ComponentTitle";


const TemplatePub = () => {
  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        {/* <ComponentTitle text="회화 속 주인공이 되어 말하기 연습을 해보세요." /> */}
        <ComponentImage />
        <ComponentText />
        <div className="btns-wrap">
          <PlayButtonOnly />
          <DictionaryButton />
        </div>
      </div>
    </div>
  );
};

export default TemplatePub;
