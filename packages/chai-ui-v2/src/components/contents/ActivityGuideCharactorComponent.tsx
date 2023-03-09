import React from "react";
import { ActivityGuideCharactorContentData } from "../../core";
import { ImgCharacterComponent } from "../atoms";
import styled from "@emotion/styled";
import { vw } from "../../assets";

interface ActivityGuideCharactorComponentProps {
  contents: ActivityGuideCharactorContentData;
}

const ContStartWrapper = styled.div`
  .text-bubble-wrap {
    padding: ${vw(30)};
    border-radius: ${vw(20)};
    font-weight: 400;
    font-size: ${vw(22)};
    max-width: ${vw(310)};
  }

  .character-wrap {
    .img {
      width: ${vw(180)};
      height: ${vw(180)};
    }
  }
`;

const ActivityGuideCharactorComponent = ({
  contents,
}: ActivityGuideCharactorComponentProps) => {
  return (
    <ContStartWrapper className="cont-info-wrap">
      <div className="character-wrapper">
        <div className="text-bubble-wrap">{contents.data.text}</div>
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

export default ActivityGuideCharactorComponent;
