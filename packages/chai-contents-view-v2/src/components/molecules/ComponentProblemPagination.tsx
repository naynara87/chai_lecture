import { Page } from "chai-ui-v2";
import React, { useMemo } from "react";

interface ComponentProblemPaginationProps {
  pages: Page[];
  onClickPagination: (pageIndex: number) => void;
}

const ComponentProblemPagination = ({
  pages,
  onClickPagination,
}: ComponentProblemPaginationProps) => {
  /* TODO: 설명 - 열면 클래스 active 추가, 문제풀면 end 추가 */
  const pagination = useMemo(() => {
    return pages.map((page, pageIndex) => {
      return (
        <button
          className="problem-pagination"
          onClick={() => onClickPagination(pageIndex)}
        >
          {pageIndex + 1}
        </button>
      );
    });
  }, [pages, onClickPagination]);

  return (
    <div className="problem-top-button-wrapper pagination-wrapper">
      {pagination}
    </div>
  );
};

export default ComponentProblemPagination;
