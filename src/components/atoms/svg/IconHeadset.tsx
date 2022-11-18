import styled from "@emotion/styled";
import React from "react";

const Svg = styled.svg`
  position: absolute;
  left: 25%;
  top: 30%;
  width: 60%;
  height: 60%;
`;

const IconHeadset = () => {
  return (
    <Svg viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.42 12.19C37.37 9.78 35.93 7.65 34.14 5.86C32.35 4.07 30.22 2.63 27.81 1.58C25.4 0.53 22.77 0 20 0C17.23 0 14.61 0.53 12.19 1.58C9.78 2.63 7.65 4.07 5.86 5.86C4.07 7.65 2.63 9.78 1.58 12.19C0.53 14.6 0 17.23 0 20V36.16C0 37.19 0.38 38.09 1.14 38.85C1.9 39.61 2.81 39.99 3.83 39.99H12.36V22.95H3.98V20C3.98 15.53 5.54 11.71 8.63 8.62C11.71 5.54 15.54 3.97 20.01 3.97C24.48 3.97 28.3 5.53 31.39 8.62C34.47 11.7 36.04 15.53 36.04 20V22.95H27.65V40H36.18C37.21 40 38.11 39.62 38.87 38.86C39.63 38.1 40.01 37.2 40.01 36.17V20C40.01 17.24 39.48 14.61 38.43 12.19H38.42ZM36.03 26.92V36.02H31.62V26.92H36.03ZM3.98 36.03V26.93H8.39V36.03H3.98Z"
        fill="white"
      />
    </Svg>
  );
};

export default IconHeadset;