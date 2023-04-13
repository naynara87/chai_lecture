import styled from "@emotion/styled";
import React from "react";
import Confetti from "react-confetti";
import { characterType, LessonMeta } from "../../core";
import useLessonCompletedCharacterMapper from "../../core/hooks/useLessonCompletedCharacterMapper";
import { ImgCharacterComponent } from "../atoms";

const ModalCompletedWrapper = styled.div``;

interface ModalCompletedProps {
  lessonCode: LessonMeta["colorTypeCd"];
  exitPlayer?: () => void;
}

const ModalCompleted = ({ lessonCode, exitPlayer }: ModalCompletedProps) => {
  const { getLessonCompletedCharacterCode } =
    useLessonCompletedCharacterMapper();

  const handleClickClose = () => {
    console.log("학습 종료");
    exitPlayer && exitPlayer();
    const btnQuit = document.querySelector<HTMLDivElement>("#quit");
    window.parent.postMessage(
      {
        func: "pageReload",
      },
      "*",
    );
    btnQuit?.click();
  };

  return (
    <ModalCompletedWrapper className="modal modal-completed">
      <div className="modal-bg"></div>
      <div className="modal-container">
        <ImgCharacterComponent
          characterType={
            getLessonCompletedCharacterCode(lessonCode) as characterType
          }
          characterAlt="완료"
        />
        <p className="text">{`오늘의 학습을 완료했어요!
          이제 연습문제를 풀러 가볼까요?`}</p>
        <button className="btn" onClick={handleClickClose}>
          확인
        </button>
        <Confetti numberOfPieces={300} />
      </div>
    </ModalCompletedWrapper>
  );
};

export default ModalCompleted;
