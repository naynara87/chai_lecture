import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TPIframeLayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  overflow-y: auto;
  text-align: center;
`;

interface TPIframeLayoutProps {
  children: JSX.Element;
}

const TPIframeLayout = ({ children }: TPIframeLayoutProps) => {
  return <TPIframeLayoutStyle>{children}</TPIframeLayoutStyle>;
};

export default TPIframeLayout;
