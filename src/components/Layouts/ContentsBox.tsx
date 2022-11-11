import styled from "@emotion/styled";
import React from "react";

const ContentsBoxStyle = styled.div`
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

interface ContentsBoxProps {
  children: JSX.Element | JSX.Element[];
}
const ContentsBox = ({ children }: ContentsBoxProps) => {
  return <ContentsBoxStyle>{children}</ContentsBoxStyle>;
};

export default ContentsBox;
