import React from "react";
import styled from "@emotion/styled";

interface ContentLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Container = styled.div`
  overflow: auto;
  height: 484px;
  padding-top: 42px;
  text-align: center;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media all and (max-width: 1024px) {
    padding-top: 4.1666666667vw;
    height: calc(100vh - 5.4166666667vw - 7.2916666667vw - 14.0625vw);
    max-height: 584px;
  }
`;

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <Container>{children}</Container>;
};

export default ContentLayout;
