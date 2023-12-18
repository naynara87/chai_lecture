import React, { useEffect, useMemo, useState } from "react";
import ImgVocaComponent from "../atoms/ImgVocaComponent";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import { useGlobalAudio, WordsCarouselContentData } from "../../core";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HtmlContentComponent } from "../atoms";
import AudioComponent from "../contents/AudioComponent";
import ModalBase from "./ModalBase";
import ArrowButton from "../atoms/Button/ArrowButton";

interface LayoutModalVocaProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contentsData: WordsCarouselContentData["data"];
}

const LayoutModalVoca = ({
  isModalOpen,
  setIsModalOpen,
  contentsData,
}: LayoutModalVocaProps) => {
  const { handleAudioReset } = useGlobalAudio();

  const handleClose = () => {
    setIsModalOpen(false);
    handleAudioReset();
  };

  const [isSwiperInitiated, setIsSwiperInitiated] = useState(false);

  useEffect(() => {
    return () => {
      setIsSwiperInitiated(false);
    };
  });

  const slideContents = useMemo(() => {
    return contentsData.words.map((word, wordIndex) => {
      return (
        <SwiperSlide key={wordIndex}>
          <div className="voca-slide-card">
            <div className="base-conts">
              <div className="voca-wrap">
                <HtmlContentComponent html={word.word} />
              </div>
              {/* <IconPlayButton active={true} /> */}
              {word.audio?.src && (
                <AudioComponent
                  contents={{
                    id: "",
                    type: "audio",
                    data: {
                      src: word.audio?.src,
                    },
                  }}
                />
              )}
            </div>
          </div>
        </SwiperSlide>
      );
    });
  }, [contentsData]);

  const handleClickNextSlide = () => {
    const hiddenNextButton = window.document.querySelector(
      ".modal .swiper-button-next",
    ) as HTMLDivElement;
    hiddenNextButton?.click();
  };

  const handleClickPrevSlide = () => {
    const hiddenPrevButton = window.document.querySelector(
      ".modal .swiper-button-prev",
    ) as HTMLDivElement;
    hiddenPrevButton?.click();
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const showPrevButton = useMemo(() => {
    return currentSlideIndex > 0;
  }, [currentSlideIndex]);

  const showNextButton = useMemo(() => {
    return currentSlideIndex < contentsData.words.length - 1;
  }, [currentSlideIndex, contentsData]);

  return (
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <div className="modal active">
        <div className="modal-container base-modal voca-modal">
          <div className="base-wrapper">
            <button className="btn-close-modal" onClick={handleClose}>
              <img src={IconClose} alt="닫기" />
            </button>
            <div className="base-ttl">
              <div className="profile-img-wrap">
                <ImgVocaComponent />
              </div>
            </div>
            <div className="page">
              <div className="voca-modal-swiper-wrapper">
                {showPrevButton && (
                  <ArrowButton
                    direction="left"
                    className="arrow-button-left"
                    iconClassName="arrow-icons"
                    onClickBtn={handleClickPrevSlide}
                  />
                )}
                {showNextButton && (
                  <ArrowButton
                    direction="right"
                    className="arrow-button-right"
                    iconClassName="arrow-icons"
                    onClickBtn={handleClickNextSlide}
                  />
                )}
                <Swiper
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
                  onSlideChange={(swiper) => {
                    setCurrentSlideIndex(swiper.activeIndex);
                    if (!isSwiperInitiated) return;
                    handleAudioReset();
                  }}
                  onInit={() => {
                    setIsSwiperInitiated(true);
                  }}
                >
                  {slideContents}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModalVoca;
