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
  padding-right: ${({ direction }) => (direction === "right" ? `${changePXtoVW(72)}` : `${changePXtoVW(32)}`)};
  padding-left: ${({ direction }) => (direction === "left" ? `${changePXtoVW(72)}` : `${changePXtoVW(32)}`)};
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
  margin-left: ${changePXtoVW(10)};
  right: ${changePXtoVW(16)};
`;

const arrowCssLeft = css`
  transform: scale(0.6);
  position: absolute;
  margin-right: ${changePXtoVW(10)};
  left: ${changePXtoVW(16)};
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
