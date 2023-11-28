import React, { useEffect } from "react";
import { CornerGuideCharacterContentData } from "../../core";
import { HtmlContentComponent, ImgCharacterComponent } from "../atoms";
import styled from "@emotion/styled";

export interface CornerGuideCharacterComponentProps {
  contents: CornerGuideCharacterContentData;
}

const ContStartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text-bubble-wrap {
    margin-top: 3vmin;
    padding: 1em 2.5em;
    border-radius: 10vmin;
    font-weight: 600;
    font-size: 3vmin;
  }

  .character-wrap {
    margin-top: 5vmin;
    text-align: center;

    .img {
      width: 40vmin;
      height: 40vmin;
      object-fit: cover;
    }
  }
`;

/**
 * CH-02-01 코너 변경 안내
 */
const CornerGuideCharacterComponent = ({
  contents,
}: CornerGuideCharacterComponentProps) => {
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
