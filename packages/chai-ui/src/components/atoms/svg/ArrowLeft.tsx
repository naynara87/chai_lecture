import React from "react";
import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { colorPalette } from "../../../styles/colorPalette";

interface IconWrapperProps {
  customCss?: SerializedStyles;
}
const IconWrapper = styled.span<IconWrapperProps>`
  display: inline-block;
  ${(props) => (props.customCss ? props.customCss : "")}
`;

interface ArrowLeftProps {
  customCss?: SerializedStyles;
  disabled?: boolean;
  onClickIcon?: () => void;
  activeColor?: string;
}

const ArrowLeft = ({
  customCss,
  disabled,
  onClickIcon,
  activeColor = colorPalette.deepBlue,
}: ArrowLeftProps) => {
  const handleClickIcon = () => {
    if (onClickIcon) {
      onClickIcon();
    }
  };

  return (
    <IconWrapper onClick={handleClickIcon} customCss={customCss}>
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.537 0.567606L11.537 0.499999L11.037 0.499999C10.3958 0.499999 9.78427 0.747286 9.3028 1.20361L9.30268 1.20349L9.29358 1.21258L1.21961 9.2688C1.2196 9.26881 1.21959 9.26882 1.21958 9.26883C0.260131 10.2261 0.26014 11.774 1.21961 12.7312L9.29358 20.7874L9.29361 20.7875C9.78698 21.2797 10.4073 21.5 11.037 21.5C11.6782 21.5 12.2897 21.2527 12.7712 20.7964L12.7713 20.7965L12.7804 20.7874C13.7399 19.8302 13.7399 18.2823 12.7804 17.3251L12.7799 17.3246L6.43284 11.0098L12.7799 4.69496L12.7804 4.69447C13.7399 3.73725 13.7399 2.18931 12.7804 1.23208C12.4187 0.871248 11.9888 0.656524 11.537 0.567606Z"
          fill={disabled ? colorPalette.disableText : activeColor}
          stroke={disabled ? colorPalette.disableText : activeColor}
        />
      </svg>
    </IconWrapper>
  );
};

export default ArrowLeft;
