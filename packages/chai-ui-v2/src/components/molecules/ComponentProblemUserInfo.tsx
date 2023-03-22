import React from "react";

const ComponentProblemUserInfo = () => {
  return (
    <div className="problem-user-info-wrap">
      <h3 className="user-title">
        {`홍길동`}님<br />
        <b>{`빨강 연습문제`}</b><br />
        채점 결과
      </h3>
      <div className="score-wrapper">
        <div className="score"><b>{`85`}</b>점</div>
        <button type="button" className="btn-problem-white-round btn">내 성취도 보러가기</button>
      </div>
    </div>
  );
};

export default ComponentProblemUserInfo;
