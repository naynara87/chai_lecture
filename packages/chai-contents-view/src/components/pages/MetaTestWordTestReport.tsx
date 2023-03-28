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

const MetaTestWordTestReport = () => {
  const { currentCorner, appMetaData } = useCornerPage();

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      <CommonMainContainer>
        <TemplateCommonLayout>
          <TitleContent
            title="단어 메타인지 테스트 최종 결과"
            description="총 00개의 단어 중 00개의 단어를 정확하게 알고 있습니다."
          />
          <main className="word-test-main">
            {/* tab title */}
            <div className="tab-title-wrap">
              <div className="tab-title">아는 단어</div>
              <div className="tab-title active">모르는 단어</div>
            </div>

            <div className="choice-card-wrap report-wrap">
              {/* word card */}
              <div className="inp-grp">
                <input type="checkbox" id="inputId" className="inp-chck" disabled />
                <label htmlFor="inputId" className="inp-card-layout">
                  {"会"}
                </label>
              </div>
              {/* end word card */}
              {/* checked로 아는 단어, 모르는 단어를 구분할 수도 있어 checked 스타일  초기화 해두었습니다. */}
              <div className="inp-grp">
                <input type="checkbox" id="inputId" className="inp-chck" disabled checked />
                <label htmlFor="inputId" className="inp-card-layout">
                  {"会"}
                </label>
              </div>
              {/* end word card */}
            </div>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestWordTestReport;
