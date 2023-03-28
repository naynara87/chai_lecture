import IconDictionary from "chai-ui-v2/dist/assets/images/icon/icon_dictionary.svg";
import AddButton from "../atoms/AddButton";
import styled from "@emotion/styled";
import {
  colorPalette,
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  ModalBase,
  WordsCarouselContentData,
} from "chai-ui-v2";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import UrlInputWrapper from "./UrlInputWrapper";
import { useMemo } from "react";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import TextEditorViewer from "./TextEditorViewer";
import IconPlay from "chai-ui-v2/dist/assets/images/icon/icon_play.svg";

const WordsCardWrapper = styled.div`
  border-radius: 8px;
  padding: 40px 24px 24px;
  background-color: #f0f0f0;
  margin-bottom: 16px;
  position: relative;
  .btn-delete {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .words-card-text {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  .icon-play {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
  }
`;

const SlideCard = styled.div`
  background-color: #eeeeee;
  border-radius: 10px;
  color: black;
`;
export interface ModalWordsCarouselProps {
  wordsCarouselData: WordsCarouselContentData["data"];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setText: (index: number) => (text: string) => void;
  focusTextEditor: (index: number) => (e: React.MouseEvent) => void;
  isTextEditorFocused: (index: number) => boolean;
  addCard: () => void;
  setSoundEffect: (url: string) => void;
  setAudioUrl: (index: number) => (url: string) => void;
  deleteImage: (index: number) => void;
}

const WordsCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  & > img {
    margin-bottom: 8px;
    box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
    border-radius: 8px;
    width: 40px;
    height: 40px;
  }
  .btn-text {
    width: 80px;
    border-radius: 50px;
    font-size: 10px;
    font-weight: 500;
    white-space: nowrap;
    padding: 4px 16px;
    height: unset;
    color: #7686d4;
    border: 1px solid #dbe1ff;
  }
`;

const ModalInner = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 416px;
  padding: 24px;
  border-radius: 30px;
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);

  .swiper-pagination {
    position: relative;
    top: 0;
    bottom: 0;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    margin: 0 vw(9) !important;
    background-color: ${colorPalette.gray600};
    opacity: 1;
    line-height: 1;
    border-radius: 50px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${colorPalette.gray700};
    width: 16px;
  }
`;

const ModalVocaContainer = styled.div`
  display: flex;
  flex-direction: column;
  .icon-dictionary {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
  .btn-radi-border-main,
  .btn-radi-fill-main {
    width: 180px;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    font-weight: 700;
    min-width: unset;
    margin-top: 8px;
  }
`;

const SwiperWrapper = styled.div`
  position: relative;
`;

const WordsCarousel = ({
  isModalOpen,
  setIsModalOpen,
  addCard,
  setSoundEffect,
  wordsCarouselData,
  setAudioUrl,
  focusTextEditor,
  isTextEditorFocused,
  setText,
  deleteImage,
}: ModalWordsCarouselProps) => {
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const slideContents = useMemo(() => {
    return wordsCarouselData.words.map((word, wordIndex) => {
      return (
        <SwiperSlide key={wordIndex}>
          <SlideCard>
            <WordsCardWrapper>
              {wordsCarouselData.words.length > 1 && (
                <ObjectDeleteButton
                  onClick={() => {
                    deleteImage(wordIndex);
                  }}
                />
              )}
              <div
                onClick={focusTextEditor(wordIndex)}
                className="words-card-text"
              >
                <TextEditorViewer
                  isFocused={isTextEditorFocused(wordIndex)}
                  text={word.word ?? ""}
                  setText={setText(wordIndex)}
                  defaultText={
                    <p className="caption-text">텍스트를 입력해주세요</p>
                  }
                />
              </div>
              <div>
                <img src={IconPlay} alt="" className="icon-play" />
                <UrlInputWrapper
                  typeText="오디오"
                  onSubmit={setAudioUrl(wordIndex)}
                  defaultText={word.audio?.src}
                ></UrlInputWrapper>
              </div>
            </WordsCardWrapper>
          </SlideCard>
        </SwiperSlide>
      );
    });
  }, [
    isTextEditorFocused,
    setText,
    focusTextEditor,
    setAudioUrl,
    wordsCarouselData,
    deleteImage,
  ]);

  return (
    <WordsCarouselWrapper>
      <img src={IconDictionary} alt="" />
      <AddButton onClick={handleModalOpen}>단어장 수정</AddButton>
      <ModalBase open={isModalOpen} onClose={handleClose}>
        <ModalInner>
          <ModalVocaContainer>
            <img src={IconDictionary} alt="" className="icon-dictionary" />
            <AddButton onClick={addCard}>단어카드 추가</AddButton>
            <SwiperWrapper>
              <Swiper
                modules={[Pagination]}
                loop={false}
                pagination={{
                  dynamicBullets: false,
                  clickable: true,
                }}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides
              >
                {slideContents}
              </Swiper>
            </SwiperWrapper>

            <UrlInputWrapper
              typeText="효과음"
              onSubmit={setSoundEffect}
              defaultText={wordsCarouselData.soundEffect?.src}
            />
            <div className="btns-wrap">
              <ComponentButtonRadiBorderMain
                text="닫기"
                onClickBtn={handleClose}
              />
              <ComponentButtonRadiFillMain
                text="저장"
                onClickBtn={handleClose}
              />
            </div>
          </ModalVocaContainer>
        </ModalInner>
      </ModalBase>
    </WordsCarouselWrapper>
  );
};

export default WordsCarousel;
