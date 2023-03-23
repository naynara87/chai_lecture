import React from "react";
import { CornerGuideCharacterContentData } from "../../core";
import { HtmlContentComponent, ImgCharacterComponent } from "../atoms";
import styled from "@emotion/styled";
import { vw } from "../../assets";

export interface CornerGuideCharacterComponentProps {
  contents: CornerGuideCharacterContentData;
}

const ContStartWrapper = styled.div`
  .text-bubble-wrap {
    padding: ${vw(40)} ${vw(80)};
    border-radius: 999px;
    font-weight: 600;
    font-size: ${vw(36)};
  }

  .character-wrap {
    .img {
      width: ${vw(450)};
      height: ${vw(450)};
    }
  }
`;

/**
 * CH-02-01 코너 변경 안내
 */
const CornerGuideCharacterComponent = ({
  contents,
}: CornerGuideCharacterComponentProps) => {
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

export default CornerGuideCharacterComponent;
