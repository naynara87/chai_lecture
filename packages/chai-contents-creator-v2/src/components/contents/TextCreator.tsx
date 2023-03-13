import styled from "@emotion/styled";
import { TextContentData } from "chai-ui-v2";
import React, { useState } from "react";
import { ContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import TextEditorViewer from "../molecules/TextEditorViewer";

const TextCreatorWrapper = styled.div`
  min-width: 240px;
`;

/**
 * 텍스트 컴포넌트
 * CH-01-01
 */
const TextCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
}: ContentCommonProps) => {
  const [text, setText] = useState<string>("");

  const handleClickComponent = (e: React.MouseEvent) => {
    setFocusedId(e, content.id);
  };

  const thisContent = content as TextContentData;

  const getNewContent = (): TextContentData => {
    return {
      ...thisContent,
      data: {
        text,
      },
    };
  };

  const handleEndEditText = () => {
    updateContent(currentSlide.id, content.id, position, getNewContent());
  };

  return (
    <ContentCreatorLayout>
      <TextCreatorWrapper onClick={handleClickComponent}>
        <TextEditorViewer
          text={text}
          setText={setText}
          isFocused={isFocused}
          handleSubmitTextOnBlur={handleEndEditText}
        />
      </TextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default TextCreator;
