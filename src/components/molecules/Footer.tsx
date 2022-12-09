import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import Spacing from "../atoms/Spacing";
import CornerState from "../atoms/CornerState";
import useFooterState from "../../hooks/useFooterState";
import FooterButton from "./FooterButton";
import { footerHeight } from "../../styles/layout";
import { Corner2 } from "../../types/appData";
import { changePXtoVW } from "../../utils/styles";

const FooterWrapper = styled.footer`
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${footerHeight};
  padding: 0 ${changePXtoVW(43)};
  background-color: ${colorPalette.deepBlue};
  color: ${colorPalette.white};
  z-index: 10;
`;

const CornerStateWrapper = styled.ul`
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
    if (process.env.NODE_ENV === "development") {
      console.log(`page: ${pageIndex + 1} / ${currentCorner.pages.length}`);
    }
  }, [pageIndex, currentCorner]);

  return (
    <FooterWrapper>
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
    </FooterWrapper>
  );
};

export default Footer;
