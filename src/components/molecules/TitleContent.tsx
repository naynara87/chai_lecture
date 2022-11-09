import React from "react";
import styled from "@emotion/styled";

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 85px;
  height: 185px;
  @media all and (max-width: 1024px) {
    padding-top: 8vw;
    height: 15.75vw;
  }
`;

const MainTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  @media all and (max-width: 1024px) {
    font-size: 2.9166666667vw;
  }
`;

const SubTitle = styled.p`
  margin-top: 9px;
  font-weight: 500;
  font-size: 15px;
  @media all and (max-width: 1024px) {
    margin-top: 0.8333333333vw;
    font-size: 1.4583333333vw;
  }
`;

interface TitleContentProps {
  title: string;
  description: string;
  loading?: boolean;
}

const TitleContent = (props: TitleContentProps) => {
  return (
    <TitleWrapper>
      <MainTitle>{props.loading ? <>타이틀 로딩 중</> : props.title}</MainTitle>
      <SubTitle>{props.loading ? <>설명 로딩 중</> : props.description}</SubTitle>
    </TitleWrapper>
  );
};
export default TitleContent;
