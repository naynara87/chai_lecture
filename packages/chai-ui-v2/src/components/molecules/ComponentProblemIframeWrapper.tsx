import styled from "@emotion/styled";
import React from "react";

const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const ComponentProblemIframeWrapper = () => {
  return (
    <IframeWrapper>문제 들어오는 영역</IframeWrapper>
  );
};

export default ComponentProblemIframeWrapper;
