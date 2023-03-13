import React from "react";
interface ComponentToggleProps {
  onClickPronunciationToggle: () => void;
  onClickMeaningToggle: () => void;
}

const ComponentToggle = ({
  onClickMeaningToggle,
  onClickPronunciationToggle,
}: ComponentToggleProps) => {
  return (
    <div className="toggles-wrapper">
      {/* TODO: key설명 - 여러개가 들어가면 inp-toggle-wrap 이 반복되서 들어감 */}
      <div className="inp-toggle-wrap">
        <span className="toggle-name">{"한어병음"}</span>
        <input
          type="checkbox"
          name="input1"
          id="input1"
          className="toggle-input none"
        />
        <label
          htmlFor="input1"
          className="toggle-label"
          onClick={onClickPronunciationToggle}
        >
          보이기
        </label>
      </div>

      <div className="inp-toggle-wrap">
        <span className="toggle-name">{"해석"}</span>
        <input
          type="checkbox"
          name="input2"
          id="input2"
          className="toggle-input none"
        />
        <label
          htmlFor="input2"
          className="toggle-label"
          onClick={onClickMeaningToggle}
        >
          보이기
        </label>
      </div>
    </div>
  );
};

export default ComponentToggle;
