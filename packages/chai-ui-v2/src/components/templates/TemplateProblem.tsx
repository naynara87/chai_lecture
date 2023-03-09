import React from "react";
import { ComponentButtonRadiFillMain } from "../atoms";
import ComponentProblemPagination from "../molecules/ComponentProblemPagination";

const TemplateProblem = () => {
  return (
    <>
      {/* test header */}
      <header className="cai-hd test-hd">
        <div className="hd-conts-wrap">
          <h1 className="test-hd-ttl">{'빨강 연습문제'}</h1>
          <div className="test-hd-timer">{'00:00:00'}</div>
        </div>
      </header>
      {/* end test header */}
      <ComponentProblemPagination />
      {/* test main layout */}
      <main className="cai-main test-main">
        <div className="layout-panel-wrap">
          <div className="layout-panel">
          </div>
        </div>
        <ComponentButtonRadiFillMain text="채점하기" />
      </main>
      {/* end test main layout */}
    </>
  );
};

export default TemplateProblem;
