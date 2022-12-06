import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import { SerializedStyles } from "@emotion/react";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

interface OptionWrapperProps {
  customCss?: SerializedStyles;
}

const OptionWrapper = styled.div<OptionWrapperProps>`
  width: ${changePXtoVW(75)};
  height: ${changePXtoVH(38)};
  border-radius: ${changePXtoVW(52)};
  background: ${colorPalette.disableBackground};
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease-in;
  cursor: pointer;
  margin-left: ${changePXtoVW(10)};;

  &.active {
    background: ${colorPalette.deepBlue};
  }

  ${(props) => props.customCss}
`;

interface OptionButtonIconProps {
  customIconCss?: SerializedStyles;
}

const OptionButtonIcon = styled.div<OptionButtonIconProps>`
  width: ${changePXtoVW(22)};
  height: ${changePXtoVW(22)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${changePXtoVW(10)};
  background: ${colorPalette.white};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  transition: all 0.3s ease-in;
  &.active {
    left: ${changePXtoVW(40)};
  }

  ${(props) => props.customIconCss}
`;

interface OptionTextProps {
  customTextCss?: SerializedStyles;
}

const OptionText = styled.div<OptionTextProps>`
  color: ${colorPalette.white};
  font-size: ${changePXtoVW(14)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${changePXtoVW(10)};
  transition: all 0.3s ease-in;
  &.active {
    right: ${changePXtoVW(40)};
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
