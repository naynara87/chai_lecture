import React, { useEffect, useMemo, useState } from "react";
import ImgVocaComponent from "../atoms/ImgVocaComponent";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import { useGlobalAudio, WordsCarouselContentData } from "../../core";
import styled from "@emotion/styled";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HtmlContentComponent } from "../atoms";
import AudioComponent from "../contents/AudioComponent";
import ModalBase from "./ModalBase";
import ArrowButton from "../atoms/Button/ArrowButton";
import { css } from "@emotion/react";
import { colorPalette } from "../../assets";

const Page = styled.div`
  background-color: white;
  color: black;
  width: 100%;
`;

const SlideCard = styled.div`
  background-color: #eeeeee;
  border-radius: 10px;
  color: black;
`;

const SwiperWrapper = styled.div`
  position: relative;
  bottom: 1em;

  .swiper-button-prev {
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  .swiper-button-next {
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
`;

const ArrowButtonCommonCss = css`
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 6vmin;
  height: 6vmin;
  border-radius: 50%;
  background-color: ${colorPalette.main};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6.74286px 0px rgba(88, 88, 88, 0.2);
`;

const ArrowIconCss = css`
  width: 1.8vmin;
  height: 3vmin;
`;

const ArrowButtonLeftCss = css`
  ${ArrowButtonCommonCss};
  left: 0;
  transform: translate(-50%, -50%);
`;

const ArrowButtonRightCss = css`
  ${ArrowButtonCommonCss};
  right: 0;
  transform: translate(50%, -50%);
`;

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
          <SlideCard>
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
          </SlideCard>
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
            <Page>
              <SwiperWrapper>
                {showPrevButton && (
                  <ArrowButton
                    direction="left"
                    customCss={ArrowButtonLeftCss}
                    iconCss={ArrowIconCss}
                    onClickBtn={handleClickPrevSlide}
                  />
                )}
                {showNextButton && (
                  <ArrowButton
                    direction="right"
                    customCss={ArrowButtonRightCss}
                    iconCss={ArrowIconCss}
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
              </SwiperWrapper>
            </Page>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModalVoca;
