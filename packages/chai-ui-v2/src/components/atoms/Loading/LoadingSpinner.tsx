import styled from "@emotion/styled";

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid #dfdfdf;
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
