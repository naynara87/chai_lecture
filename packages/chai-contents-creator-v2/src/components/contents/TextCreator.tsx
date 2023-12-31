import styled from "@emotion/styled";
import { TextContentData } from "chai-ui-v2";
import React, { useState } from "react";
import { DraggableContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import TextEditorViewer from "../molecules/TextEditorViewer";

const TextCreatorWrapper = styled.div`
  /* min-width: 240px; */
  margin-right: 8px;
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
  deleteContent,
  copyContent,
  pasteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as TextContentData;
  const [text, setText] = useState<string>(thisContent.data.text);

  const handleClickComponent = (e: React.MouseEvent) => {
    setFocusedId(e, content.id);
  };

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
    <ContentCreatorLayout
      draggableProvided={draggableProvided}
      isDraggable={isDraggable}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      copyContent={copyContent}
      pasteContent={pasteContent}
      align="center"
    >
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
