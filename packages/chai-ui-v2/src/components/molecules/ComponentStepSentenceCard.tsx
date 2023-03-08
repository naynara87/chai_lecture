import styled from "@emotion/styled";
import React from "react";
import IconPlayButton from "../atoms/Button/IconPlayButton";
// import ComponentButtonStep from "../atoms/Button/ComponentButtonStep";
import IconDictionaryButton from "../atoms/Button/IconDictionaryButton";
import { vw } from "../../assets";
// import ComponentRepeatSpeak from "./ComponentRepeatSpeak";

const StepCard = styled.div`
  > *:not(:first-child) {
    margin-top: ${vw(40)};
  }
`;

const ComponentStepSentenceCard = () => {
  return (
    <div className="step-card-wrap">
      {/* TODO: key설명 - 최대 3단계. 기본 카드 크기에서 단계별로 늘어남 (클래스 step2, step3) */}
      <StepCard className="step-card sentence-card step3">
        <IconPlayButton active={true} />
        <p className="text chinese">{'这道菜酸、甜、苦、辣，什么味道都有，非常香。'}</p>
        <p className="text pinyin">{'Zhè dào cài suān、tián、kǔ、là, shénme wèidào dōu yǒu, fēicháng xiāng.'}</p>
        <p className="text">{'이 요리에는 시고, 달고, 쓰고, 매운 모든 맛이 다 있어서 무척 맛있어요.'}</p>
        <IconDictionaryButton />
        {/* TODO: key설명 - 버튼은 2단계 이상일 때 생성. 누를때마다 다음단계 보임. 3단계에선 안보임 */}
        {/* <ComponentButtonStep /> */}
        {/* <ComponentRepeatSpeak /> */}
      </StepCard>
    </div>
  );
};

export default ComponentStepSentenceCard;
