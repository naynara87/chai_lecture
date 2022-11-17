import styled from "@emotion/styled";
import React from "react";
import { tabTemplateGridGap, templateContentsAreaHeight } from "../../constants/layout";

const TP15LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-rows: max-content 84.5%;
  gap: ${tabTemplateGridGap};
`;

const MainContentArea = styled.div`
  overflow-y: auto;
  display: grid;
  grid-template-columns: 45% 55%;
`;

interface TP03LayoutProps {
  children: [JSX.Element, JSX.Element, JSX.Element];
}
const TP15Layout = ({ children }: TP03LayoutProps) => {
  return (
    <TP15LayoutStyle>
      <div>{children[0]}</div>
      <MainContentArea>
        <div>{children[1]}</div>
        <div>{children[2]}</div>
      </MainContentArea>
    </TP15LayoutStyle>
  );
};

export default TP15Layout;
