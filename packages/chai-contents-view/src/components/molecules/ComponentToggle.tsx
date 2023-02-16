import React from "react";

const ComponentToggle = () => {

  return (
    <div className="inp-toggle-wrap">
      <span className="toggle-name">한어병음</span>
      <input type="checkbox" name="input1" id="input1" className="toggle-input none" />
      <label className="toggle-label">{ '보이기' }</label>
    </div>
  );
};

export default ComponentToggle;
