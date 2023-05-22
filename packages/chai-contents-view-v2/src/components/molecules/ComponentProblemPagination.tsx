import { ID, LocalStorage, QuizData } from "chai-ui-v2";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "@emotion/styled";

interface ComponentProblemPaginationProps {
  totalPages: ID[];
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
  totalPages,
  onClickPagination,
}: ComponentProblemPaginationProps) => {
  const { pageId } = useParams();
  const pagination = useMemo(() => {
    const questionDatas = LocalStorage.getItem("pageData") as QuizData[];
    return totalPages.map((page, pageIndex) => {
      return (
        <SwiperSlide key={pageIndex}>
          <button
            className={`problem-pagination ${
              questionDatas ? questionDatas[pageIndex].state : ""
            } ${page.toString() === pageId ? "active" : ""} `}
            key={pageIndex}
            onClick={() => {
              onClickPagination(pageIndex);
            }}
          >
            {pageIndex + 1}
          </button>
        </SwiperSlide>
      );
    });
  }, [totalPages, onClickPagination, pageId]);

  return (
    <SwiperWrapper>
      <Swiper
        loop={false}
        pagination={false}
        slidesPerView={20}
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
