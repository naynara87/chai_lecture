import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ChaiSkeleton from "../atoms/ChaiSkeleton";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";

interface TitleWrapperProps {
  isTab?: boolean;
  isScroll?: boolean;
}

const TitleWrapper = styled.div<TitleWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${(props) => !props.isTab && "fixed"};
  top: ${(props) => !props.isTab && 0};
  padding-top: ${(props) => !props.isTab && "125px"};
  width: ${(props) => !props.isTab && "100%"};
  left: ${(props) => !props.isTab && "50%"};
  transform: ${(props) => !props.isTab && "translateX(-50%)"};
  background-color: ${(props) => !props.isTab && `${colorPalette.backgroundWhite}`};
  box-shadow: ${(props) => props.isScroll && `0 4px 20px -2px hsl(0deg 0% 81% / 50%)`};
  z-index: 3;
`;

const MainTitle = styled.h2`
  font-weight: 600;
  font-size: ${changePXtoVW(56)};
`;

const SubTitle = styled.p`
  margin-top: ${changePXtoVW(16)};
  font-weight: 500;
  font-size: ${changePXtoVW(28)};
  color: ${colorPalette.descriptionText};
  margin-bottom: ${changePXtoVW(25)};
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
  );
};
export default TitleContent;
