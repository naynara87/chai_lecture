import { Page, TemplateQuestion, TemplateQuestionData } from "chai-ui-v2";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePages from "../../hooks/usePages";
import { getPageUrl } from "../../util/url";
import ComponentProblemPagination from "../molecules/ComponentProblemPagination";
import LayoutQuestionHeader from "../molecules/LayoutQuestionHeader";

interface QuestionLayoutProps {
  pages: Page[];
}

const QuestionLayout = ({ pages }: QuestionLayoutProps) => {
  const [, setIsPageCompleted] = useState(false);

  const { courseId, cornerId, lessonId, pageId } = useParams();

  const navigate = useNavigate();
  const { currentPage, pageIds, currentPageIndex } = usePages({
    pages,
    pageId,
  });

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  const handleClickPagination = (pageIndex: number) => {
    if (currentPageIndex === undefined) return;
    if (!pageIds) return;
    if (cornerId && courseId && lessonId && pageId) {
      navigate(getPageUrl(courseId, lessonId, cornerId, pageIds[pageIndex]));
    }
  };

  return (
    <>
      <LayoutQuestionHeader />
      <main className="cai-main problem-main">
        <ComponentProblemPagination
          pages={pages}
          onClickPagination={handleClickPagination}
        />
        {currentPage?.data && (
          <TemplateQuestion
            template={currentPage.data as TemplateQuestionData}
            setPageCompleted={setPageCompleted}
          />
        )}
      </main>
    </>
  );
};

export default QuestionLayout;
