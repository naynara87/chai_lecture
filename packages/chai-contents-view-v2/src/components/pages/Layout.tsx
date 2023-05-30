import {
  // getCookie,
  // InitialAppData,
  LocalStorage,
  QuizData,
  // saveLmsData,
  // useDebounced,
  useXapi,
  xapiActivityState,
} from "chai-ui-v2";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useCorner from "../../hooks/useCorner";
import useLesson from "../../hooks/useLesson";
// import useProgressRate from "../../hooks/useProgressRate";
import { currentCornerIdState } from "../../state/currentCornerId";
import ContentsLayout from "./ContentsLayout";
import QuestionLayout from "./QuestionLayout";
import { getPageUrl } from "../../util/url";

const Layout = () => {
  const { courseId, lessonId, cornerId, pageId } = useParams(); // 이게 나중 실행됨
  // const learningLogCookieData = getCookie<InitialAppData>("bubble-player");
  const { lessonMetaData, corners, totalPages } = useLesson(lessonId);
  const { pages, cornerMetaData } = useCorner(cornerId, lessonId); // 이게 먼저 실행되고
  const [isInitialActivityState, setIsInitialActivityState] = useState(false);
  const isStartedQuiz = useRef(false);
  const isXapiInitialize = useRef(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const { xapiInitialize, initialActivityState } = useXapi();

  const [, setCurrentCornerId] = useRecoilState(currentCornerIdState);
  const [xapiActivity] = useRecoilState(xapiActivityState);

  useEffect(() => {
    if (isXapiInitialize.current) return;
    if (totalPages.length < 1) return;
    if (!lessonMetaData || !cornerMetaData || !pageId) return;

    if (state?.isRestartedQuiz) {
      isXapiInitialize.current = true;
      return;
    }
    if (courseId && lessonId) {
      const loadActivityState = xapiInitialize(courseId, lessonId, totalPages);

      isXapiInitialize.current = true;

      if (loadActivityState || isInitialActivityState) return;
      initialActivityState(
        lessonMetaData,
        cornerMetaData,
        corners,
        totalPages,
        pageId,
      );
      setIsInitialActivityState(true);
    }
  }, [
    xapiInitialize,
    courseId,
    lessonId,
    totalPages,
    isXapiInitialize,
    state,
    cornerMetaData,
    lessonMetaData,
    initialActivityState,
    corners,
    pageId,
    isInitialActivityState,
  ]);

  useEffect(() => {
    setCurrentCornerId(cornerId);
  }, [cornerId, setCurrentCornerId]);

  // const isLessonTp = useMemo(() => {
  //   if (lessonMetaData?.lessonTpCd) {
  //     if (parseInt(lessonMetaData.lessonTpCd) === 10) {
  //       return "N";
  //     } else {
  //       return "Y";
  //     }
  //   } else {
  //     return "N";
  //   }
  // }, [lessonMetaData?.lessonTpCd]);

  // const saveData = useCallback(async () => {
  //   if (!learningLogCookieData || !pageId || totalPages.length < 1) {
  //     return;
  //   }
  //   if (courseId && cornerId && lessonId && pageId) {
  //     const parsingCourseId = parseInt(learningLogCookieData.courseId);
  //     const parsingLessonId = parseInt(learningLogCookieData.lessonId);
  //     const pasingUno = parseInt(learningLogCookieData.uno);
  //     const parsingApplIdId = parseInt(learningLogCookieData.applId);
  //     const parsingSubjectId = parseInt(learningLogCookieData.subjectId);
  //     try {
  //       await saveLmsData({
  //         uno: pasingUno, // user id 쿠키에서 받아옴
  //         applId: parsingApplIdId, // 신청 id 쿠키에서 받아옴
  //         courseId: parsingCourseId, // 과정 id 쿠키에서 받아옴
  //         contsId: parsingSubjectId, // 과목 id 쿠키에서 받아옴
  //         cornerId: cornerId, // 코너 id useParam에서 받음
  //         lessonId: parsingLessonId, // 레슨 id 쿠키에서 받아옴
  //         pageId: pageId, // 페이지 id useParam에서 받음
  //         progressRate: currentProgress(pageId), // 학습진도율 현재는 현재페이지의 index에 따라 계산중
  //         envlCatgYn: isLessonTp, // 문제레슨인지 콘텐츠레슨인지 구분
  //         complYn: currentProgress(pageId) === 100 ? "Y" : "N", // 현재페이지가 마지막페이지이면 Y 아니면 N
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }, [
  //   courseId,
  //   cornerId,
  //   lessonId,
  //   pageId,
  //   currentProgress,
  //   isLessonTp,
  //   learningLogCookieData,
  //   totalPages,
  // ]);

  // useDebounced(saveData, 200);

  const toScorePage = useCallback(() => {
    if (!xapiActivity) return;
    if (!lessonMetaData) return;
    if (!xapiActivity.correct_data || !xapiActivity.incorrect_data) return;
    if (
      xapiActivity.correct_data.length > 0 ||
      xapiActivity.incorrect_data.length > 0
    ) {
      const quizData: QuizData[] = [];
      pages.forEach((page, pageIndex) => {
        quizData.push({
          id: pageIndex + 1,
          state: "end",
          isCorrect: xapiActivity.correct_data.find(
            (data) => data.page_id.toString() === page.id.toString(),
          )
            ? true
            : false,
          answer: "",
          pageId: page.id.toString(),
          pageAreaCode: page.pageAreaType,
        });
      });

      LocalStorage.setItem("pageData", quizData);

      if (courseId && lessonId && cornerId) {
        navigate(getPageUrl(courseId, lessonId, cornerId, "score"), {
          state: {
            lessonName: lessonMetaData.name,
            solvingTime: xapiActivity.time,
            pages,
            totalPages,
          },
        });
      }
    }
  }, [
    pages,
    xapiActivity,
    cornerId,
    courseId,
    lessonId,
    lessonMetaData,
    navigate,
    totalPages,
  ]);

  const [deletingQuestionsData, setDeletingQuestionsData] =
    useState<boolean>(false);

  useEffect(() => {
    if (!lessonMetaData) return;
    if (!cornerMetaData) return;
    if (lessonMetaData.lessonTpCd.toString() === "10") return;
    if (isStartedQuiz.current || !xapiActivity) {
      return;
    }
    if (
      !state?.isRestartedQuiz &&
      (xapiActivity?.correct_data.length > 0 ||
        xapiActivity?.incorrect_data.length > 0)
    ) {
      isStartedQuiz.current = false;
      toScorePage(); // 채점 페이지로 이동
      setDeletingQuestionsData(false);
      return;
    } else {
      isStartedQuiz.current = true;
      setDeletingQuestionsData(true);
      return;
    }
  }, [state, xapiActivity, toScorePage, lessonMetaData, cornerMetaData]);

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
          answer: "",
          pageId: page.id.toString(),
          pageAreaCode: page.pageAreaType,
        };
      });

      LocalStorage.setItem("pageData", quizData);
      return (
        <QuestionLayout
          pages={pages}
          corners={corners}
          lessonMetaData={lessonMetaData}
          cornerMetaData={cornerMetaData}
          totalPages={totalPages}
          deletingQuestionsData={deletingQuestionsData}
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
  }, [
    cornerMetaData,
    lessonMetaData,
    corners,
    pages,
    totalPages,
    deletingQuestionsData,
  ]);

  return <>{layout}</>;
};

export default Layout;
