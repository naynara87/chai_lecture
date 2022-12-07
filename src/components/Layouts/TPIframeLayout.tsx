import styled from "@emotion/styled";
import React from "react";

const TPIframeLayoutStyle = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

interface TPIframeLayoutProps {
  children: JSX.Element;
}

const TPIframeLayout = ({ children }: TPIframeLayoutProps) => {
  return <TPIframeLayoutStyle>{children}</TPIframeLayoutStyle>;
};

export default TPIframeLayout;
