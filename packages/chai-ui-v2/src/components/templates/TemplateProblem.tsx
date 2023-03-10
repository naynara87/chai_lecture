import React from "react";
import { ComponentButtonRadiFillMain } from "../atoms";
import ComponentProblemCommentary from "../molecules/ComponentProblemCommentary";
import ComponentProblemGrade from "../molecules/ComponentProblemGrade";
import ComponentProblemTopButtonArea from "../molecules/ComponentProblemTopButtonArea";
import ComponentProblemUserInfo from "../molecules/ComponentProblemUserInfo";

const TemplateProblem = () => {
  return (
    <>
      {/* problem header */}
      <header className="cai-hd problem-hd">
        <div className="hd-conts-wrap">
          <h1 className="problem-hd-ttl">{'빨강 연습문제'}</h1>
          <div className="problem-hd-timer">{'00:00:00'}</div>
        </div>
      </header>
      {/* end problem header */}
      {/* problem main layout */}
      <main className="cai-main problem-main">
        <ComponentProblemTopButtonArea />
        <div className="layout-panel-wrap grid-h-3-7">
          <div className="layout-panel">
            <ComponentProblemUserInfo />
            <ComponentProblemGrade />
          </div>
          <div className="layout-panel">
            <ComponentProblemCommentary />
          </div>
        </div>
        <ComponentButtonRadiFillMain text="채점하기" />
      </main>
      {/* end problem main layout */}
    </>
  );
};

export default TemplateProblem;
