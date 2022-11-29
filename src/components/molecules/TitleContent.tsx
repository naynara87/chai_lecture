import React from "react";
import styled from "@emotion/styled";
import ChaiSkeleton from "../atoms/ChaiSkeleton";
import { breakPoints } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h2`
  font-weight: 600;
  font-size: ${changePXtoVW(56)};
`;

const SubTitle = styled.p`
  margin-top: 9px;
  font-weight: 500;
  font-size: ${changePXtoVW(28)};
  color: ${colorPalette.descriptionText};
  margin-bottom: ${changePXtoVW(80)};
  @media all and (max-width: ${breakPoints.tablet}) {
    margin-top: 0.8333333333vw;
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
