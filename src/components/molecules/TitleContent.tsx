import React from "react";
import styled from "@emotion/styled";
import ChaiSkeleton from "../atoms/ChaiSkeleton";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <MainTitle>
        {props.loading ? <ChaiSkeleton width={130} height={36} animation={false} /> : props.title}
      </MainTitle>
      <SubTitle>
        {props.loading ? (
          <ChaiSkeleton width={253} height={17} animation={false} />
        ) : (
          props.description
        )}
      </SubTitle>
    </TitleWrapper>
  );
};
export default TitleContent;
