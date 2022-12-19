import React from "react";
import useCornerPage from "../../hooks/useCornerPage";
import Header from "../molecules/Header";
import styled from "@emotion/styled";
import CommonMainContainer from "../atoms/CommonMainContainer";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import "../../styles/wordtest.css";
import { changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";

const SentenceTitle = styled.h2`
  font-weight: 500;
  font-size: ${changePXtoVW(48)};
  text-align: center;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${colorPalette.deepBlue};

  &:last-child {
    border-top: 1px dashed ${colorPalette.deepBlue};
    border-bottom: 1px solid ${colorPalette.deepBlue};
  }

  > span {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

const MetaTestSentence = () => {
  const { currentCorner, pages, appMetaData } = useCornerPage();

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      <CommonMainContainer>
        {/* TemplateXXComponent */}

        <TemplateCommonLayout>
          <TitleContent title="아는 문장 고르기" description="선택한 문장을 확인해 봅시다." />
          <main className="word-test-main">
            <SentenceTitle>
              [{"홍이"}]님은 {"1"}개의 한자어를 정확하게 아는군요!
              <br />
              ‘주제별 표현’으로 이동하여 잘 모르는 {"2"}개의 문장을 학습합니다.{" "}
            </SentenceTitle>
            <div>
              <FlexWrap>
                <span>메타인지</span>
                <span>한자어</span>
                <span>학습 계획</span>
              </FlexWrap>
              <FlexWrap>
                <span>메타인지</span>
                <span>한자어</span>
                <span>학습 계획</span>
              </FlexWrap>
              <FlexWrap>
                <span>메타인지</span>
                <span>한자어</span>
                <span>학습 계획</span>
              </FlexWrap>
            </div>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestSentence;
