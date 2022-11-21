import styled from "@emotion/styled";
import React from "react";

const Svg = styled.svg`
  position: absolute;
  left: 25%;
  top: 30%;
  width: 60%;
  height: 60%;
`;

const IconPlayArrow = () => {
  return (
    <Svg viewBox="0 0 29 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.06 31.479C3.7279 32.3116 2 31.3539 2 29.783V4.21699C2 2.64612 3.7279 1.68844 5.06 2.52099L25.5128 15.304C26.7662 16.0873 26.7662 17.9127 25.5128 18.696L5.06 31.479Z"
        stroke="white"
        strokeWidth="4"
      />
    </Svg>
  );
};

export default IconPlayArrow;
