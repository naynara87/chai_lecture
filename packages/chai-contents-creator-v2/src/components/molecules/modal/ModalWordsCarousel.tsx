import styled from "@emotion/styled";
import {
  colorPalette,
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  ModalBase,
} from "chai-ui-v2";
import React from "react";
import AddButton from "../../atoms/AddButton";
import UrlInputWrapper from "../UrlInputWrapper";
import IconDictionary from "chai-ui-v2/dist/assets/images/img/img_voca.png";
import ObjectDeleteButton from "../../atoms/ObjectDeleteButton";
import IconPlay from "chai-ui-v2/dist/assets/images/icon/icon_play.svg";

export interface ModalIntroductionProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const ModalWordsCarousel = ({
  isModalOpen,
  setIsModalOpen,
}: ModalIntroductionProps) => {
  const handleClose = () => {
    setIsModalOpen(true);
  };

  return (
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <ModalInner>
        <ModalIntroductionContainer>
          <img src={IconDictionary} alt="" className="icon-dictionary" />
          {/* TODO: lsh 단어카드 추가 버튼 클릭 시 WordsCardWrapper swiper캐러셀 추가 */}
          {/* NOTE: lsh 기능구현 되면 이후에 swiper 삽입하겠습니다 */}
          <AddButton>단어카드 추가</AddButton>
          <WordsCardWrapper>
            {/* TODO: lsh ObjectDeleteButton 클릭 시 해당 swiper캐러셀 제거 */}
            <ObjectDeleteButton />
            <p className="words-card-text">텍스트 에디터 들어올 자리</p>
            <div>
              <img src={IconPlay} alt="" className="icon-play" />
              <UrlInputWrapper typeText="오디오"></UrlInputWrapper>
            </div>
          </WordsCardWrapper>

          <UrlInputWrapper typeText="효과음" />
          <div className="btns-wrap">
            {/* TODO: lsh 닫기버튼 클릭 시 모달창 닫기 */}
            <ComponentButtonRadiBorderMain text="닫기" />
            {/* TODO: lsh 닫기버튼 클릭 시 입력한 데이터 저장 */}
            <ComponentButtonRadiFillMain text="저장" />
          </div>
        </ModalIntroductionContainer>
      </ModalInner>
    </ModalBase>
  );
};

export default ModalWordsCarousel;
