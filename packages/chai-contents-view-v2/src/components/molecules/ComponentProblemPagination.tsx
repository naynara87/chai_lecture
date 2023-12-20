import { ID, LocalStorage, QuizData } from "chai-ui-v2";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface ComponentProblemPaginationProps {
  totalPages: ID[];
  onClickPagination: (pageIndex: number) => void;
}

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
    <div className="swiper-position-3">
      <Swiper
        loop={false}
        pagination={false}
        slidesPerView={10}
        spaceBetween={0}
        slidesPerGroup={1}
        scrollbar={{ draggable: true }}
        breakpoints={{
          600: {
            slidesPerView: 10,
          },
          1024: {
            slidesPerView: 20,
          },
          1920: {
            slidesPerView: 20,
          },
        }}
        className="problem-top-button-wrapper pagination-wrapper"
      >
        {pagination}
      </Swiper>
    </div>
  );
};

export default ComponentProblemPagination;
