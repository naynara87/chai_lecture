import styled from "@emotion/styled";
import React from "react";

const TPIframeLayoutStyle = styled.div`
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

interface TPIframeLayoutProps {
  children: JSX.Element;
}

const TPIframeLayout = ({ children }: TPIframeLayoutProps) => {
  return <TPIframeLayoutStyle>{children}</TPIframeLayoutStyle>;
};

export default TPIframeLayout;
