import React from "react";
import useCornerPage from "../../hooks/useCornerPage";
import Header from "../molecules/Header";
import CommonMainContainer from "../atoms/CommonMainContainer";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import "../../styles/wordtest.css";

const MetaTestWordTestGrade = () => {
  const { currentCorner, pages, appMetaData } = useCornerPage();

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      <CommonMainContainer>
        {/* TemplateXXComponent */}

        <TemplateCommonLayout>
          <TitleContent
            title="단어 메타인지 테스트"
            description="한자를 보고 한어병음과 뜻을 고르세요."
          />
          <main className="word-test-main">
            <ul className="test-grade-wrap">
              <li className="test-grade-head">
                <p className="test-word">&nbsp;</p>
                <div className="test-my-choice">
                  <p className="inp-radio-layout">한어병음</p>
                  <p className="inp-radio-layout">뜻</p>
                </div>
                <p className="test-grade">결과</p>
              </li>

              {/* TODO: 최대 20개 */}
              <li className="test-grade-conts">
                <p className="test-word">{"篮球"}</p>
                <div className="test-my-choice">
                  <p className="inp-radio-layout">{"huì"}</p>
                  {/* TODO: 틀리면 wrong */}
                  <p className="inp-radio-layout wrong">{"~할 줄 모른다"}</p>
                </div>
                {/* TODO: 위 둘중 하나라도 틀리면 wrong */}
                <p className="test-grade wrong">{"오답"}</p>
              </li>

              <li className="test-grade-conts">
                <p className="test-word">{"打"}</p>
                <div className="test-my-choice">
                  <p className="inp-radio-layout">{"huì"}</p>
                  <p className="inp-radio-layout">{"~할 줄 모른다"}</p>
                </div>
                <p className="test-grade">{"정답"}</p>
              </li>

              <li className="test-grade-conts">
                <p className="test-word">{"打"}</p>
                <div className="test-my-choice">
                  <p className="inp-radio-layout wrong">{"huì"}</p>
                  <p className="inp-radio-layout wrong">{"~할 줄 모른다"}</p>
                </div>
                <p className="test-grade wrong">{"정답"}</p>
              </li>
            </ul>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestWordTestGrade;