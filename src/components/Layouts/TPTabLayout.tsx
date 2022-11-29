import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import { changePXtoVW } from "../../utils/styles";

const TPTabLayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  margin-bottom: 70px;
  padding-top: ${changePXtoVW(70)};

  &:last-child {
    margin-bottom: 0;
  }
`;

interface TPTabLayoutProps {
  children: JSX.Element | JSX.Element[];
  LayoutRef: React.RefObject<HTMLDivElement>;
}
const TPTabLayout = ({ children, LayoutRef }: TPTabLayoutProps) => {
  return <TPTabLayoutStyle ref={LayoutRef}>{children}</TPTabLayoutStyle>;
};

export default TPTabLayout;
