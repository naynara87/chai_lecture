import React from "react";
import IconEmpty from "../../../assets/images/icon/icon_empty.svg";

const ComponentProblemDefault = () => {
  return (
    <div className="problem-commentary-wrapper">
      {/* TODO: key설명 - 항목 선택을 하지 않았을 때 */}
      <div className="empty-conts">
        <img src={IconEmpty} alt="없음" className="img" />
        <h3 className="emp-ttl">
          채점표에서 번호를 <br />
          선택해주세요
        </h3>
        <p className="emp-txt">여기에 정답과 해설이 표시됩니다.</p>
      </div>
    </div>
  );
};

export default ComponentProblemDefault;
