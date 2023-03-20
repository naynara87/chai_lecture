import styled from "@emotion/styled";
import React from "react";
import BtnIcon from "../../assets/images/icon/icon_stick_arrow_right_white.svg";

const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: red;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const TemplateProblem = () => {
  return (
    <>
      {/* problem header */}

      {/* end problem header */}
      {/* problem main layout */}
      {/* <main className="cai-main problem-main">
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
       */}


      <header className="cai-hd problem-hd">
        <div className="hd-conts-wrap">
          <h1 className="problem-hd-ttl">{'빨강 연습문제'}</h1>
          <div className="problem-hd-timer">{'00:00:00'}</div>
        </div>
      </header>
      <main className="cai-main problem-main">
        <div className="problem-top-button-wrapper pagination-wrapper">
          {/* TODO: 설명 - 열면 클래스 active 추가, 문제풀면 end 추가 */}
          <button className="problem-pagination end">{'1'}</button>
          <button className="problem-pagination active end">{'92'}</button>
          <button className="problem-pagination active">{'993'}</button>
          <button className="problem-pagination">{'9994'}</button>
        </div>
        <div className="layout-panel-wrap">
          {/* 문항번호 */}
          <div className="question-number attched">{`[50 ~ 87]`}</div>
          <div className="question-number">{`55번`}</div>
          {/* end 문항번호 */}
          <div className="layout-panel">
            <IframeWrapper>문제 들어오는 영역</IframeWrapper>
          </div>
          <button className="btn btn-problem">
            <span>채점하기</span>
            <img src={BtnIcon} alt="바로가기아이콘" />
          </button>
        </div>
      </main>
      {/* end problem main layout */}
    </>
  );
};

export default TemplateProblem;
