import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import React from "react";

export const DashBoxAreaWrapper = styled.div`
  width: 100%;
  border: 2px dashed ${colorPalette.gray700};
  padding: 16px;
  position: relative;
  overflow-y: scroll;
`;

interface DashBoxAreaProps {
  children: React.ReactNode;
}

const DashBoxArea = ({ children }: DashBoxAreaProps) => {
  return <DashBoxAreaWrapper>{children}</DashBoxAreaWrapper>;
};

export default DashBoxArea;
