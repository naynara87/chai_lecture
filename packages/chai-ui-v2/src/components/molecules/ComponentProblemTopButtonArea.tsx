import React from "react";
import IconReset from "../../assets/images/icon/icon_reset_main.svg";
import IconClose from "../../assets/images/icon/icon_out_white.svg";

const ComponentProblemTopButtonArea = () => {
  return (
    <div className="problem-top-button-wrapper">
      <div className="top-button-left">
        <button type="button" className="btn-problem-white btn">처음부터 다시 풀기 <img src={IconReset} alt="" /></button>
      </div>
      <div className="top-button-right">
        <h2 className="problem-title-wrap">
          {`총 `}
          <b>{`00`}</b>
          {`문항 풀이에 `}
          <b>{`0시간 00분 00초 `}</b>
          {`소요`}
        </h2>
        <button type="button" className="btn-problem-gray">나가기 <img src={IconClose} alt="" /></button>
      </div>
    </div>
  );
};

export default ComponentProblemTopButtonArea;
