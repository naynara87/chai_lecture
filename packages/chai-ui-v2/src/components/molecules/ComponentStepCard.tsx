import styled from "@emotion/styled";
import React from "react";
import ComponentButtonStep from "../atoms/Button/ComponentButtonStep";
// import PlayButtonOnly from "../atoms/Button/PlayButtonOnly";
import ComponentRepeatSpeak from "./ComponentRepeatSpeak";

const StepCard = styled.div`
  > *:not(:first-child) {
    margin-top: 2vw;
  }
`;

const ComponentStepCard = () => {
  return (
    <div className="step-card-wrap">
      {/* TODO: key설명 - 최대 3단계. 기본 카드 크기에서 단계별로 늘어남 (클래스 step2, step3) */}
      <StepCard className="step-card step2">
        {/* <p className="text chinese">{'草食性家畜'}</p> */}
        {/* <PlayButtonOnly /> */}
        <p className="text pinyin">{'zài'}</p>
        {/* TODO: key설명 - 버튼은 2단계 이상일 때 생성. 누를때마다 다음단계 보임. 3단계에선 안보임 */}
        <ComponentButtonStep />
        <ComponentRepeatSpeak />
      </StepCard>
    </div>
  );
};

export default ComponentStepCard;
