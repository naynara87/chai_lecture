import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { ExplainingCharacterContentData } from "../../core";
import { HtmlContentComponent, ImgCharacterComponent } from "../atoms";
import ComponentButtonFillBlackMini from "../atoms/ComponentButtonFillBlackMini";

const DescriptionBubble = styled.div``;

export interface ExplainingCharacterComponentProps {
  contents: ExplainingCharacterContentData;
}

const ExplainingCharacterComponent = ({
  contents,
}: ExplainingCharacterComponentProps) => {
  const [showExplain, setShowExplain] = useState(false);
  const handleClickButton = useCallback(() => {
    setShowExplain(true);
  }, []);

  const explainText = useMemo(() => {
    if (!showExplain) {
      return (
        <>
          <p className="text">
            <HtmlContentComponent html={contents.data.text} />
          </p>
          <ComponentButtonFillBlackMini
            text="확인"
            onClick={handleClickButton}
          />
        </>
      );
    } else {
      return (
        <p className="text">
          <HtmlContentComponent html={contents.data.explain} />
        </p>
      );
    }
  }, [showExplain, contents.data, handleClickButton]);

  return (
    <DescriptionBubble className="description-bubble-container">
      <ImgCharacterComponent
        characterType="didiSmilejump"
        characterAlt="디디웃으며점프"
      />
      <div className="description-bubble-wrap">
        <div className="bubble-conts">{explainText}</div>
      </div>
    </DescriptionBubble>
  );
};

export default ExplainingCharacterComponent;
