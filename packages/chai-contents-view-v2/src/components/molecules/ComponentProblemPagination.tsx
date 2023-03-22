import { Page } from "chai-ui-v2";
import React, { useMemo } from "react";
import {useLocation, useParams} from 'react-router-dom';
import usePages from "../../hooks/usePages";


interface ComponentProblemPaginationProps {
  pages: Page[];
  onClickPagination: (pageIndex: number) => void;

}

const ComponentProblemPagination = ({
  pages,
  onClickPagination,
}: ComponentProblemPaginationProps) => {
  /* TODO: 설명 - 열면 클래스 active 추가, 문제풀면 end 추가 */


  const location = useLocation();
  const qustionDatas = location ? JSON.parse(location.state) : localStorage.getItem('pageData');
  const {pageId} = useParams() ;


  const pagination = useMemo(() => {
    return pages.map((page, pageIndex) => {
      return (
        <button
          className={`problem-pagination ${qustionDatas? qustionDatas[pageIndex].state : '' } ${(pageIndex+1).toString() === pageId ? 'active' : ''} `}
          key={pageIndex}
          onClick={() => onClickPagination(pageIndex)}
        >
          {pageIndex + 1}
        </button>
      );
    });
  // }, [pages, onClickPagination]);
  }, [pages, onClickPagination]);

  return (
    <div className="problem-top-button-wrapper pagination-wrapper">
      {pagination}
    </div>
  );
};

export default ComponentProblemPagination;
