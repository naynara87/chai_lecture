import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const IconSignPost = () => {
  return (
    <Svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_256_37847)">
        <path d="M10 7H114V135L61.1613 107.837L10 135V7Z" fill="#6070CF" />
      </g>
      <defs>
        <filter
          id="filter0_d_256_37847"
          x="0"
          y="0"
          width="124"
          height="148"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_256_37847" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_256_37847"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default IconSignPost;
