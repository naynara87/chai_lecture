import styled from "@emotion/styled";
import React from "react";
import IconSignPost from "../../images/iconSignPost.svg";
import { colorPalette } from "../../styles/colorPalette";

interface CornerSignPostProps {
  cornerName: string;
}

const SignPost = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  transform: translateX(100%) translateY(100%);
  width: 6.0416666667vw;
  min-width: 53px;
  max-width: 97px;
  height: 12.0777777778vh;
  min-height: 66px;
  /* padding: 0 1.0416666667vw; */

  line-height: 1.5;
  font-weight: 600;
  color: ${colorPalette.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${IconSignPost});
  @media all and (max-width: 1024px) {
    height: 9.2777777778vh;
  }
`;

const SignTitle = styled.span`
  position: absolute;
  z-index: 1;
  text-align: center;
  top: 0;
  /* transform: translateY(50%); */
  padding: 1vw 15px 0;
  font-size: clamp(12px, 1.45vw, 18px);

  text-shadow: -1px 0 ${colorPalette.signPostTextBorer}, 0 1px ${colorPalette.signPostTextBorer},
    1px 0 ${colorPalette.signPostTextBorer}, 0 -1px ${colorPalette.signPostTextBorer};
  @media all and (max-width: 1024px) {
    padding: 1.2vw 10px 0;
  }
`;

const CornerSignPost = ({ cornerName }: CornerSignPostProps) => {
  return (
    <SignPost>
      <SignTitle>{cornerName}</SignTitle>
    </SignPost>
  );
};

export default CornerSignPost;
