import React from "react";
import useCornerPage from "../../hooks/useCornerPage";
import Header from "../molecules/Header";
import CommonMainContainer from "../atoms/CommonMainContainer";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import "../../styles/wordtest.css";

const MetaTestWordTest = () => {
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
          <main>
            <div className="word-test-wrap">
              <h2 className="metatest-title">
                안다고 선택한 단어 : <b>13</b>개
              </h2>
              <ul>
                {/* question */}
                <li className="metatest-question-list">
                  <div className="text-wrap">
                    <span className="number">1</span>
                    <span className="word">打</span>
                  </div>

                  {/* choice word */}
                  <div className="choice-container">
                    <div className="choice-wrap">
                      <h3 className="inp-title">한어병음</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId1" className="inp-radio" />
                        <label htmlFor="inputId1" className="inp-radio-layout">
                          huì
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId2" className="inp-radio" />
                        <label htmlFor="inputId2" className="inp-radio-layout">
                          dǎ
                        </label>
                      </div>
                    </div>

                    <div className="choice-wrap">
                      <h3 className="inp-title">뜻</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId3" className="inp-radio" />
                        <label htmlFor="inputId3" className="inp-radio-layout">
                        치다
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId4" className="inp-radio" />
                        <label htmlFor="inputId4" className="inp-radio-layout">
                        떨다
                        </label>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestWordTest;
