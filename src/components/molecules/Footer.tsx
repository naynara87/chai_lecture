import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import Spacing from "../atoms/Spacing";
import CornerState from "../atoms/CornerState";
import useFooterState from "../../hooks/useFooterState";
import { AppData, Corner } from "../../types/appData";
import FooterButton from "./FooterButton";

const FooterContainer = styled.footer`
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
  height: 70px;
  padding: 0 43px;
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
  appData: AppData;
  currentCorner: Corner;
  pageIndex: number;
}
const Footer = ({
  handleClickPrev,
  handleClickNext,
  isPageCompleted,
  appData,
  currentCorner,
  pageIndex,
}: FooterProps) => {
  const { cornerStateList } = useFooterState({
    appData,
    currentCorner,
  });
  const isFirstPage = useMemo(() => {
    return pageIndex === 0;
  }, [pageIndex]);
  const isLastPage = useMemo(() => {
    return pageIndex === currentCorner.pages.length - 1;
  }, [pageIndex, currentCorner]);

  const isDisableNextButton = useMemo(() => {
    if (isLastPage) {
      return true;
    }
    return !isPageCompleted;
  }, [isPageCompleted, isLastPage]);

  useEffect(() => {
    console.log(`page: ${pageIndex + 1} / ${currentCorner.pages.length}`);
  }, [pageIndex, currentCorner]);

  return (
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
      {isLastPage ? (
        <Spacing width="80px" />
      ) : (
        <FooterButton
          text="다음"
          handleClick={handleClickNext}
          isDisable={isDisableNextButton}
          direction="right"
        />
      )}
    </FooterContainer>
  );
};

export default Footer;
