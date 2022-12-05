import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import Button from "../atoms/Button";
import ArrowRight from "../atoms/svg/ArrowRight";
import { css } from "@emotion/react";
import ArrowLeft from "../atoms/svg/ArrowLeft";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

interface ButtonTextArrowProps {
  left?: boolean;
  direction: "left" | "right";
}

const ButtonTextArrow = styled(Button)<ButtonTextArrowProps>`
  position: relative;
  height: auto;
  padding: ${changePXtoVH(16)} ${changePXtoVW(48)};
  padding-right: ${({ direction }) => (direction === "right" ? "3.75vw" : "2.5vw")};
  padding-left: ${({ direction }) => (direction === "left" ? "3.75vw" : "2.5vw")};
  border-radius: ${changePXtoVH(48)};
  background-color: ${(props) =>
    props.disabled ? colorPalette.disableBackground : colorPalette.white};
  color: ${(props) => (props.disabled ? colorPalette.disableText : colorPalette.deepBlue)};
  font-weight: 600;
  font-size: ${changePXtoVW(24)};
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
        <ArrowRight customCss={arrowCss} disabled={isDisable} activeColor={colorPalette.deepBlue} />
      ) : (
        <ArrowLeft
          customCss={arrowCssLeft}
          disabled={isDisable}
          activeColor={colorPalette.deepBlue}
        />
      )}
    </ButtonTextArrow>
  );
};

export default FooterButton;
