import styled from "@emotion/styled";
import React from "react";
import { ID } from "../../core";

const ToggleLabel = styled.label``;

interface DialogueToggle {
  handleClickOptions: (optionType: "pronunciation" | "meaning") => void;
  contentId: ID;
}

const DialogueToggle = ({ handleClickOptions, contentId }: DialogueToggle) => {
  return (
    <div className="toggles-wrapper">
      <div className="inp-toggle-wrap">
        <span className="toggle-name">한어병음</span>
        <input
          type="checkbox"
          name={`input1${contentId}`}
          id={`input1${contentId}`}
          className="toggle-input none"
        />
        <ToggleLabel
          htmlFor={`input1${contentId}`}
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
          name={`input2${contentId}`}
          id={`input2${contentId}`}
          className="toggle-input none"
        />
        <ToggleLabel
          htmlFor={`input2${contentId}`}
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
