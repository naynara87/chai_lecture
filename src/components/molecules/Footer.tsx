import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import Spacing from "../atoms/Spacing";
import CornerState from "../atoms/CornerState";
import useFooterState from "../../hooks/useFooterState";
import FooterButton from "./FooterButton";
import { footerHeight } from "../../styles/layout";
import { Corner2 } from "../../types/appData";

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
  currentCorner: Corner2 | undefined;
}
const Footer = ({
  handleClickPrev,
  handleClickNext,
  isPageCompleted,
  pageIndex,
  currentCorner,
}: FooterProps) => {
  const { cornerStateList } = useFooterState({
    currentCorner,
  });
  const isFirstPage = useMemo(() => {
    return pageIndex === 0;
  }, [pageIndex]);

  const isDisableNextButton = useMemo(() => {
    return !isPageCompleted;
  }, [isPageCompleted]);

  useEffect(() => {
    if (currentCorner === undefined) {
      return;
    }
    console.log(`page: ${pageIndex + 1} / ${currentCorner.pages.length}`);
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
