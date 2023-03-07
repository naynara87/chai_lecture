import React from "react";
import { ImgCharacterComponent } from "../atoms";

interface ComponentContsInfoProps {
  text: string;
}

const ComponentContsInfo = ({ text }: ComponentContsInfoProps) => {
  return (
    <div className="cont-info-wrap">
      <div className="character-wrapper">
        <div className="text-bubble-wrap">{text}</div>
        <div className="character-wrap">
          <ImgCharacterComponent
            characterType="allCharacter"
            characterAlt="디디"
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentContsInfo;
