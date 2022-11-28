import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import { SerializedStyles } from "@emotion/react";

interface OptionWrapperProps {
  customCss?: SerializedStyles;
}

const OptionWrapper = styled.div<OptionWrapperProps>`
  width: 75px;
  height: 38px;
  border-radius: 52px;
  background: ${colorPalette.disableBackground};
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease-in;
  cursor: pointer;
  margin-left: 10px;

  &.active {
    background: ${colorPalette.deepBlue};
  }

  ${(props) => props.customCss}
`;

interface OptionButtonIconProps {
  customIconCss?: SerializedStyles;
}

const OptionButtonIcon = styled.div<OptionButtonIconProps>`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  background: ${colorPalette.white};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  transition: all 0.3s ease-in;
  &.active {
    left: 40px;
  }

  ${(props) => props.customIconCss}
`;

interface OptionTextProps {
  customTextCss?: SerializedStyles;
}

const OptionText = styled.div<OptionTextProps>`
  color: ${colorPalette.white};
  font-size: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  transition: all 0.3s ease-in;
  &.active {
    right: 40px;
  }

  ${(props) => props.customTextCss}
`;

interface OptionButtonProps {
  text: string;
  active: boolean;
  customWrapperCss?: SerializedStyles;
  customIconCss?: SerializedStyles;
  customTextCss?: SerializedStyles;
  handleClickOption: () => void;
}

const OptionButton = ({
  text,
  active,
  handleClickOption,
  customWrapperCss,
  customIconCss,
  customTextCss,
}: OptionButtonProps) => {
  return (
    <OptionWrapper
      customCss={customWrapperCss}
      className={active ? "active" : ""}
      onClick={handleClickOption}
    >
      <OptionText customTextCss={customTextCss} className={active ? "active" : ""}>
        {text}
      </OptionText>
      <OptionButtonIcon className={active ? "active" : ""} customIconCss={customIconCss} />
    </OptionWrapper>
  );
};

export default OptionButton;
