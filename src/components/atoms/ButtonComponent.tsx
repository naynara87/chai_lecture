// 폴더 생성을 위한 임시 파일입니다
import { SerializedStyles } from "@emotion/react";
import React from "react";
import styled from "@emotion/styled";
import { Link, LinkProps } from "react-router-dom";
import { Corner } from "../../types/appData";

interface ButtonProps {
  customBtnCss: SerializedStyles;
}

const Button = styled.button<ButtonProps>`
  ${(props) => props.customBtnCss}
`;

interface TextComponentProps {
  customTextCss: SerializedStyles;
}

const Text = styled.span<TextComponentProps>`
  ${(props) => props.customTextCss}
`;

interface ButtonComponentProps {
  text: string;
  linkUrl: string;
  linkState?: Corner;
  customBtnCss: SerializedStyles;
  customTextCss: SerializedStyles;
  handleClickButton?: () => void;
}

const ButtonComponent = ({
  text,
  customBtnCss,
  customTextCss,
  linkUrl,
  linkState,
  handleClickButton,
}: ButtonComponentProps) => {
  return (
    <Button type="button" customBtnCss={customBtnCss} onClick={handleClickButton}>
      <Link to={linkUrl} state={linkState} style={{ textDecoration: "none" }}>
        <Text customTextCss={customTextCss}>{text}</Text>
      </Link>
    </Button>
  );
};

export default ButtonComponent;
