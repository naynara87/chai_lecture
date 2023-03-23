import styled from "@emotion/styled";
import React from "react";
import ComponentProblemCommentary from "../molecules/ComponentProblemCommentary";
import ComponentProblemGrade from "../molecules/ComponentProblemGrade";
import ComponentProblemTopButtonArea from "../molecules/ComponentProblemTopButtonArea";
import ComponentProblemUserInfo from "../molecules/ComponentProblemUserInfo";

const TemplateProblemWrapper = styled.div``;

const TemplateProblem = () => {
  return (
    <TemplateProblemWrapper>
      {/* problem header */}
      {/* end problem header */}
      {/* problem main layout */}
      <main className="cai-main problem-main">
        <ComponentProblemTopButtonArea />
        <div className="layout-panel-wrap grid-h-3-7">
          <div className="layout-panel pd-40">
            <ComponentProblemUserInfo />
            <ComponentProblemGrade />
          </div>
          <div className="layout-panel">
            <ComponentProblemCommentary />
          </div>
        </div>
      </main>
      {/* end problem main layout */}
    </TemplateProblemWrapper>
  );
};

export default TemplateProblem;
