import styled from "@emotion/styled";
import React from "react";
import { ImgCharacterComponent } from "../atoms";

const ContStartWrapper = styled.div`
  .text-bubble-wrap {
    padding: 1em 2.5em;
    border-radius: 10vmin;
    font-weight: 600;
    font-size: 3vmin;
  }

  .character-wrap {
    width: 20vmin;
    margin: 3.85vmin auto 0;

    .img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ComponentContsStart = () => {
  return (
    <ContStartWrapper className="cont-info-wrap">
      <div className="character-wrapper">
        <div className="text-bubble-wrap">{`먼저 지난 레슨에서 학습한 내용을 점검해 볼까요?`}</div>
        <div className="character-wrap">
          <ImgCharacterComponent
            characterType="allCharacter"
            characterAlt="웃고있는 디디, 위니, 꿍이"
          />
        </div>
      </div>
    </ContStartWrapper>
  );
};

export default ComponentContsStart;
