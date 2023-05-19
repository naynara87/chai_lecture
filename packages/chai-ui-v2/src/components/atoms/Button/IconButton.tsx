import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export interface ButtonProps {
  customCss?: SerializedStyles;
}

const Button = styled.button<ButtonProps>`
  ${({ customCss }) => customCss}
`;

export interface IconButtonProps extends ButtonProps {
  onClickBtn?: () => void;
  children?: React.ReactNode;
}
export const IconButton = ({
  customCss,
  onClickBtn,
  children,
}: IconButtonProps) => {
  return (
    <Button type="button" customCss={customCss} onClick={onClickBtn}>
      {children}
    </Button>
  );
};

export default IconButton;
