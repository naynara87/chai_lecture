import React, { useMemo } from "react";
import IconReset from "../../../assets/images/icon/icon_reset_main.svg";
import IconClose from "../../../assets/images/icon/icon_out_white.svg";
import { QuizData } from "../../../core";

interface ComponentProblemTopButtonAreaProps {
  quizPageData: QuizData[];
  solvingTime: number;
  onClickRestartButton: () => void;
}

const ComponentProblemTopButtonArea = ({
  quizPageData,
  solvingTime,
  onClickRestartButton,
}: ComponentProblemTopButtonAreaProps) => {
  const convertedSolvingTime = useMemo(() => {
    const hour = Math.floor(solvingTime / 3600);
    const min = Math.floor((solvingTime % 3600) / 60);
    const sec = Math.floor(solvingTime % 60);

    return (
      hour.toString().padStart(2, "0") +
      "시간 " +
      min.toString().padStart(2, "0") +
      "분 " +
      sec.toString().padStart(2, "0") +
      "초"
    );
  }, [solvingTime]);

  return (
    <div className="problem-top-button-wrapper">
      <div className="top-button-left">
        <button
          type="button"
          className="btn-problem-white btn"
          onClick={onClickRestartButton}
        >
          처음부터 다시 풀기 <img src={IconReset} alt="" />
        </button>
      </div>
      <div className="top-button-right">
        <h2 className="problem-title-wrap">
          총<b>{quizPageData.length.toString().padStart(2, "0")}</b>
          문항 풀이에
          <b>{convertedSolvingTime}</b>
          소요
        </h2>
        <button type="button" className="btn-problem-gray">
          나가기 <img src={IconClose} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ComponentProblemTopButtonArea;
