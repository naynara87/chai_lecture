import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

const CheckButtonContainer = styled.button`
  border-radius: 0;
  background-color: transparent;
  border: 0;
  appearance: none;
  padding: ${changePXtoVW(24)} ${changePXtoVW(48)};
  outline: none;
  box-shadow: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${changePXtoVW(239)};
  min-width: ${changePXtoVW(239)};
  height: ${changePXtoVH(80)};
  background-color: ${colorPalette.confirmBtn};
  border-radius: ${changePXtoVW(48)};
  font-weight: 600;
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.white};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  transition: all 0.3s;
  margin: ${changePXtoVH(36)} auto 1vh;
  cursor: pointer;

  &.hide {
    background-color: ${colorPalette.disableBackground};
  }
`;

interface CheckButtonProps {
  isHide: boolean;
  text: string;
  handleClickCheckButton: () => void;
}

const CheckButton = ({ text, handleClickCheckButton, isHide }: CheckButtonProps) => {
  const onClickCheckButton = () => {
    handleClickCheckButton();
  };

  return (
    <CheckButtonContainer onClick={onClickCheckButton} className={isHide ? "hide" : ""}>
      {text}
    </CheckButtonContainer>
  );
};

export default CheckButton;
