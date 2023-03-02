import React from "react";
import ComponentProgress from "../atoms/ComponentProgress";
import iconCheck from "../../images/icon/icon_check_green.svg";
import styled from "@emotion/styled";
import ComponentButtonFillBlackMini from "../atoms/ComponentButtonFillBlackMini";

const RepeatSpeak = styled.div`
`;

const ComponentRepeatSpeak = () => {
  return (
    // TODO: key설명 - 단계별로 클래스 추가 step2, step3 
    // 1단계 - 문구, 시작 버튼 보임
    // 2단계 - step2 문구, 프로그래스바 보임
    // 3단계 - step3 문구, 이미지 아이콘 보임
    <RepeatSpeak className="repeat-speak-wrapper">
      {/* TODO: key설명 - 3단계, 단계별 문구 고정
      직접 따라 말해볼까요?
      잘 듣고 따라 말해보세요!
      잘했어요!
       */}
      <div className="text-wrap">
        <span className="text">{'직접 따라 말해볼까요?'}</span>
        <img src={iconCheck} alt="" className="icon" />
      </div>
      <ComponentButtonFillBlackMini text="시작" />
      <ComponentProgress />
    </RepeatSpeak>
  );
};

export default ComponentRepeatSpeak;
