import React from "react";
import { ComponentButtonRadiBorderMain } from "../atoms";

const ComponentProblemUserInfo = () => {
  return (
    <div className="problem-user-info-wrap">
      <h3 className="user-title">
        <b>{`홍길동`}</b> 님<br />
        <b>{`빨강 연습문제`}</b><br />
        채점 결과
      </h3>
      <div className="score-wrapper">
        <div className="score"><b>{`85`}</b>점</div>
        <ComponentButtonRadiBorderMain text="내 성취도 보러가기" />
      </div>
    </div>
  );
};

export default ComponentProblemUserInfo;
