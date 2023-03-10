import React from "react";
import IconRight from "../../assets/images/icon/icon_o.svg";
import IconWrong from "../../assets/images/icon/icon_x.svg";

const ComponentProblemGrade = () => {
  return (
    <div className="problem-grade-wrapper">
      <ul className="problem-grade-wrap">
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'1'}</span>
            <img src={IconRight} alt="정답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'92'}</span>
            <img src={IconWrong} alt="오답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'993'}</span>
            <img src={IconRight} alt="정답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'4'}</span>
            <img src={IconWrong} alt="오답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'5'}</span>
            <img src={IconRight} alt="정답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'6'}</span>
            <img src={IconWrong} alt="오답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'7'}</span>
            <img src={IconRight} alt="정답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'8'}</span>
            <img src={IconWrong} alt="오답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'9'}</span>
            <img src={IconRight} alt="정답" />
          </button>
        </li>
        <li className="problem-grade">
          <button className="btn-grade">
            <span>{'9999'}</span>
            <img src={IconWrong} alt="오답" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ComponentProblemGrade;
