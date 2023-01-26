import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ChaiSkeleton from "../atoms/ChaiSkeleton";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import {
  headerHeightNormal,
  tabTitleHeightNormal,
  titleHeightNormal,
} from "../../constants/layout";

interface TitleWrapperProps {
  isTab?: boolean;
  isScroll?: boolean;
}

interface TitleContainerProps {
  isTab?: boolean;
}

const TitleContainer = styled.div<TitleContainerProps>`
  height: ${(props) => (props.isTab ? tabTitleHeightNormal : titleHeightNormal)};
`;

const TitleWrapper = styled.div<TitleWrapperProps>`
  z-index: 1;
  position: ${(props) => !props.isTab && "fixed"};
  top: ${(props) => !props.isTab && 0};
  left: ${(props) => !props.isTab && "50%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => !props.isTab && "100%"};
  padding-top: ${(props) => !props.isTab && `calc(${headerHeightNormal} + ${changePXtoVH(96)})`};
  background-color: ${colorPalette.white};
  box-shadow: ${(props) => props.isScroll && `0 4px 20px -2px hsl(0deg 0% 81% / 50%)`};
  transform: ${(props) => !props.isTab && "translateX(-50%)"};
`;

const MainTitle = styled.h2`
  font-weight: 600;
  font-size: ${changePXtoVW(56)};
`;

const SubTitle = styled.p`
  margin-top: ${changePXtoVW(16)};
  margin-bottom: ${changePXtoVW(25)};
  font-weight: 500;
  font-size: ${changePXtoVW(28)};
  color: ${colorPalette.descriptionText};
`;

interface TitleContentProps {
  title: string;
  description: string;
  loading?: boolean;
  isTab?: boolean;
}

const TitleContent = (props: TitleContentProps) => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollTop } = document.documentElement;
      if (scrollTop > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <TitleContainer isTab={props.isTab}>
      <TitleWrapper isTab={props.isTab} isScroll={props.isTab ? undefined : isScroll}>
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
    </TitleContainer>
  );
};
export default TitleContent;
