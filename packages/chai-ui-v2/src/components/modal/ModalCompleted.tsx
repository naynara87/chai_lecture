import styled from "@emotion/styled";
import React from "react";
import Confetti from "react-confetti";
import { characterType, LessonMeta, ProgressData } from "../../core";
import useLessonCompletedCharacterMapper from "../../core/hooks/useLessonCompletedCharacterMapper";
import { ImgCharacterComponent } from "../atoms";

const ModalCompletedWrapper = styled.div`
  canvas {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

interface ModalCompletedProps {
  lessonCode: LessonMeta["colorTypeCd"];
  exitPlayer: () => Promise<unknown> | undefined;
  saveProgress?: () => Promise<void>;
  progressData: ProgressData | undefined;
}

const ModalCompleted = ({
  lessonCode,
  exitPlayer,
  saveProgress,
  progressData,
}: ModalCompletedProps) => {
  const { getLessonCompletedCharacterCode } =
    useLessonCompletedCharacterMapper();

  const handleClickClose = async () => {
    if (exitPlayer) {
      await exitPlayer();
    }
    console.log("학습 종료");
    const btnQuit = document.querySelector<HTMLDivElement>("#quit");
    saveProgress && (await saveProgress());
    window.parent.postMessage(
      {
        func: "progressRate",
        data: progressData,
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
        <button
          className="btn"
          onClick={() => {
            handleClickClose()
              .then((result) => {
                console.log(result);
              })
              .catch((err) => console.log(err));
          }}
        >
          확인
        </button>
        <Confetti numberOfPieces={300} />
      </div>
    </ModalCompletedWrapper>
  );
};

export default ModalCompleted;
