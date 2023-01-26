import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import { Spacing, CornerState, FooterButton } from "chai-ui";
import useFooterState from "../../hooks/useFooterState";
import { footerHeight } from "../../styles/layout";
import { AppMetaData, Corner2 } from "../../types/appData";
import { changePXtoVW } from "../../utils/styles";

const FooterWrapper = styled.footer`
  z-index: 10;
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
`;

const CornerStateWrapper = styled.ul`
  display: inline-flex;
  vertical-align: middle;
`;

interface FooterProps {
  handleClickNext: () => void;
  handleClickPrev: () => void;
  isPageCompleted: boolean;
  appMetaData: AppMetaData | undefined;
  pageIndex: number;
  currentCorner: Corner2 | undefined;
}
const Footer = ({
  handleClickPrev,
  handleClickNext,
  isPageCompleted,
  appMetaData,
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

  const getFooterState = useMemo(() => {
    // TODO kjw lessonTpCd 값 넘어오는거 확인 후 if문 변경
    return cornerStateList.map((cornerState) => (
      <CornerState key={cornerState.id} state={cornerState.state} />
    ));
    // if (appMetaData?.lessonTpCd !== "10") {
    // } else {
    //   return quizStateList.map((quizState) => (
    //     // TODO kjw 문제풀이 postEvent 작업 후 quizState 업데이트 로직 수정
    //     <QuizState key={quizState.id} isCorrect={quizState.isCorrect} />
    //   ));
    // }
  }, [cornerStateList]);

  return (
    <FooterWrapper>
      {isFirstPage ? (
        <Spacing width="80px" />
      ) : (
        <FooterButton text="이전" handleClick={handleClickPrev} direction="left" />
      )}
      <CornerStateWrapper>{getFooterState}</CornerStateWrapper>
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
