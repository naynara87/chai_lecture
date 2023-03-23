import React from "react";
import IconRight from "../../assets/images/icon/icon_problem_o.svg";
import IconWrong from "../../assets/images/icon/icon_problem_x.svg";

const ComponentProblemGrade = () => {
  return (
    <div className="problem-grade-wrapper">
      <ul className="problem-grade-wrap">
        <li className="problem-grade">
          <button className="btn-grade active">
            <span>{'1'}</span>
            <div className="img-wrap">
              <img src={IconRight} alt="정답" />
            </div>
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'92'}</span>
            <div className="img-wrap">
              <img src={IconWrong} alt="오답" />
            </div>
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'3'}</span>
            <div className="img-wrap">
              <img src={IconRight} alt="정답" />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ComponentProblemGrade;
