import IconDictionary from "chai-ui-v2/dist/assets/images/icon/icon_dictionary.svg";
import ImgDictionary from "chai-ui-v2/dist/assets/images/img/img_voca.png";
import AddButton from "../atoms/AddButton";
import styled from "@emotion/styled";
import {
  colorPalette,
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  ModalBase,
  vh,
  WordsCarouselContentData,
} from "chai-ui-v2";
import "swiper/css";
import "swiper/css/pagination";
import UrlInputWrapper from "./UrlInputWrapper";
import { useCallback, useEffect, useState } from "react";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import TextEditorViewer from "./TextEditorViewer";
import IconPlay from "chai-ui-v2/dist/assets/images/icon/icon_play.svg";
import IconArrowRight from "chai-ui-v2/dist/assets/images/icon/icon_arrow_right_gray.svg";
import IconArrowLeft from "chai-ui-v2/dist/assets/images/icon/icon_arrow_left_gray.svg";
import useSafeKey from "../../hooks/useSafeKey";

const WordsCardWrapper = styled.div`
  overflow: auto;
  position: relative;
  max-height: ${vh(300)};
  margin-bottom: 16px;
  padding: 40px 24px 24px;
  border-radius: 8px;
  background-color: #f0f0f0;

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

  .btns-wrap {
    justify-content: flex-start;
    gap: 10px;

    .btn {
      margin-bottom: 5px;
    }
  }
`;

const SwiperWrapper = styled.div`
  position: relative;
`;

const PageButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid ${colorPalette.gray600};
  border-radius: 4px;
  appearance: none;
  outline: none;
  box-shadow: none;
  background-color: white;
  background-position: center center;
  background-size: 12px;
  background-repeat: no-repeat;

  &.btn-right {
    background-image: url(${IconArrowRight});
  }

  &.btn-left {
    background-image: url(${IconArrowLeft});
  }

  &:hover,
  &:focus {
    border-color: ${colorPalette.gray800};
  }

  &:disabled {
    opacity: 0.3;
    border-color: ${colorPalette.gray600};
    cursor: default;
  }

  span {
    overflow: hidden;
    position: absolute;
    top: -1px;
    left: -1px;
    width: 1px;
    height: 1px;
    font-size: 1px;
    color: transparent;
  }
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

  const [moving, setMoving] = useState(false);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const { addKeyByArrayLength, deleteKeyByIndex, getKeyByIndex } = useSafeKey(
    wordsCarouselData.words,
  );

  useEffect(() => {
    if (moving && wordsCarouselData.words.length) {
      setCurrentWordIndex(wordsCarouselData.words.length - 1);
      setMoving(false);
    }
  }, [wordsCarouselData.words.length, moving]);

  const getWordByIndex = useCallback(
    (wordIndex: number) => {
      const word = wordsCarouselData.words[wordIndex];
      if (!word) {
        return null;
      }
      return (
        <SlideCard key={getKeyByIndex(wordIndex)}>
          <WordsCardWrapper>
            <ObjectDeleteButton
              onClick={() => {
                deleteImage(wordIndex);
                deleteKeyByIndex(wordIndex);
                if (currentWordIndex !== 0) {
                  setCurrentWordIndex((prev) => prev - 1);
                }
              }}
            />

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
      );
    },
    [
      wordsCarouselData.words,
      isTextEditorFocused,
      focusTextEditor,
      deleteImage,
      setAudioUrl,
      setText,
      deleteKeyByIndex,
      getKeyByIndex,
      currentWordIndex,
    ],
  );

  return (
    <WordsCarouselWrapper>
      <img src={IconDictionary} alt="" />
      <AddButton onClick={handleModalOpen}>단어장 수정</AddButton>
      <ModalBase open={isModalOpen} onClose={handleClose}>
        <ModalInner>
          <ModalVocaContainer>
            <img src={ImgDictionary} alt="" className="icon-dictionary" />
            <div className="btns-wrap">
              <AddButton
                onClick={() => {
                  addCard();
                  setMoving(true);
                  addKeyByArrayLength(wordsCarouselData.words.length);
                }}
              >
                단어카드 추가
              </AddButton>
              <PageButton
                className="btn btn-left"
                disabled={currentWordIndex === 0}
                onClick={() => {
                  if (currentWordIndex === 0) {
                    return;
                  }
                  setCurrentWordIndex(currentWordIndex - 1);
                }}
              >
                <span>이전</span>
              </PageButton>
              <PageButton
                className="btn btn-right"
                disabled={
                  currentWordIndex === wordsCarouselData.words.length - 1
                }
                onClick={() => {
                  if (currentWordIndex === wordsCarouselData.words.length - 1) {
                    return;
                  }
                  setCurrentWordIndex(currentWordIndex + 1);
                }}
              >
                <span>다음</span>
              </PageButton>
            </div>
            <SwiperWrapper>{getWordByIndex(currentWordIndex)}</SwiperWrapper>

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
