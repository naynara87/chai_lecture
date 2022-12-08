import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../../utils/styles";
interface IconTailProps {
  color?: string;
  customCss?: SerializedStyles;
}

interface SvgProps {
  customCss?: SerializedStyles;
}

const Svg = styled.svg<SvgProps>`
  ${(props) => props.customCss}

  position: absolute;
  top: ${changePXtoVH(50)};
  left: ${changePXtoVW(190)};
  width: ${changePXtoVW(120)};
`;

const IconTail = ({ color = colorPalette.white, customCss }: IconTailProps) => {
  return (
    <Svg viewBox="0 0 350 50" fill="none" xmlns="http://www.w3.org/2000/svg" customCss={customCss}>
      <path
        d="M0.613921 24.25C21.305 35.5659 43.1143 12.0665 49.592 0.222072L53.9892 33.4009C27.5853 45.7455 8.58557 32.8633 0.613921 24.25Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconTail;
