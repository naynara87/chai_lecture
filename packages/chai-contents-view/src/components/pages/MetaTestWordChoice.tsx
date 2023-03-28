import React from "react";
import useCornerPage from "../../hooks/useCornerPage";
import {
  Header,
  CommonMainContainer,
  TitleContent,
  TemplateCommonLayout,
  CommonPageLayout,
} from "chai-ui";
import "../../styles/wordtest.css";

const MetaTestWordChoice = () => {
  const { currentCorner, appMetaData } = useCornerPage();

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      <CommonMainContainer>
        <TemplateCommonLayout>
          <TitleContent
            title="단어 메타인지 테스트"
            description="정확하게 아는 단어를 선택해 주세요 !"
          />
          <main className="word-test-main">
            <div className="choice-card-wrap">
              {/* word card */}
              <div className="inp-grp">
                <input type="checkbox" id="inputId" className="inp-chck" />
                <label htmlFor="inputId" className="inp-card-layout">
                  {"会"}
                </label>
              </div>

              {/* word card choice */}
              <div className="inp-grp">
                <input type="checkbox" id="inputId2" className="inp-chck" checked />
                <label htmlFor="inputId2" className="inp-card-layout">
                  {"会"}
                </label>
              </div>
            </div>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestWordChoice;
