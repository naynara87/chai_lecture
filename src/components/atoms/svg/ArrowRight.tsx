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

interface ArrowRightProps {
  customCss?: SerializedStyles;
  disabled?: boolean;
  onClickIcon?: () => void;
  activeColor?: string;
}
const ArrowRight = ({
  customCss,
  disabled,
  onClickIcon,
  activeColor = colorPalette.deepBlue,
}: ArrowRightProps) => {
  const handleClickIcon = () => {
    if (onClickIcon) {
      onClickIcon();
    }
  };

  return (
    <IconWrapper customCss={customCss} onClick={handleClickIcon}>
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.463 21.4324L2.463 21.5L2.963 21.5C3.60419 21.5 4.21573 21.2527 4.6972 20.7964L4.69732 20.7965L4.70642 20.7874L12.7804 12.7312C12.7804 12.7312 12.7804 12.7312 12.7804 12.7312C13.7399 11.7739 13.7399 10.226 12.7804 9.26881L4.70642 1.21257L4.70639 1.21255C4.21302 0.720334 3.59274 0.500001 2.963 0.500001C2.32181 0.500001 1.71027 0.747285 1.22879 1.20361L1.22868 1.20349L1.21961 1.21255C0.260128 2.16978 0.260128 3.71771 1.2196 4.67494L1.22009 4.67542L7.56716 10.9902L1.22009 17.305L1.21961 17.3055C0.26013 18.2628 0.26013 19.8107 1.21961 20.7679C1.58129 21.1288 2.01118 21.3435 2.463 21.4324Z"
          fill={disabled ? colorPalette.disableText : activeColor}
          stroke={disabled ? colorPalette.disableText : activeColor}
        />
      </svg>
    </IconWrapper>
  );
};

export default ArrowRight;
