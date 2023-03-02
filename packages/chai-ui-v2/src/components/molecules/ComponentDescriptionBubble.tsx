import styled from "@emotion/styled";
import React from "react";
import { ImgCharacterComponent } from "../atoms";
import ComponentButtonFillBlackMini from "../atoms/ComponentButtonFillBlackMini";

const DescriptionBubble = styled.div``;

const ComponentDescriptionBubble = () => {
  return (
    <DescriptionBubble className="description-bubble-container">
      <ImgCharacterComponent
        characterType="didiSmile"
        characterAlt="디디미소"
      />
      <div className="description-bubble-wrap">
        <div className="bubble-conts">
          <p className="text">
            {`’이번 패턴은 어떻게 사용하는지  알아볼까요?`}
          </p>
          <ComponentButtonFillBlackMini text="확인" />
        </div>
      </div>
    </DescriptionBubble>
  );
};

export default ComponentDescriptionBubble;
