import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import React from "react";

export const DashBoxAreaWrapper = styled.div`
  width: 100%;
  border: 2px dashed ${colorPalette.gray700};
  padding: 16px;
  position: relative;
`;

interface DashBoxAreaProps {
  /**
   * FIXME: BBC-1090
   * reset focus component
   */
  resetFocus: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const DashBoxArea = ({ resetFocus, children }: DashBoxAreaProps) => {
  return (
    <DashBoxAreaWrapper onClick={resetFocus}>{children}</DashBoxAreaWrapper>
  );
};

export default DashBoxArea;
