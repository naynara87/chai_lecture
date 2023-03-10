import styled from "@emotion/styled";
import React, { useState } from "react";
import { ContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";

const TextCreatorWrapper = styled.div`
  min-width: 240px;
`;

const TextViewer = styled.div``;

const TextCreator = ({
  contentId,
  setFocusedId,
  isFocused,
}: ContentCommonProps) => {
  const [text] = useState<string>("");
  const handleClickComponent = () => {
    setFocusedId(contentId);
  };

  return (
    <ContentCreatorLayout>
      <TextCreatorWrapper onClick={handleClickComponent}>
        {!isFocused ? (
          <TextViewer>{text || "텍스트를 입력해주세요"}</TextViewer>
        ) : (
          <div>에디터</div>
        )}
      </TextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default TextCreator;
