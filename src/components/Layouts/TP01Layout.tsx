import styled from "@emotion/styled";
import React from "react";

const TP01LayoutStyle = styled.div`
  display: grid;
  text-align: center;
`;

interface TP01LayoutProps {
  children: JSX.Element | JSX.Element[];
  layoutRef?: React.RefObject<HTMLDivElement>;
  id?: string;
}
const TP01Layout = ({ children, layoutRef, id }: TP01LayoutProps) => {
  return (
    <TP01LayoutStyle ref={layoutRef} id={id}>
      {children}
    </TP01LayoutStyle>
  );
};

export default TP01Layout;
