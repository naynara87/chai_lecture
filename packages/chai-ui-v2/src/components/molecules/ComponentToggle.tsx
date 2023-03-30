import React from "react";
import { Content } from "../../core";

interface ComponentToggleProps {
  onClickPronunciationToggle: () => void;
  onClickMeaningToggle: () => void;
  contents: Content;
}

const ComponentToggle = ({
  onClickMeaningToggle,
  onClickPronunciationToggle,
  contents,
}: ComponentToggleProps) => {
  return (
    <div className="toggles-wrapper">
      {/* TODO: key설명 - 여러개가 들어가면 inp-toggle-wrap 이 반복되서 들어감 */}
      <div className="inp-toggle-wrap">
        <span className="toggle-name">한어병음</span>
        <input
          type="checkbox"
          name={`${contents.id}-input1`}
          id={`${contents.id}-input1`}
          className="toggle-input none"
        />
        <label
          htmlFor={`${contents.id}-input1`}
          className="toggle-label"
          onClick={onClickPronunciationToggle}
        >
          보이기
        </label>
      </div>

      <div className="inp-toggle-wrap">
        <span className="toggle-name">해석</span>
        <input
          type="checkbox"
          name={`${contents.id}-input2`}
          id={`${contents.id}-input2`}
          className="toggle-input none"
        />
        <label
          htmlFor={`${contents.id}-input2`}
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
