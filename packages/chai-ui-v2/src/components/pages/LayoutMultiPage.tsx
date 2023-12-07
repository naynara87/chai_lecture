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
    <div key={multiPageData.id} className="swiper-position-2">
      <Swiper
        autoHeight={true}
        modules={[Pagination, Navigation]}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 4,
          clickable: true,
        }}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        onSlideChange={handleAudioReset}
        breakpoints={{
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
        }}
      >
        {pages}
      </Swiper>
      {introduction}
    </div>
  );
};

export default LayoutMultiPage;
