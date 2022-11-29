import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import Spacing from "../atoms/Spacing";
import CornerState from "../atoms/CornerState";
import useFooterState from "../../hooks/useFooterState";
import FooterButton from "./FooterButton";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/queryKey";
import { getAppData } from "../../data/tempApi";
import useCorner from "../../hooks/useCorner";
import { footerHeight } from "../../styles/layout";

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FooterContainer = styled.div`
  background-color: ${colorPalette.deepBlue};
  color: ${colorPalette.white};
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  ${footerHeight}
  padding: 0 43px;
  position: fixed;
  bottom: 0;
`;

const CornerStateWrapper = styled.ul`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
`;

interface FooterProps {
  handleClickNext: () => void;
  handleClickPrev: () => void;
  isPageCompleted: boolean;
  pageIndex: number;
}
const Footer = ({ handleClickPrev, handleClickNext, isPageCompleted, pageIndex }: FooterProps) => {
  const { data: appData } = useQuery([QUERY_KEY.APP_DATA], getAppData);
  const { currentCorner } = useCorner();
  const { cornerStateList } = useFooterState({
    appData,
    currentCorner,
  });
  const isFirstPage = useMemo(() => {
    return pageIndex === 0;
  }, [pageIndex]);
  // const isLastPage = useMemo(() => {
  //   if (currentCorner === undefined) {
  //     return false;
  //   }
  //   return pageIndex === currentCorner.pages.length - 1;
  // }, [pageIndex, currentCorner]);

  const isDisableNextButton = useMemo(() => {
    // if (isLastPage) {
    //   return true;
    // }
    return !isPageCompleted;
  }, [isPageCompleted]);

  useEffect(() => {
    if (currentCorner === undefined) {
      return;
    }
    if (process.env.NODE_ENV === "development") {
      console.log(`page: ${pageIndex + 1} / ${currentCorner.pages.length}`);
    }
  }, [pageIndex, currentCorner]);

  return (
    <FooterWrapper>
      <FooterContainer>
        {isFirstPage ? (
          <Spacing width="80px" />
        ) : (
          <FooterButton text="이전" handleClick={handleClickPrev} direction="left" />
        )}
        <CornerStateWrapper>
          {cornerStateList.map((cornerState) => (
            <CornerState key={cornerState.id} state={cornerState.state} />
          ))}
        </CornerStateWrapper>
        <FooterButton
          text="다음"
          handleClick={handleClickNext}
          isDisable={isDisableNextButton}
          direction="right"
        />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
