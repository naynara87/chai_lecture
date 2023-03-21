import styled from "@emotion/styled";

import React, { useEffect, useMemo, useState } from "react";
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
import { LayoutModalIntroduction } from "../modal";

const SwiperWrapper = styled.div`
  position: relative;
  height: 100%;
`;

interface LayoutMultiPageProps extends PageProps {}
const LayoutMultiPage = ({ page, setPageCompleted }: LayoutMultiPageProps) => {
  const multiPageData = page as MultiPage;

  const [isIntroductionModalOpen, setIsIntroductionModalOpen] = useState(false);

  const { getTemplateComponent } = useTemplateMapper({
    setPageCompleted,
  });

  const { handleAudioReset } = useGlobalAudio();

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

  useEffect(() => {
    if (page?.introduction) {
      setIsIntroductionModalOpen(true);
    }
  }, [page, setIsIntroductionModalOpen]);

  const introduction = useMemo(() => {
    if (page?.introduction) {
      return (
        <LayoutModalIntroduction
          isModalOpen={isIntroductionModalOpen}
          setIsModalOpen={setIsIntroductionModalOpen}
          introduction={page.introduction}
        />
      );
    }
  }, [page, isIntroductionModalOpen]);

  return (
    <SwiperWrapper key={multiPageData.id}>
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
        onSlideChange={handleAudioReset}
      >
        {pages}
      </Swiper>
      {introduction}
    </SwiperWrapper>
  );
};

export default LayoutMultiPage;
