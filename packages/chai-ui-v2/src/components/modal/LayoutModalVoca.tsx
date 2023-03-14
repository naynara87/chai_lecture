// import styled from "@emotion/styled";
import React, { useMemo } from "react";
import ImgVocaComponent from "../atoms/ImgVocaComponent";
import ModalCommon from "./ModalCommon";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import { useGlobalAudio, WordsCarouselContentData } from "../../core";
import styled from "@emotion/styled";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { HtmlContentComponent } from "../atoms";
import AudioComponent from "../contents/AudioComponent";

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
    <ModalCommon open={isModalOpen} vocaModal={true} onClose={handleClose}>
      {/* 
        TODO: key설명 - 모달 닫기버튼*/}
      <button className="btn-close-modal" onClick={handleClose}>
        <img src={IconClose} alt="닫기" />
      </button>
      {/* 제목영역 */}
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
    </ModalCommon>
  );
};

export default LayoutModalVoca;
