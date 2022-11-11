import styled from "@emotion/styled";
import React from "react";

const ContentsBoxStyle = styled.div`
  height: 100%;
`;

interface ContentsBoxProps {
  children: JSX.Element | JSX.Element[];
}
const ContentsBox = ({ children }: ContentsBoxProps) => {
  return <ContentsBoxStyle>{children}</ContentsBoxStyle>;
};

export default ContentsBox;
