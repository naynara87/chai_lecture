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

interface ButtonComponentProps<S> {
  text: string;
  linkUrl: string;
  linkState?: S;
  customBtnCss?: SerializedStyles;
  customTextCss?: SerializedStyles;
  handleClickButton?: () => void;
}

function ButtonComponent<LinkStateType = any>({
  text,
  customBtnCss,
  customTextCss,
  linkUrl,
  linkState,
  handleClickButton,
}: ButtonComponentProps<LinkStateType>) {
  return (
    <Link to={linkUrl} state={linkState} style={{ textDecoration: "none" }}>
      <Button type="button" customBtnCss={customBtnCss} onClick={handleClickButton}>
        <Text customTextCss={customTextCss}>{text}</Text>
      </Button>
    </Link>
  );
}

export default ButtonComponent;
