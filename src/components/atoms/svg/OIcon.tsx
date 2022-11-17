import React from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

interface OIconProps {
  css?: SerializedStyles;
}
const Svg = styled.svg<OIconProps>`
  ${({ css }) => css}
`;

const OIcon = ({ css }: OIconProps) => {
  return (
    <Svg css={css} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1987_12306)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 40C0 62.05 17.95 80 40 80C62.05 80 80 62.05 80 40C80 17.95 62.05 0 40 0C17.95 0 0 17.95 0 40ZM13.3333 40.0005C13.3333 54.7005 25.2999 66.6672 39.9999 66.6672C54.6999 66.6672 66.6666 54.7005 66.6666 40.0005C66.6666 25.3005 54.6999 13.3338 39.9999 13.3338C25.2999 13.3338 13.3333 25.3005 13.3333 40.0005Z"
          fill="#6070CF"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1987_12306"
          x="0"
          y="0"
          width="81"
          height="81"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1987_12306" />
        </filter>
      </defs>
    </Svg>
  );
};

export default OIcon;
