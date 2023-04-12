import {
  CornerMeta,
  LessonMeta,
  ModalQuestionTemplate,
  Page,
  TemplateQuestion,
  TemplateQuestionData,
  useLessonNameMapper,
} from "chai-ui-v2";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePages from "../../hooks/usePages";
import { getPageUrl } from "../../util/url";
import ComponentProblemPagination from "../molecules/ComponentProblemPagination";
import LayoutQuestionHeader from "../molecules/LayoutQuestionHeader";

interface QuestionLayoutProps {
  pages: Page[];
  lessonMetaData: LessonMeta;
  cornerMetaData: CornerMeta;
  totalPages: (string | number)[];
}

const QuestionLayout = ({
  pages,
  lessonMetaData,
  cornerMetaData,
  totalPages,
}: QuestionLayoutProps) => {
  const [, setIsPageCompleted] = useState(false);
  const [isQuestionStartModalOpen, setIsQuestionStartModalOpen] =
    useState(false);
  const [questionSolvingTime, setQuestionSolvingTime] = useState(0);

  const questionSolvingTimer = useRef<NodeJS.Timeout | number>();

  const { courseId, cornerId, lessonId, pageId } = useParams();
  const navigate = useNavigate();
  const { currentPage, currentPageIndex } = usePages({
    pages,
    pageId,
    totalPages,
  });
  const { getLessonName } = useLessonNameMapper();

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  const handleClickPagination = (pageIndex: number) => {
    if (currentPageIndex === undefined) return;
    if (cornerId && courseId && lessonId && pageId) {
      navigate(getPageUrl(courseId, lessonId, cornerId, totalPages[pageIndex]));
    }
  };

  // TODO xapi completed 이벤트 발생부분 채점하기버튼클릭이벤트
  const handleClickCheckScore = () => {
    if (cornerId && courseId && lessonId && pageId) {
      navigate(getPageUrl(courseId, lessonId, cornerId, "score"), {
        state: {
          lessonName: getLessonName(lessonMetaData.colorTypeCd),
          lessonType:
            lessonMetaData.lessonTpCd.toString() === "20"
              ? "연습문제"
              : "종합문제",
          solvingTime: questionSolvingTime,
          pages,
        },
      });
    }
  };

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
    <>
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
        {currentPage?.data && (
          <TemplateQuestion
            template={currentPage.data as TemplateQuestionData}
            setPageCompleted={setPageCompleted}
            handleClickCheckScore={handleClickCheckScore}
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
    </>
  );
};

export default QuestionLayout;
