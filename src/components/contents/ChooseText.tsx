import styled from "@emotion/styled";
import React, { useState } from "react";
import Explanation from "../molecules/Explanation";

const ChooseText = () => {
  const [showExplanation, setShowExplanation] = useState(true);
  const handleClickCloseExplanation = () => {
    setShowExplanation(false);
  };
  return (
    <div>
      <div>그렇다 / 아니다</div>
      {showExplanation && (
        <Explanation
          explanationText={"해설 팝업"}
          handleClickClose={handleClickCloseExplanation}
          isCorrect
        />
      )}
    </div>
  );
};

export default ChooseText;
