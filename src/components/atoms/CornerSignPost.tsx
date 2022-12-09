import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { headerHeightNormal } from "../../constants/layout";

interface CornerSignPostProps {
  cornerName: string;
}

const SignPost = styled.div`
  z-index: 4;
  position: fixed;
  top: ${headerHeightNormal};
  left: ${changePXtoVW(80)};
  width: ${changePXtoVW(124)};
  height: ${changePXtoVH(148)};
  padding: 0 ${changePXtoVW(20)};
  padding-top: ${changePXtoVH(9)};
  text-align: center;
  background-position: center ${changePXtoVH(0)};
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("${process.env.REACT_APP_BASE_URL}/images/img/icon_sign_post.svg");
  line-height: 1.5;
  font-weight: 600;
  color: ${colorPalette.white};
  font-size: ${changePXtoVW(24)};
`;

const SignTitle = styled.span`
  text-align: center;
  font-size: ${changePXtoVW(24)};
  text-shadow: -1px 0 ${colorPalette.signPostTextBorer}, 0 1px ${colorPalette.signPostTextBorer},
    1px 0 ${colorPalette.signPostTextBorer}, 0 -1px ${colorPalette.signPostTextBorer};
`;

const CornerSignPost = ({ cornerName }: CornerSignPostProps) => {
  return (
    <SignPost>
      <SignTitle>{cornerName}</SignTitle>
    </SignPost>
  );
};

export default CornerSignPost;
