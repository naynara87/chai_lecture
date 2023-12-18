import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export interface ButtonProps {
  customCss?: SerializedStyles;
  className?: string;
}

const Button = styled.button<ButtonProps>`
  ${({ customCss }) => customCss}
`;

export interface IconButtonProps extends ButtonProps {
  onClickBtn?: () => void;
  children?: React.ReactNode;
  className?: string;
}
export const IconButton = ({
  customCss,
  onClickBtn,
  children,
  className
}: IconButtonProps) => {
  return (
    <Button type="button" customCss={customCss} onClick={onClickBtn} className={className}>
      {children}
    </Button>
  );
};

export default IconButton;
