import React from "react";
import IconButton, { IconButtonProps } from "./IconButton";
import IconLeft from "../../../assets/images/icon/icon_arrow_left_white.svg";
import IconRight from "../../../assets/images/icon/icon_arrow_right_white.svg";
import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

interface IconImgProps {
  iconCss?: SerializedStyles;
  iconClassName?: string;
}
const IconImg = styled.img<IconImgProps>`
  ${({ iconCss }) => iconCss};
`;

interface ArrowButtonProps
  extends Omit<IconButtonProps, "children">,
    IconImgProps {
  direction: "left" | "right";
}
const ArrowButton = ({
  direction,
  iconCss,
  iconClassName,
  ...iconBtnProps
}: ArrowButtonProps) => {
  return (
    <IconButton {...iconBtnProps}>
      {direction === "left" ? (
        <IconImg src={IconLeft} alt="arrow_left" iconCss={iconCss} className={iconClassName} />
      ) : (
        <IconImg src={IconRight} alt="arrow_right" iconCss={iconCss} className={iconClassName} />
      )}
    </IconButton>
  );
};

export default ArrowButton;
