import React, { useEffect } from "react";
import { CornerGuideCharacterContentData } from "../../core";
import { HtmlContentComponent, ImgCharacterComponent } from "../atoms";

export interface CornerGuideCharacterComponentProps {
  contents: CornerGuideCharacterContentData;
}

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
    <div
      className="cont-start-wrapper flex-align-center flex-justify-center flex-direction-column corner"
      ref={thisComponentRef}
    >
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
    </div>
  );
};

export default CornerGuideCharacterComponent;
