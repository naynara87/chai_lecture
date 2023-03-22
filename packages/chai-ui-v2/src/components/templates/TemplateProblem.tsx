import styled from "@emotion/styled";
import React from "react";
import IconTimer from "../../assets/images/icon/icon_timer.svg";
import ComponentProblemCommentary from "../molecules/ComponentProblemCommentary";
import ComponentProblemGrade from "../molecules/ComponentProblemGrade";
import ComponentProblemTopButtonArea from "../molecules/ComponentProblemTopButtonArea";
import ComponentProblemUserInfo from "../molecules/ComponentProblemUserInfo";

const TemplateProblemWrapper = styled.div``;

const TemplateProblem = () => {
  return (
    <TemplateProblemWrapper>
      {/* problem header */}
      <header className="cai-hd problem-hd">
        <div className="hd-conts-wrap">
          <h1 className="problem-hd-ttl">{'빨강 연습문제'}</h1>
          <div className="problem-hd-timer"><img src={IconTimer} alt="시간" />{'00:00:00'}</div>
        </div>
      </header>
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
