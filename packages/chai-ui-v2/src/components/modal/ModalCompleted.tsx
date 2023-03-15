import styled from "@emotion/styled";
import React from "react";
import Confetti from "react-confetti";
import { ImgCharacterComponent } from "../atoms";

const ModalCompletedWrapper = styled.div``;

const ModalCompleted = () => {
  return (
    <ModalCompletedWrapper className="modal modal-completed">
      <div className="modal-bg"></div>
      <div className="modal-container">
        <ImgCharacterComponent characterType="allFinish1" characterAlt="완료" />
        <p className="text">{`오늘의 학습을 완료했어요!
          이제 연습문제를 풀러 가볼까요?`}</p>
        <button className="btn" onClick={() => window.close()}>
          확인
        </button>
        <Confetti numberOfPieces={300} />
      </div>
    </ModalCompletedWrapper>
  );
};

export default ModalCompleted;
