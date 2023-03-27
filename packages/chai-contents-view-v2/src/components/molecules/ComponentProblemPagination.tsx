import { LocalStorage, Page, QuizData } from "chai-ui-v2";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "@emotion/styled";

interface ComponentProblemPaginationProps {
  pages: Page[];
  onClickPagination: (pageIndex: number) => void;
}

const SwiperWrapper = styled.div`
  position: relative;

  .swiper-wrapper {
    padding: 14px 0;
  }
  .swiper-slide:not(.swiper-slide-active) {
    opacity: 1;
  }
`;

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
        <SwiperSlide key={pageIndex}>
          <button
            className={`problem-pagination ${
              questionDatas ? questionDatas[pageIndex].state : ""
            } ${(pageIndex + 1).toString() === pageId ? "active" : ""} `}
            key={pageIndex}
            onClick={() => onClickPagination(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        </SwiperSlide>
      );
    });
  }, [pages, onClickPagination, pageId]);

  return (
    <SwiperWrapper>
      <Swiper
        loop={false}
        pagination={false}
        spaceBetween={16}
        slidesPerView={18}
        slidesPerGroup={1}
        scrollbar={{ draggable: true }}
        className="problem-top-button-wrapper pagination-wrapper"
      >
        {pagination}
      </Swiper>
    </SwiperWrapper>
  );
};

export default ComponentProblemPagination;
