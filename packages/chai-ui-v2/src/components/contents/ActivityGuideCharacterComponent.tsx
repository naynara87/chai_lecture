import React, { useEffect } from "react";
import { ActivityGuideCharacterContentData } from "../../core";
import { HtmlContentComponent } from "../atoms";
import styled from "@emotion/styled";
import { vw } from "../../assets";
import allCharacter from "../../assets/images/img/cha_all.png";

const ContStartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text-bubble-wrap {
    padding: ${vw(30)};
    border-radius: ${vw(20)};
    font-weight: 400;
    font-size: ${vw(22)};
    max-width: ${vw(310)};
  }

  .character-wrap {
    margin-top: ${vw(57)};
    text-align: center;

    .img {
      width: ${vw(180)};
      height: ${vw(180)};
      object-fit: cover;
    }
  }
`;

export interface ActivityGuideCharacterComponentProps {
  contents: ActivityGuideCharacterContentData;
}

/**
 * CH-02-02 활동 안내
 */
const ActivityGuideCharacterComponent = ({
  contents,
}: ActivityGuideCharacterComponentProps) => {
  const thisComponentRef = React.useRef<HTMLDivElement>(null);
  const characterWrapRef = React.useRef<HTMLDivElement>(null);
  const layoutPanel = thisComponentRef.current?.closest(".layout-panel");
  const layoutPanelHeight = layoutPanel?.clientHeight;

  useEffect(() => {
    if (
      !layoutPanelHeight ||
      !thisComponentRef.current ||
      !characterWrapRef.current
    ) {
      return;
    }
    if (layoutPanelHeight <= characterWrapRef.current.clientHeight) {
      thisComponentRef.current.style.justifyContent = "flex-start";
    }
  }, [layoutPanelHeight, thisComponentRef, characterWrapRef]);
  return (
    <ContStartWrapper ref={thisComponentRef}>
      <div className="character-wrapper" ref={characterWrapRef}>
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
