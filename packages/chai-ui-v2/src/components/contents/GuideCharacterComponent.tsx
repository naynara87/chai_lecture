import React from "react";
import { GuideCharacterContentData } from "../../core";
import { ImgCharacterComponent } from "../atoms";

interface GuideCharacterComponentProps {
  contents: GuideCharacterContentData;
}

const GuideCharacterComponent = ({
  contents,
}: GuideCharacterComponentProps) => {
  return (
    <div className="cont-info-wrap">
      <div className="character-wrapper">
        <div className="text-bubble-wrap">{contents.data.text}</div>
        <div className="character-wrap">
          <ImgCharacterComponent
            characterType="didiGlasses"
            characterAlt="디디"
          />
        </div>
      </div>
    </div>
  );
};

export default GuideCharacterComponent;
