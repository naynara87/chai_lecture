import React from "react";
import styled from "@emotion/styled";

const OptionWrapper = styled.div`
  width: 75px;
  height: 38px;
  border-radius: 52px;
  background: #cccccc;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease-in;
  cursor: pointer;
  margin-left: 10px;

  &.active {
    background: #40476b;
  }
`;

const OptionButton = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  transition: all 0.3s ease-in;
  &.active {
    left: 40px;
  }
`;

const OptionText = styled.div`
  color: #ffffff;
  font-size: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  transition: all 0.3s ease-in;
  &.active {
    right: 40px;
  }
`;

interface DialogOptionButtonProps {
  text: string;
  active: boolean;
  handleClickOption: () => void;
}

const DialogOptionButton = ({ text, active, handleClickOption }: DialogOptionButtonProps) => {
  return (
    <OptionWrapper className={active ? "active" : ""} onClick={handleClickOption}>
      <OptionText className={active ? "active" : ""}>{text}</OptionText>
      <OptionButton className={active ? "active" : ""} />
    </OptionWrapper>
  );
};

export default DialogOptionButton;
