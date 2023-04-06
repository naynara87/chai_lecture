import {
  getCookie,
  InitialAppData,
  LocalStorage,
  QuizData,
  saveLmsData,
  useDebounced,
} from "chai-ui-v2";
import { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useCorner from "../../hooks/useCorner";
import useLesson from "../../hooks/useLesson";
import useProgressRate from "../../hooks/useProgressRate";
import { currentCornerIdState } from "../../state/currentCornerId";
import ContentsLayout from "./ContentsLayout";
import QuestionLayout from "./QuestionLayout";

const Layout = () => {
  const { courseId, lessonId, cornerId, pageId } = useParams(); // 이게 나중 실행됨
  const learningLogCookieData = getCookie<InitialAppData>("bubble-player");
  const { lessonMetaData, corners, totalPages } = useLesson(
    lessonId,
    learningLogCookieData?.lessonTpCd,
  );
  const { pages, cornerMetaData } = useCorner(
    cornerId,
    learningLogCookieData?.lessonTpCd,
  ); // 이게 먼저 실행되고

  const [, setCurrentCornerId] = useRecoilState(currentCornerIdState);
  const { currentProgress } = useProgressRate(totalPages);

  useEffect(() => {
    setCurrentCornerId(cornerId);
  }, [cornerId, setCurrentCornerId]);

  const isLessonTp = useMemo(() => {
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

  const saveData = useCallback(async () => {
    if (!learningLogCookieData || !pageId || totalPages.length < 1) {
      return;
    }
    if (courseId && cornerId && lessonId && pageId) {
      const parsingCourseId = parseInt(courseId);
      const parsingPageId = parseInt(pageId);
      const pasingUno = parseInt(learningLogCookieData.uno);
      const parsingApplIdId = parseInt(learningLogCookieData.applId);
      const parsingCornerId = parseInt(cornerId);
      const parsingSubjectId = parseInt(learningLogCookieData.subjectId);
      const parsingLessonId = parseInt(lessonId);
      try {
        await saveLmsData({
          uno: pasingUno,
          applId: parsingApplIdId,
          courseId: parsingCourseId,
          subjectId: parsingSubjectId,
          cornerId: parsingCornerId,
          lessonId: parsingLessonId,
          pageId: parsingPageId,
          progressRate: currentProgress(pageId),
          envlCatgYn: isLessonTp,
          complYn: currentProgress(pageId) === 100 ? "Y" : "N",
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [
    courseId,
    cornerId,
    lessonId,
    pageId,
    currentProgress,
    isLessonTp,
    learningLogCookieData,
    totalPages,
  ]);

  useDebounced(saveData, 200);

  const layout = useMemo(() => {
    if (!lessonMetaData) return;
    if (!cornerMetaData) return;
    // NOTE ms 문제 템플릿일 경우 레이아웃 호출
    if (lessonMetaData.lessonTpCd.toString() !== "10") {
      // todo ms lcms에서 데이터 받아와서 데이터 구성 필요
      const quizData: QuizData[] = pages.map((page, pageIndex) => {
        return {
          id: pageIndex + 1,
          state: "",
          isCorrect: false,
        };
      });

      LocalStorage.setItem("pageData", quizData);
      return (
        <QuestionLayout
          pages={pages}
          lessonMetaData={lessonMetaData}
          cornerMetaData={cornerMetaData}
          totalPages={totalPages}
        />
      );
    } else {
      return (
        <ContentsLayout
          corners={corners}
          lessonMetaData={lessonMetaData}
          cornerMetaData={cornerMetaData}
          pages={pages}
          totalPages={totalPages}
        />
      );
    }
  }, [cornerMetaData, lessonMetaData, corners, pages, totalPages]);

  return <>{layout}</>;
};

export default Layout;
