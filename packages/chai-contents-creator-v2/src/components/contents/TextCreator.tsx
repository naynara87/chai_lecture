import styled from "@emotion/styled";
import React from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";

const TextCreatorWrapper = styled.div`
  min-width: 240px;
`;

const TextViewer = styled.div``;

const TextCreator = () => {
  const [text] = React.useState<string>("");

  return (
    <ContentCreatorLayout>
      <TextCreatorWrapper>
        <TextViewer>{text || "텍스트를 입력해주세요"}</TextViewer>
      </TextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default TextCreator;
