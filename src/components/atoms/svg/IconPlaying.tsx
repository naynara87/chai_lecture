import styled from "@emotion/styled";
import React from "react";

const Svg = styled.svg`
  position: absolute;
  left: 26%;
  top: 25%;
  width: 60%;
  height: 70%;

  @-webkit-keyframes obj_blink {
    0% {
      opacity: 0.2;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes obj_blink {
    0% {
      opacity: 0.2;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  -webkit-animation-name: obj_blink;
  animation-name: obj_blink;
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
`;

const IconPlaying = () => {
  return (
    <Svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 29C0.9 29 0 28.1 0 27V7C0 5.9 0.9 5 2 5C3.1 5 4 5.9 4 7V27C4 28.1 3.1 29 2 29Z"
        fill="white"
      />
      <path
        d="M11 34C9.9 34 9 33.1 9 32V2C9 0.9 9.9 0 11 0C12.1 0 13 0.9 13 2V32C13 33.1 12.1 34 11 34Z"
        fill="white"
      />
      <path
        d="M20 26C18.9 26 18 25.1 18 24V10C18 8.9 18.9 8 20 8C21.1 8 22 8.9 22 10V24C22 25.1 21.1 26 20 26Z"
        fill="white"
      />
      <path
        d="M29 24C27.9 24 27 23.1 27 22V12C27 10.9 27.9 10 29 10C30.1 10 31 10.9 31 12V22C31 23.1 30.1 24 29 24Z"
        fill="white"
      />
      <path
        d="M38 21C36.9 21 36 20.1 36 19V15C36 13.9 36.9 13 38 13C39.1 13 40 13.9 40 15V19C40 20.1 39.1 21 38 21Z"
        fill="white"
      />
    </Svg>
  );
};

export default IconPlaying;
