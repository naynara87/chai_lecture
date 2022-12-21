import React from "react";
import { css } from "@emotion/react";
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

const ReportTitle = styled.h2`
  margin-bottom: ${changePXtoVW(64)};
  font-weight: 500;
  font-size: ${changePXtoVW(48)};
  text-align: center;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${changePXtoVW(36)} ${changePXtoVW(10)};
  border-top: 1px dashed ${colorPalette.deepBlue};

  &.custom-thead {
    padding: ${changePXtoVW(24)} ${changePXtoVW(10)};
    border-top: 1px solid ${colorPalette.deepBlue};

    > p,
    > div {
      font-weight: 500;
      font-size: ${changePXtoVW(30)};
    }
  }

  &.first-trow {
    border-top: 1px solid ${colorPalette.deepBlue};
  }

  &:last-child {
    border-bottom: 1px solid ${colorPalette.deepBlue};
  }

  > p,
  > div {
    width: 100%;
    font-size: ${changePXtoVW(38)};
    text-align: center;
    white-space: pre-line;
  }
`;

export const btnReset = css`
  border-radius: 0;
  background-color: transparent;
  border: 0;
  appearance: none;
  padding: 0;
  outline: none;
  box-shadow: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${changePXtoVW(278)};
  height: ${changePXtoVW(80)};
  border-radius: 40px;
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;


const MainButton = styled.button`
  ${btnReset}
  border: ${changePXtoVW(4)} solid ${colorPalette.sentenceBubble};
  background-color: ${colorPalette.sentenceBubble};
  color: ${colorPalette.backgroundWhite};
`;

const MainBorderButton = styled.button`
${btnReset}
  border: ${changePXtoVW(4)} solid ${colorPalette.sentenceBubble};
  color: ${colorPalette.sentenceBubble};
`;

const MetaTestSentenceReport = () => {
  const { currentCorner, pages, appMetaData } = useCornerPage();

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      <CommonMainContainer>

        <TemplateCommonLayout>
          <TitleContent title="아는 문장 고르기" description="선택한 문장을 확인해 봅시다." />
          <main className="word-test-main">
            {/* 문장은 최대 4개 */}
            <ReportTitle>
              [{"홍이"}]님은 {"1"}개의 한자어를 정확하게 아는군요!
              <br />
              ‘주제별 표현’으로 이동하여 잘 모르는 {"2"}개의 문장을 학습합니다.{" "}
            </ReportTitle>
            <div>
              {/* FIXME: 마지막셀 삭제여부 기획에서 협의중, 문장없을때 레이아웃 없음 */}
              <FlexWrap className="custom-thead">
                <p>메타인지</p>
                <div>
                  <p>한자어</p>
                </div>
                <p>학습 계획</p>
              </FlexWrap>
              <FlexWrap className="first-trow">
                <p>정확하게 알아요!</p>
                <div>
                  <p>{"好久不见！"}</p>
                </div>
                <p>실전학습</p>
              </FlexWrap>
              <FlexWrap>
                <p>잘 몰라요!</p>
                <div>
                  <p>{"见到你很高兴！"}</p>
                  <p>{"最近怎么样？"}</p>
                  <p>{"最近怎么样？"}</p>
                  <p>{"最近怎么样？"}</p>
                </div>
                <p>주제별 표현</p>
              </FlexWrap>
            </div>
            <div className="btn-wrap">
              <MainButton>실전학습 새 단어</MainButton>
              <MainBorderButton>주제별 표현</MainBorderButton>
            </div>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestSentenceReport;
