import styled from "@emotion/styled";
import { MultiPage, PageProps, useTemplateMapper } from "chai-ui-v2";
import React, { useMemo } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperWrapper = styled.div`
  position: relative;
  height: 100%;
`;

interface LayoutMultiPageProps extends PageProps {}
const LayoutMultiPage = ({ page, setPageCompleted }: LayoutMultiPageProps) => {
  const multiPageData = page as MultiPage;

  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
  });

  const pages = useMemo(() => {
    if (!multiPageData) return;
    return multiPageData.data.map((multiPage, pageIndex) => {
      return (
        <SwiperSlide key={pageIndex}>
          {getTemplateComponent(multiPage.type, multiPage)}
        </SwiperSlide>
      );
    });
  }, [multiPageData, getTemplateComponent]);

  return (
    <SwiperWrapper>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          dynamicBullets: false,
          clickable: true,
        }}
        navigation
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height: "100%" }}
      >
        {pages}
      </Swiper>
    </SwiperWrapper>
  );
};

export default LayoutMultiPage;
