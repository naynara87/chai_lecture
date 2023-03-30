// import styled from "@emotion/styled";
import React, { useMemo } from "react";
import ImgVocaComponent from "../atoms/ImgVocaComponent";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import { useGlobalAudio, WordsCarouselContentData } from "../../core";
import styled from "@emotion/styled";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HtmlContentComponent } from "../atoms";
import AudioComponent from "../contents/AudioComponent";
import ModalBase from "./ModalBase";

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
                <Swiper
                  modules={[Pagination]}
                  loop
                  pagination={{
                    dynamicBullets: false,
                    clickable: true,
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  centeredSlides
                  onSlideChange={() => handleAudioReset()}
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
