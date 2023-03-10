import styled from "@emotion/styled";
import { HtmlContentComponent, TextContentData } from "chai-ui-v2";
import React, { useState } from "react";
import { ContentCommonProps } from "../../types/page";
import TextEditor from "../atoms/TextEditor";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";

const TextCreatorWrapper = styled.div`
  min-width: 240px;
`;

const TextViewer = styled.div``;

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
        {!isFocused ? (
          <TextViewer>
            {text ? (
              <HtmlContentComponent html={text} />
            ) : (
              "텍스트를 입력해주세요"
            )}
          </TextViewer>
        ) : (
          <TextEditor
            text={text}
            setText={setText}
            onBlur={handleEndEditText}
          />
        )}
      </TextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default TextCreator;
