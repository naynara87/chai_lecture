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
  padding: ${changePXtoVH(15)} ${changePXtoVW(48)};
  padding-right: ${({ direction }) =>
    direction === "right" ? `${changePXtoVW(72)}` : `${changePXtoVW(48)}`};
  padding-left: ${({ direction }) =>
    direction === "left" ? `${changePXtoVW(72)}` : `${changePXtoVW(48)}`};
  border-radius: ${changePXtoVH(48)};
  background-color: ${(props) =>
    props.disabled ? colorPalette.disableBackground : colorPalette.white};
  font-weight: 600;
  font-size: ${changePXtoVW(22)};
  color: ${(props) => (props.disabled ? colorPalette.disableText : colorPalette.deepBlue)};
  transition: all 0.2s;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;

const arrowCss = css`
  position: absolute;
  top: 50%;
  left: auto;
  right: ${changePXtoVW(40)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${changePXtoVW(24)};
  height: ${changePXtoVW(24)};
  transform: translateY(-50%);
  
  > svg {
    width: ${changePXtoVW(12)};
  }
  `;

const arrowCssLeft = css`
  position: absolute;
  left: ${changePXtoVW(40)};
  width: ${changePXtoVW(12)};
  
  > svg {
    max-width: 100%;
  }
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
