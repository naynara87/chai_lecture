import React from "react";

const ComponentToggle = () => {

  return (
    <div className="toggles-wrapper">
      {/* TODO: 여러개가 들어가면 inp-toggle-wrap 이 반복되서 들어감 */}
      <div className="inp-toggle-wrap">
        <span className="toggle-name">{ '한어병음' }</span>
        <input type="checkbox" name="input1" id="input1" className="toggle-input none" />
        <label htmlFor="input1" className="toggle-label">보이기</label>
      </div>
    </div>
  );
};

export default ComponentToggle;
