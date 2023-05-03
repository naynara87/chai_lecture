import {
  ID,
  LessonMeta,
  ProgressData,
  QuizData,
  LocalStorage,
  saveLmsData,
  useLmsInputValue,
} from "chai-ui-v2";
import { useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";

export interface UseProgressRateProps {
  totalPages: ID[];
  lessonMetaData: LessonMeta | undefined;
  isCompleted?: boolean;
}
const useProgressRate = ({
  totalPages,
  lessonMetaData,
  isCompleted,
}: UseProgressRateProps) => {
  const { cornerId, pageId: _pageId } = useParams();
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();
  const currentProgress = useCallback(
    (currentPageId: ID) => {
      const pageIdx = totalPages.findIndex((pageId) => {
        return pageId.toString() === currentPageId.toString();
      });
      return Math.floor(((pageIdx + 1) / totalPages.length) * 100);
    },
    [totalPages],
  );

  const pageId = useMemo(() => {
    if (_pageId) {
      return _pageId;
    }
    if (isCompleted) {
      return totalPages[totalPages.length - 1];
    }
    return totalPages[0];
  }, [isCompleted, _pageId, totalPages]);

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

  const quizPageData = useMemo(() => {
    return LocalStorage.getItem("pageData") as QuizData[];
  }, []);

  const score = useMemo(() => {
    const correctQuizPages = quizPageData?.filter((quizPage) => {
      return quizPage.isCorrect;
    });
    return (100 / quizPageData?.length) * correctQuizPages?.length;
  }, [quizPageData]);

  const progressData = useMemo(() => {
    if (!initialDataFromPhp || !cornerId || !pageId) return;
    const parsingCourseId = parseInt(initialDataFromPhp.courseId);
    const parsingLessonId = initialDataFromPhp.lessonId;
    const pasingUno = parseInt(initialDataFromPhp.uno);
    const parsingApplIdId = parseInt(initialDataFromPhp.applId);
    const parsingSubjectId = parseInt(initialDataFromPhp.subjectId);
    return {
      uno: pasingUno, // user id 쿠키에서 받아옴
      applId: parsingApplIdId, // 신청 id 쿠키에서 받아옴
      contsId: parsingSubjectId, // 과목 id 쿠키에서 받아옴
      courseId: parsingCourseId, // 과정 id 쿠키에서 받아옴
      lessonId: parsingLessonId, // 레슨 id 쿠키에서 받아옴
      turnId: cornerId, // 코너 id useParam에서 받음
      pageId: pageId, // 페이지 id useParam에서 받음
      progressRate: currentProgress(pageId),
      envlCatgYn: lessonTp, // 문제레슨인지 콘텐츠레슨인지 구분
      complYn: currentProgress(pageId) === 100 ? "Y" : "N",
      envlScr: lessonTp === "Y" ? Math.floor(score) : undefined,
    } as ProgressData;
  }, [cornerId, pageId, lessonTp, currentProgress, score, initialDataFromPhp]);

  const saveProgress = useCallback(async () => {
    if (!progressData) return;
    try {
      const newProgressData = {
        ...progressData,
        cornerId: progressData.turnId,
      };
      await saveLmsData(newProgressData);
    } catch (error) {
      console.error("진도율 저장 실패", error);
    }
  }, [progressData]);

  return {
    currentProgress,
    progressData,
    saveProgress,
  };
};
export default useProgressRate;
