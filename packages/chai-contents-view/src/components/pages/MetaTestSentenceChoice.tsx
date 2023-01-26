import React from "react";
import { css } from "@emotion/react";
import useCornerPage from "../../hooks/useCornerPage";
import {
  Header,
  CommonMainContainer,
  TitleContent,
  TemplateCommonLayout,
  CommonPageLayout,
} from "chai-ui";
import styled from "@emotion/styled";
import "../../styles/wordtest.css";
import { changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";

export const btnReset = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${changePXtoVW(278)};
  height: ${changePXtoVW(80)};
  padding: 0;
  border: 0;
  border-radius: 40px;
  background-color: transparent;
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
  appearance: none;
  outline: none;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const MainButton = styled.button`
  ${btnReset}

  border: ${changePXtoVW(4)} solid ${colorPalette.sentenceBubble};
  background-color: ${colorPalette.sentenceBubble};
  color: ${colorPalette.backgroundWhite};
`;

const TextWarning = styled.p`
  margin-top: ${changePXtoVW(32)};
  font-weight: 500;
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.textBoxSub};
  text-align: center;
`;

const MetaTestSentenceChoice = () => {
  const { currentCorner, appMetaData } = useCornerPage();

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      <CommonMainContainer>
        <TemplateCommonLayout>
          <TitleContent
            title="아는 문장 고르기"
            description="인사 관련하여 아는 문장을 고르세요."
          />
          <main className="word-test-main">
            FIXME: QuizAnswer 컴포넌트를 가져올지 상의 메타인지부분 분리 고민중이라 분리 여부 결정후
            컴포넌트도 상의하기
            <div className="btn-wrap">
              <MainButton>건너뛰기</MainButton>
            </div>
            <TextWarning>* 알고 있는 문장이 하나도 없으면 건너뛰기를 선택하세요!</TextWarning>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestSentenceChoice;
