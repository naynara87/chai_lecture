import styled from "@emotion/styled";
import React from "react";
import IconSignPost from "./svg/IconSignPost";

interface CornerSignPostProps {
  cornerName: string;
}

const SignPost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(50%) translateY(50%);
  width: 6.0416666667vw;
  min-width: 48px;
  height: 6.2777777778vh;
  min-height: 76px;
  padding: 0 1.0416666667vw;
  padding-top: 0.625vh;
  line-height: 1.5;
  font-weight: 600;
  font-size: 1.25vw;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignTitle = styled.span`
  position: relative;
  z-index: 1;
  text-align: center;
  text-shadow: -1px 0 #293db5, 0 1px #293db5, 1px 0 #293db5, 0 -1px #293db5;
  margin-top: 1vw;
  @media all and (max-width: 1024px) {
    margin-top: 0;
  }
`;

const CornerSignPost = ({ cornerName }: CornerSignPostProps) => {
  return (
    <SignPost>
      <IconSignPost />
      <SignTitle>{cornerName}</SignTitle>
    </SignPost>
  );
};

export default CornerSignPost;
