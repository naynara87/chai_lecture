import {
  CornerListData,
  CornerMeta,
  currentPageState,
  deleteQuestion,
  getCookie,
  InitialAppData,
  LessonMeta,
  ModalQuestionTemplate,
  Page,
  TemplateQuestion,
  TemplateQuestionData,
  useLessonNameMapper,
  useXapi,
} from "chai-ui-v2";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import usePages from "../../hooks/usePages";
import { currentCornerIdState } from "../../state/currentCornerId";
import { getPageUrl } from "../../util/url";
import ComponentProblemPagination from "../molecules/ComponentProblemPagination";
import LayoutQuestionHeader from "../molecules/LayoutQuestionHeader";

interface QuestionLayoutProps {
  pages: Page[];
  lessonMetaData: LessonMeta;
  cornerMetaData: CornerMeta;
  totalPages: (string | number)[];
  corners: CornerListData[];
}

const QuestionLayout = ({
  pages,
  lessonMetaData,
  cornerMetaData,
  totalPages,
  corners,
}: QuestionLayoutProps) => {
  const [, setIsPageCompleted] = useState(false);
  const [isQuestionStartModalOpen, setIsQuestionStartModalOpen] =
    useState(false);
  const [questionSolvingTime, setQuestionSolvingTime] = useState(0);
  const isSendDeletePagesData = useRef(false);
  const learningLogCookieData = getCookie<InitialAppData>("bubble-player");
  const [, setCurrentPage] = useRecoilState(currentPageState);

  const [currentCornerId] = useRecoilState(currentCornerIdState);

  const questionSolvingTimer = useRef<NodeJS.Timeout | number>();

  const { courseId, cornerId, lessonId, pageId } = useParams();
  const navigate = useNavigate();
  const { currentPage, currentPageIndex } = usePages({
    pages,
    pageId,
    totalPages,
  });
  const { getLessonName } = useLessonNameMapper();
  const { xapiProgress, xapiComplete, updateIsCorrectDataCheck } = useXapi();

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage, setCurrentPage]);

  const deleteQuestionsData = useCallback(
    async (contentIds: string[]) => {
      try {
        await deleteQuestion(contentIds, learningLogCookieData?.uid ?? "");
        isSendDeletePagesData.current = true;
      } catch (error) {
        console.log("서버 통신에 실패했습니다.");
      }
    },
    [learningLogCookieData],
  );

  useEffect(() => {
    if (isSendDeletePagesData.current) return;
    const contentIds = pages.map((page) => {
      const curPageData = page.data as TemplateQuestionData;
      if (!curPageData.contents) {
        return "0";
      }
      return curPageData.contents.id.toString();
    });
    deleteQuestionsData(contentIds);
  }, [deleteQuestionsData, pages, isSendDeletePagesData]);

  // const exitPlayer = useCallback(() => {
  //   if (!currentPage || !currentPageIndex) return;
  //   const currentCornerIndex = corners.findIndex(
  //     (corner) => corner.id.toString() === currentCornerId?.toString(),
  //   );
  //   const currentCorner = corners[currentCornerIndex];
  //   xapiSuspended(
  //     currentCorner,
  //     currentCorner,
  //     currentPage,
  //     totalPages[currentPageIndex - 1],
  //     totalPages,
  //   );
  // }, [
  //   xapiSuspended,
  //   corners,
  //   currentCornerId,
  //   currentPage,
  //   currentPageIndex,
  //   totalPages,
  // ]);

  // useUnload((event: BeforeUnloadEvent) => {
  //   exitPlayer();
  //   event.preventDefault();
  //   event.returnValue = "학습을 종료하시겠습니까?";
  //   return "학습을 종료하시겠습니까?";
  // });

  const handleClickPagination = (pageIndex: number) => {
    if (currentPageIndex === undefined) return;
    if (cornerId && courseId && lessonId && pageId && currentPage) {
      const currentCornerIndex = corners.findIndex(
        (corner) => corner.id.toString() === currentCornerId?.toString(),
      );
      const currentCorner = corners[currentCornerIndex];
      xapiProgress(
        currentCorner,
        currentCorner,
        currentPage,
        totalPages[pageIndex],
        totalPages,
      );
      navigate(getPageUrl(courseId, lessonId, cornerId, totalPages[pageIndex]));
    }
  };

  // TODO xapi completed 이벤트 발생부분 채점하기버튼클릭이벤트
  const handleClickCheckScore = () => {
    if (cornerId && courseId && lessonId && pageId && currentPage) {
      const currentCornerIndex = corners.findIndex(
        (corner) => corner.id.toString() === currentCornerId?.toString(),
      );
      const currentCorner = corners[currentCornerIndex];
      xapiComplete(
        currentCorner,
        currentCorner,
        currentPage,
        currentPage.id,
        totalPages,
      );
      navigate(getPageUrl(courseId, lessonId, cornerId, "score"), {
        state: {
          lessonName: getLessonName(lessonMetaData.colorTypeCd),
          lessonType:
            lessonMetaData.lessonTpCd.toString() === "20"
              ? "연습문제"
              : "종합문제",
          solvingTime: questionSolvingTime,
          pages,
          totalPages,
        },
      });
    }
  };

  const handleClickCheckAnswer = useCallback(
    (isCorrect: boolean) => {
      if (!currentPage) return;
      updateIsCorrectDataCheck(currentPage, isCorrect);
    },
    [currentPage, updateIsCorrectDataCheck],
  );

  useEffect(() => {
    setIsQuestionStartModalOpen(true);
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(questionSolvingTimer.current);
    };
  }, []);

  const startQuiz = useCallback(() => {
    questionSolvingTimer.current = window.setTimeout(function go() {
      setQuestionSolvingTime((prev) => prev + 1);
      questionSolvingTimer.current = setTimeout(go, 1000);
    }, 1000);
  }, []);

  const pageIdx = useMemo(() => {
    if (!pageId) return;
    return pages.findIndex((page) => page.id.toString() === pageId.toString());
  }, [pageId, pages]);

  return (
    <div className="cai-view-yahei">
      <LayoutQuestionHeader
        headerText={`${getLessonName(lessonMetaData.colorTypeCd)} ${
          lessonMetaData.lessonTpCd.toString() === "20"
            ? "연습문제"
            : "종합문제"
        }`}
        solvingTime={questionSolvingTime}
      />
      <main className="cai-main problem-main">
        <ComponentProblemPagination
          pages={pages}
          onClickPagination={handleClickPagination}
        />
        {isSendDeletePagesData && currentPage?.data && (
          <TemplateQuestion
            template={currentPage.data as TemplateQuestionData}
            setPageCompleted={setPageCompleted}
            handleClickCheckScore={handleClickCheckScore}
            handleClickCheckAnswer={handleClickCheckAnswer}
            pageIdx={pageIdx}
          />
        )}
      </main>
      <ModalQuestionTemplate
        isModalOpen={isQuestionStartModalOpen}
        setIsModalOpen={setIsQuestionStartModalOpen}
        wideModal
        quizTypeText={`${getLessonName(lessonMetaData.colorTypeCd)} ${
          lessonMetaData.lessonTpCd.toString() === "20"
            ? "연습문제"
            : "종합문제"
        }`}
        quizTotalLength={pages.length}
        onClickStart={startQuiz}
      />
    </div>
  );
};

export default QuestionLayout;
