import styled from "@emotion/styled";
import { HtmlContentComponent } from "chai-ui-v2";
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
}: ContentCommonProps) => {
  const [text, setText] = useState<string>("");

  const handleClickComponent = (e: React.MouseEvent) => {
    setFocusedId(e, content.id);
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
          <TextEditor text={text} setText={setText} />
        )}
      </TextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default TextCreator;
