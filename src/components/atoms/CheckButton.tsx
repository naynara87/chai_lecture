import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";

const CheckButtonContainer = styled.button`
  border-radius: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 1.3888888889vh 2.5vw 1.3888888889vh 2.5vw;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 12.4791666667vw;
  min-width: 12.4791666667vw;
  height: 5.5555555556vh;
  background-color: ${colorPalette.confirmBtn};
  border-radius: 2.5vw;
  font-weight: 600;
  font-size: 1.25vw;
  color: ${colorPalette.white};
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 2.5vh auto 1vh;
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
