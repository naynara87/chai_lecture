import React from "react";
import { ActivityGuideCharacterContentData } from "../../core";
import { HtmlContentComponent, ImgCharacterComponent } from "../atoms";
import styled from "@emotion/styled";
import { vw } from "../../assets";

export interface ActivityGuideCharacterComponentProps {
  contents: ActivityGuideCharacterContentData;
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

/**
 * CH-02-02 활동 안내
 */
const ActivityGuideCharacterComponent = ({
  contents,
}: ActivityGuideCharacterComponentProps) => {
  return (
    <ContStartWrapper className="cont-info-wrap">
      <div className="character-wrapper">
        <div className="text-bubble-wrap">
          <HtmlContentComponent html={contents.data.text} />
        </div>
        <div className="character-wrap">
          <ImgCharacterComponent
            characterType="allCharacter"
            characterAlt="웃고있는 디디, 위니, 꿍이"
            imgSrc={contents.data.character.src}
          />
        </div>
      </div>
    </ContStartWrapper>
  );
};

export default ActivityGuideCharacterComponent;
