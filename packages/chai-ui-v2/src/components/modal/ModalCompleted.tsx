import styled from "@emotion/styled";
import React, { useMemo } from "react";
import Confetti from "react-confetti";
import {
  characterType,
  getCookie,
  InitialAppData,
  LessonMeta,
} from "../../core";
import useLessonCompletedCharacterMapper from "../../core/hooks/useLessonCompletedCharacterMapper";
import { ImgCharacterComponent } from "../atoms";
import { useParams } from "react-router-dom";

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
  lessonMetaData: LessonMeta;
}

const ModalCompleted = ({
  lessonCode,
  exitPlayer,
  lessonMetaData,
}: ModalCompletedProps) => {
  const { getLessonCompletedCharacterCode } =
    useLessonCompletedCharacterMapper();

  const { cornerId, pageId } = useParams();

  const lessonTp = useMemo(() => {
    if (lessonMetaData?.lessonTpCd) {
      if (parseInt(lessonMetaData.lessonTpCd) === 10) {
        return "N";
      } else {
        return "Y";
      }
    } else {
      return "N";
    }
  }, [lessonMetaData?.lessonTpCd]);

  const completedLessonData = useMemo(() => {
    const learningLogCookieData = getCookie<InitialAppData>("bubble-player");
    if (!learningLogCookieData) return;
    const parsingCourseId = parseInt(learningLogCookieData.courseId);
    const parsingLessonId = parseInt(learningLogCookieData.lessonId);
    const pasingUno = parseInt(learningLogCookieData.uno);
    const parsingApplIdId = parseInt(learningLogCookieData.applId);
    const parsingSubjectId = parseInt(learningLogCookieData.subjectId);
    return {
      uno: pasingUno, // user id 쿠키에서 받아옴
      applId: parsingApplIdId, // 신청 id 쿠키에서 받아옴
      courseId: parsingCourseId, // 과정 id 쿠키에서 받아옴
      contsId: parsingSubjectId, // 과목 id 쿠키에서 받아옴
      turnId: cornerId, // 코너 id useParam에서 받음
      lessonId: parsingLessonId, // 레슨 id 쿠키에서 받아옴
      pageId: pageId, // 페이지 id useParam에서 받음
      envlCatgYn: lessonTp, // 문제레슨인지 콘텐츠레슨인지 구분
    };
  }, [cornerId, pageId, lessonTp]);

  const handleClickClose = async () => {
    if (exitPlayer) {
      await exitPlayer();
    }
    console.log("학습 종료");
    const btnQuit = document.querySelector<HTMLDivElement>("#quit");
    // console.log("completedLessonData", completedLessonData);
    window.parent.postMessage(
      {
        func: "pageReload",
        data: completedLessonData,
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
