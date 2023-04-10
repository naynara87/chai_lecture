import styled from "@emotion/styled";

import React, { useMemo } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  MultiPage,
  PageProps,
  useGlobalAudio,
  useTemplateMapper,
} from "../../core";
import useIntroductionModal from "../../core/hooks/useIntroductionModal";

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
  const { introduction } = useIntroductionModal({ page: multiPageData });

  const { handleAudioReset } = useGlobalAudio();

  const pages = useMemo(() => {
    if (!multiPageData) return;
    return multiPageData.data.map((multiPage) => {
      return (
        <SwiperSlide key={multiPage.id}>
          {getTemplateComponent(multiPage.type, multiPage)}
        </SwiperSlide>
      );
    });
  }, [multiPageData, getTemplateComponent]);

  return (
    <SwiperWrapper key={multiPageData.id}>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 4,
          clickable: true,
        }}
        navigation
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides
        onSlideChange={handleAudioReset}
      >
        {pages}
      </Swiper>
      {introduction}
    </SwiperWrapper>
  );
};

export default LayoutMultiPage;
