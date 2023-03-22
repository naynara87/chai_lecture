import IconDictionary from "chai-ui-v2/dist/assets/images/icon/icon_dictionary.svg";
import AddButton from "../atoms/AddButton";
import styled from "@emotion/styled";

import {
  colorPalette,
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  Content,
  ModalBase,
  WordsCarouselContentData,
} from "chai-ui-v2";
import React from "react";

import { Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import UrlInputWrapper from "./UrlInputWrapper";

export interface ModalWordsCarouselProps {
  content: Content;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setText: (index: number, text: string) => void;
  focusTextEditor: (index: number) => (e: React.MouseEvent) => void;
  isTextEditorFocused: (index: number) => boolean;
  slideContents: any;
  addCard: any;
  handleSubmitSoundEffect: (url: string) => void;
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

const ModalIntroductionContainer = styled.div`
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
  content,
  isModalOpen,
  setIsModalOpen,
  setText,
  focusTextEditor,
  isTextEditorFocused,
  slideContents,
  addCard,
  handleSubmitSoundEffect,
}: ModalWordsCarouselProps) => {
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClose = () => {
    setIsModalOpen(true);
  };

  const thisContent = content as WordsCarouselContentData;

  return (
    <WordsCarouselWrapper>
      <img src={IconDictionary} alt="" />
      {/* TODO: 단어장 수정 클릭 시  ModalWordsCarousel 오픈*/}
      <AddButton onClick={handleModalOpen}>단어장 수정</AddButton>

      <ModalBase open={isModalOpen} onClose={handleClose}>
        <ModalInner>
          <ModalIntroductionContainer>
            <img src={IconDictionary} alt="" className="icon-dictionary" />
            {/* TODO: lsh 단어카드 추가 버튼 클릭 시 WordsCardWrapper swiper캐러셀 추가 */}
            {/* NOTE: lsh 기능구현 되면 이후에 swiper 삽입하겠습니다 */}
            <AddButton onClick={addCard}>단어카드 추가</AddButton>
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
              >
                {slideContents}
              </Swiper>
            </SwiperWrapper>

            <UrlInputWrapper
              typeText="효과음"
              onSubmit={handleSubmitSoundEffect}
            />
            <div className="btns-wrap">
              {/* TODO: lsh 닫기버튼 클릭 시 모달창 닫기 */}
              <ComponentButtonRadiBorderMain
                text="닫기"
                onClickBtn={handleModalOpen}
              />
              {/* TODO: lsh 닫기버튼 클릭 시 입력한 데이터 저장 */}
              <ComponentButtonRadiFillMain
                text="저장"
                onClickBtn={handleModalOpen}
              />
            </div>
          </ModalIntroductionContainer>
        </ModalInner>
      </ModalBase>
    </WordsCarouselWrapper>
  );
};

export default WordsCarousel;
