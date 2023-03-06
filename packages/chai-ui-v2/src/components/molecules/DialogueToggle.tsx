import styled from "@emotion/styled";
import React from "react";

const ToggleLabel = styled.label``;

interface DialogueToggle {
  handleClickOptions: (optionType: "pronunciation" | "meaning") => void;
}

const DialogueToggle = ({ handleClickOptions }: DialogueToggle) => {
  return (
    <div className="toggles-wrapper">
      <div className="inp-toggle-wrap">
        <span className="toggle-name">한어병음</span>
        <input
          type="checkbox"
          name="input1"
          id="input1"
          className="toggle-input none"
        />
        <ToggleLabel
          htmlFor="input1"
          className="toggle-label"
          onClick={() => {
            handleClickOptions("pronunciation");
          }}
        >
          보이기
        </ToggleLabel>
      </div>
      <div className="inp-toggle-wrap">
        <span className="toggle-name">뜻</span>
        <input
          type="checkbox"
          name="input2"
          id="input2"
          className="toggle-input none"
        />
        <ToggleLabel
          htmlFor="input2"
          className="toggle-label"
          onClick={() => {
            handleClickOptions("meaning");
          }}
        >
          보이기
        </ToggleLabel>
      </div>
    </div>
  );
};

export default DialogueToggle;
