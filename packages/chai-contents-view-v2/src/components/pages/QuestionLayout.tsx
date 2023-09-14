import {
  CornerListData,
  CornerMeta,
  currentPageState,
  deleteQuestion,
  LessonMeta,
  LocalStorage,
  ModalQuestionTemplate,
  Page,
  QuizData,
  TemplateQuestion,
  TemplateQuestionData,
  useLmsInputValue,
  usePromiseQuestionExitConfirmModal,
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
import ComponentProblemNavigation from "../molecules/ComponentProblemNavigation";

interface QuestionLayoutProps {
  pages: Page[];
  lessonMetaData: LessonMeta;
  cornerMetaData: CornerMeta;
  totalPages: (string | number)[];
  corners: CornerListData[];
  deletingQuestionsData: boolean;
}

const QuestionLayout = ({
  pages,
  lessonMetaData,
  cornerMetaData,
  totalPages,
  corners,
  deletingQuestionsData,
}: QuestionLayoutProps) => {
  const [, setIsPageCompleted] = useState(false);
  const [isQuestionStartModalOpen, setIsQuestionStartModalOpen] =
    useState(false);
  const [questionSolvingTime, setQuestionSolvingTime] = useState(0);
  const [isSendDeletePagesData, setIsSendDeletePagesData] = useState(false);
  const [iframeElement, setIframeElement] = useState<HTMLIFrameElement | null>(
    null,
  );
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();
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
  const { xapiProgress, xapiComplete, updateIsCorrectDataCheck } = useXapi();
  const { showOpenModal: showCompleteOpenModal, modalContent } =
    usePromiseQuestionExitConfirmModal();

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage, setCurrentPage]);

  const deleteQuestionsData = useCallback(
    async (contentIds: string[]) => {
      try {
        await deleteQuestion(contentIds, initialDataFromPhp?.uid ?? "");
        setIsSendDeletePagesData(true);
      } catch (error) {
        console.log("서버 통신에 실패했습니다.");
      }
    },
    [initialDataFromPhp],
  );

  useEffect(() => {
    if (isSendDeletePagesData) return;
    const contentIds = pages.map((page) => {
      const curPageData = page.data as TemplateQuestionData;
      if (!curPageData.contents) {
        return "0";
      }
      return curPageData.contents.id.toString();
    });

    // 처음에 보내지 않다가 스코어페이지로 가는게 아니라면 퀴즈 데이터 삭제 요청
    if (deletingQuestionsData) {
      deleteQuestionsData(contentIds);
    }
  }, [
    deleteQuestionsData,
    pages,
    isSendDeletePagesData,
    deletingQuestionsData,
  ]);

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

  useEffect(() => {
    if (!currentPage) return;
    const curPageIndex = pages.findIndex((page) => page.id === currentPage.id);
    const pageData = {
      ...currentPage,
      pageIndex: curPageIndex + 1,
    };

    if (iframeElement && initialDataFromPhp) {
      iframeElement.contentWindow?.postMessage(
        {
          type: "bubble-player-page-data",
          data: pageData,
        },
        "*",
      );

      iframeElement.contentWindow?.postMessage(
        {
          type: "initial-data",
          data: initialDataFromPhp,
        },
        "*",
      );
    }
  }, [currentPage, pages, iframeElement, initialDataFromPhp]);

  const currentCorner = useMemo(() => {
    const currentCornerIndex = corners.findIndex(
      (corner) => corner.id.toString() === currentCornerId?.toString(),
    );
    return corners[currentCornerIndex];
  }, [corners, currentCornerId]);

  const handleClickPagination = useCallback(
    (pageIndex: number) => {
      if (currentPageIndex === undefined) return;
      if (!totalPages[pageIndex]) return;
      if (cornerId && courseId && lessonId && pageId && currentPage) {
        xapiProgress(
          currentCorner,
          currentCorner,
          currentPage,
          totalPages[pageIndex],
          totalPages,
        );
        navigate(
          getPageUrl(courseId, lessonId, cornerId, totalPages[pageIndex]),
        );
      }
    },
    [
      cornerId,
      courseId,
      currentPage,
      currentPageIndex,
      lessonId,
      navigate,
      pageId,
      totalPages,
      xapiProgress,
      currentCorner,
    ],
  );

  const startQuiz = useCallback(() => {
    questionSolvingTimer.current = window.setTimeout(function go() {
      setQuestionSolvingTime((prev) => prev + 1);
      questionSolvingTimer.current = setTimeout(go, 1000);
    }, 1000);
  }, []);

  const quizTitle = useMemo(() => {
    return lessonMetaData.name;
    // if (
    //   lessonMetaData.colorTypeCd.toString() === "80" ||
    //   lessonMetaData.lessonTpCd.toString() !== "30"
    // ) {
    //   return lessonMetaData.name;
    // }
    // return `${lessonMetaData.colorTypeCdName} ${currentCorner.name}`;
  }, [lessonMetaData]); // [lessonMetaData, currentCorner]

  // TODO xapi completed 이벤트 발생부분 채점하기버튼클릭이벤트
  const handleClickCheckScore = useCallback(async () => {
    if (cornerId && courseId && lessonId && pageId && currentPage) {
      const quizData = LocalStorage.getItem<QuizData[]>("pageData");
      window.clearTimeout(questionSolvingTimer.current);
      if (quizData?.find((data) => data.state !== "end")) {
        const confirmResult = await showCompleteOpenModal({
          title: `풀지 않은 문제가 있어요.
          그래도 채점하시겠습니까?`,
          description: "* 풀지 않은 문제를 풀려면 해당 번호를 선택하세요.",
          leftButtonText: "취소",
          rightButtonText: "채점하기",
        });
        if (!confirmResult) {
          startQuiz();
          return;
        }
      } else {
        const confirmResult = await showCompleteOpenModal({
          title: "모든 문제를 풀었어요.",
          description: "이제 채점해 볼까요?",
          leftButtonText: "취소",
          rightButtonText: "채점하기",
        });
        if (!confirmResult) {
          startQuiz();
          return;
        }
      }
      const newXapiActivityState = updateIsCorrectDataCheck(totalPages);
      xapiComplete(
        currentCorner,
        currentCorner,
        currentPage,
        currentPage.id,
        totalPages,
        lessonMetaData.lessonTpCd,
        newXapiActivityState,
      );
      navigate(getPageUrl(courseId, lessonId, cornerId, "score"), {
        state: {
          lessonName: quizTitle,
          solvingTime: questionSolvingTime,
          pages,
          totalPages,
        },
      });
    }
  }, [
    cornerId,
    courseId,
    currentPage,
    currentCorner,
    lessonId,
    navigate,
    pageId,
    totalPages,
    lessonMetaData,
    pages,
    questionSolvingTime,
    xapiComplete,
    updateIsCorrectDataCheck,
    showCompleteOpenModal,
    startQuiz,
    quizTitle,
  ]);

  const pageIdx = useMemo(() => {
    if (!pageId) return;
    return pages.findIndex((page) => page.id.toString() === pageId.toString());
  }, [pageId, pages]);

  const handleClickCheckAnswer = useCallback(() => {
    if (!currentPage) return;
    if (pageIdx === undefined) return;
    // NOTE kjw 마지막페이지에서 다음버튼 눌렀을때 풀지않은 문제로 이동하는것으로 변경되면 주석풀면 됨.
    // const questionDatas = LocalStorage.getItem<QuizData[]>("pageData");
    // const notCompletedQuestionPage = questionDatas?.find(
    //   (questionData) => questionData.state !== "end",
    // );
    // if (notCompletedQuestionPage === undefined) {
    //   handleClickCheckScore();
    //   return;
    // }
    if (pageIdx + 1 >= totalPages.length) {
      // NOTE kjw 마지막페이지에서 다음버튼 눌렀을때 풀지않은 문제로 이동하는것으로 변경되면 주석풀고 handleClickCheckScore 제거
      handleClickCheckScore();
      // handleClickPagination(
      //   parseInt(notCompletedQuestionPage.id.toString()) - 1,
      // );
      return;
    }
    handleClickPagination(pageIdx + 1);
  }, [
    currentPage,
    pageIdx,
    handleClickPagination,
    handleClickCheckScore,
    totalPages,
  ]);

  useEffect(() => {
    setIsQuestionStartModalOpen(true);
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(questionSolvingTimer.current);
    };
  }, []);

  const handleClickLeftBtn = useCallback(() => {
    if (pageIdx === undefined) return;
    handleClickPagination(pageIdx - 1);
  }, [pageIdx, handleClickPagination]);

  const handleClickRightBtn = useCallback(() => {
    if (pageIdx === undefined) return;
    handleClickPagination(pageIdx + 1);
  }, [pageIdx, handleClickPagination]);

  return (
    <div className="cai-view-yahei">
      <LayoutQuestionHeader
        headerText={quizTitle}
        solvingTime={questionSolvingTime}
      />
      <main className="cai-main problem-main">
        <ComponentProblemPagination
          totalPages={totalPages}
          onClickPagination={handleClickPagination}
        />
        <ComponentProblemNavigation
          handleClickLeftBtn={handleClickLeftBtn}
          handleClickRightBtn={handleClickRightBtn}
        />
        {isSendDeletePagesData && currentPage?.data && (
          <TemplateQuestion
            template={currentPage.data as TemplateQuestionData}
            setPageCompleted={setPageCompleted}
            handleClickCheckScore={handleClickCheckScore}
            handleClickCheckAnswer={handleClickCheckAnswer}
            pageIdx={pageIdx}
            totalPages={totalPages}
            setIframeElement={setIframeElement}
          />
        )}
      </main>
      <ModalQuestionTemplate
        isModalOpen={isQuestionStartModalOpen}
        setIsModalOpen={setIsQuestionStartModalOpen}
        wideModal
        quizTypeText={quizTitle}
        quizTotalLength={pages.length}
        onClickStart={startQuiz}
      />
      {modalContent}
    </div>
  );
};

export default QuestionLayout;
