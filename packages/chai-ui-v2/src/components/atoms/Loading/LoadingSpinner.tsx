import styled from "@emotion/styled";

interface LoadingSpinnerProps {
  size?: number;
  borderWidth?: number;
}

export const LoadingSpinner = styled.div<LoadingSpinnerProps>`
  width: ${({ size }) => (size ? size : 20)}px;
  height: ${({ size }) => (size ? size : 20)}px;
  border: ${({ borderWidth }) => (borderWidth ? borderWidth : 5)}px solid
    #dfdfdf;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
