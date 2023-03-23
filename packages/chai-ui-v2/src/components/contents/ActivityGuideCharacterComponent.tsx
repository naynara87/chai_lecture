import React from "react";
import { ActivityGuideCharacterContentData } from "../../core";
import { HtmlContentComponent } from "../atoms";
import styled from "@emotion/styled";
import { vw } from "../../assets";
import allCharacter from "../../assets/images/img/cha_all.png";

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
          <img
            src={
              contents.data.character.src
                ? contents.data.character.src
                : allCharacter
            }
            alt={contents.data.character.src}
            className="img"
          ></img>
        </div>
      </div>
    </ContStartWrapper>
  );
};

export default ActivityGuideCharacterComponent;
