import { LocalStorage, Page, QuizData } from "chai-ui-v2";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

interface ComponentProblemPaginationProps {
  pages: Page[];
  onClickPagination: (pageIndex: number) => void;
}

const ComponentProblemPagination = ({
  pages,
  onClickPagination,
}: ComponentProblemPaginationProps) => {
  /* TODO: 설명 - 열면 클래스 active 추가, 문제풀면 end 추가 */

  const { pageId } = useParams();
  const pagination = useMemo(() => {
    const questionDatas = LocalStorage.getItem("pageData") as QuizData[];
    return pages.map((page, pageIndex) => {
      return (
        <button
          className={`problem-pagination ${
            questionDatas ? questionDatas[pageIndex].state : ""
          } ${(pageIndex + 1).toString() === pageId ? "active" : ""} `}
          key={pageIndex}
          onClick={() => onClickPagination(pageIndex)}
        >
          {pageIndex + 1}
        </button>
      );
    });
  }, [pages, onClickPagination, pageId]);

  return (
    <div className="problem-top-button-wrapper pagination-wrapper">
      {pagination}
    </div>
  );
};

export default ComponentProblemPagination;
