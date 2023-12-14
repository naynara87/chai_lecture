import React from "react";
import { ImgCharacterComponent } from "../atoms";

const ComponentContsStart = () => {
  return (
    <div className="cont-info-wrap cont-start-wrapper">
      <div className="character-wrapper">
        <div className="text-bubble-wrap">{`먼저 지난 레슨에서 학습한 내용을 점검해 볼까요?`}</div>
        <div className="character-wrap">
          <ImgCharacterComponent
            characterType="allCharacter"
            characterAlt="웃고있는 디디, 위니, 꿍이"
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentContsStart;
