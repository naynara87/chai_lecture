import styled from "@emotion/styled";
import React from "react";

const Svg = styled.svg`
  position: absolute;
  left: 25%;
  top: 30%;
  width: 60%;
  height: 60%;
`;

interface IconMicProps {
  color?: string;
}

const IconMic = ({ color }: IconMicProps) => {
  return (
    <Svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 27.5C19.52 27.5 23.18 24.14 23.18 20V7.5C23.18 3.36 19.52 0 15 0C10.48 0 6.82 3.36 6.82 7.5V20C6.82 24.14 10.48 27.5 15 27.5ZM27.37 15C26.62 15 26.01 15.56 26.01 16.25V20C26.01 25.84 20.42 30.53 13.92 29.95C8.25 29.44 4.01 24.77 4.01 19.55V16.25C4.01 15.56 3.4 15 2.65 15H1.36C0.61 15 0 15.56 0 16.25V19.39C0 26.39 5.45 32.64 12.96 33.58V36H8.19C7.44 36 6.83 36.56 6.83 37.25V38.75C6.83 39.44 7.44 40 8.19 40H21.83C22.58 40 23.19 39.44 23.19 38.75V37.25C23.19 36.56 22.58 36 21.83 36H17.06V33.61C24.37 32.69 30.02 26.94 30.02 20V16.25C30.02 15.56 29.41 15 28.66 15H27.37Z"
        fill={color ?? "white"}
      />
    </Svg>
  );
};

export default IconMic;