import styled from "@emotion/styled";
import React from "react";
import { vw } from "../../assets";
import { ImgCharacterComponent } from "../atoms";

const ContStartWrapper = styled.div`
  .text-bubble-wrap {
    padding: ${vw(40)} ${vw(80)};
    border-radius: 999px;
    font-weight: 600;
    font-size: ${vw(36)};
  }

  .character-wrap {
    margin-top: ${vw(57)};

    .img {
      width: 45vmin;
      height: 45vmin;
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
