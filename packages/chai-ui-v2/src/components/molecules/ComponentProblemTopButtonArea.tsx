import React from "react";
import { ComponentButtonRadiBorderMain, ComponentButtonRadiFillMain } from "../atoms";

const ComponentProblemTopButtonArea = () => {
  return (
    <div className="problem-top-button-wrapper">
      <div className="top-button-left">
        <ComponentButtonRadiBorderMain text="처음부터 다시 풀기" />
      </div>
      <div className="top-button-right">
        <h2 className="problem-title-wrap">
          {`총 `}
          <b>{`00`}</b>
          {`문항 풀이에 `}
          <b>{`0시간 00분 00초 `}</b>
          {`소요`}
        </h2>
        <ComponentButtonRadiFillMain text="나가기" />
      </div>
    </div>
  );
};

export default ComponentProblemTopButtonArea;
