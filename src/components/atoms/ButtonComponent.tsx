import React from "react";
import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface ButtonProps {
  customBtnCss?: SerializedStyles;
}

const Button = styled.button<ButtonProps>`
  ${(props) => props.customBtnCss}
`;

interface TextComponentProps {
  customTextCss?: SerializedStyles;
}

const Text = styled.span<TextComponentProps>`
  ${(props) => props.customTextCss}
`;

interface ButtonComponentProps {
  text: string;
  linkUrl?: string;
  customBtnCss?: SerializedStyles;
  customTextCss?: SerializedStyles;
  handleClickButton?: () => void;
}

function ButtonComponent({
  text,
  customBtnCss,
  customTextCss,
  linkUrl,
  handleClickButton,
}: ButtonComponentProps) {
  return (
    <Link to={linkUrl ?? ""}>
      <Button type="button" customBtnCss={customBtnCss} onClick={handleClickButton}>
        <Text customTextCss={customTextCss}>{text}</Text>
      </Button>
    </Link>
  );
}

export default ButtonComponent;
