import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import Button from "../atoms/Button";
import ArrowRight from "../atoms/svg/ArrowRight";
import { css } from "@emotion/react";
import ArrowLeft from "../atoms/svg/ArrowLeft";

interface ButtonTextArrowProps {
  left?: boolean;
  direction: "left" | "right";
}
const ButtonTextArrow = styled(Button)<ButtonTextArrowProps>`
  position: relative;
  height: auto;
  padding: 8px 24px;
  padding-right: ${({ direction }) => (direction === "right" ? "38px" : "24px")};
  padding-left: ${({ direction }) => (direction === "left" ? "38px" : "24px")};
  background-color: ${(props) =>
    props.disabled ? colorPalette.disableBackground : colorPalette.white};
  color: ${(props) => (props.disabled ? colorPalette.disableText : colorPalette.deepBlue)};
  font-weight: 600;
  font-size: 12px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;

const arrowCss = css`
  transform: scale(0.6);
  position: absolute;
  margin-left: 10px;
  right: 16px;
`;

const arrowCssLeft = css`
  transform: scale(0.6);
  position: absolute;
  margin-right: 10px;
  left: 16px;
`;

interface FooterButtonProps {
  handleClick(): void;
  isDisable?: boolean;
  text: string;
  direction: "left" | "right";
}
const FooterButton = ({ handleClick, isDisable = false, text, direction }: FooterButtonProps) => {
  return (
    <ButtonTextArrow type="button" onClick={handleClick} disabled={isDisable} direction={direction}>
      {text}
      {direction === "right" ? (
        <ArrowRight customCss={arrowCss} disabled={isDisable} />
      ) : (
        <ArrowLeft customCss={arrowCssLeft} disabled={isDisable} />
      )}
    </ButtonTextArrow>
  );
};

export default FooterButton;
