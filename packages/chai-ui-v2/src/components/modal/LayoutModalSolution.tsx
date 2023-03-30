import styled from "@emotion/styled";
import React, { useCallback, useMemo } from "react";
import { colorPalette } from "../../assets";
import ComponentButtonRadiBorderMain from "../atoms/ComponentButtonRadiBorderMain";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import CharacterProfile from "../../assets/images/img/cha_profile01.png";
import { QuizPopupModalContentData } from "../../core";
import { HtmlContentComponent } from "../atoms";
import ModalBase from "./ModalBase";

// 임의 컬러. 대교측에서 색 변경 요청하여 230217 회의 이후 정해질 예정
// const RightColor = "#5BD37D";
// const WrongColor = "#EC5757";
// const TextColor = "#222222";

const ModalBaseTitle = styled.div`
  .ttl {
    /* NOTE: 오답일땐 오답 컬러, 정답일 땐 정답 컬러 */
    color: ${colorPalette.black};
  }
`;

const ModalBaseContents = styled.div`
  /* NOTE: dec 의 height 가 36.3333333333vh(436px을 vh로 변경)이상일 때 추가됨 */
  align-items: flex-start;

  ~ .btns-wrap {
    width: 100%;
  }
`;

interface LayoutModalSolutionProps {
  contents: QuizPopupModalContentData;
  isCorrect: boolean;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickModalCloseBtnCallback: () => void;
  handleClickModalVideoBtnCallback: () => void;
}

const LayoutModalSolution = ({
  isModalOpen,
  setIsModalOpen,
  contents,
  isCorrect,
  handleClickModalCloseBtnCallback,
  handleClickModalVideoBtnCallback,
}: LayoutModalSolutionProps) => {
  const handleClose = useCallback(() => {
    setIsModalOpen(false);
    handleClickModalCloseBtnCallback();
  }, [setIsModalOpen, handleClickModalCloseBtnCallback]);

  const handleVideoBtnClick = useCallback(() => {
    handleClickModalVideoBtnCallback();
  }, [handleClickModalVideoBtnCallback]);

  const buttons = useMemo(() => {
    if (isCorrect) {
      return (
        <>
          <ComponentButtonRadiBorderMain
            text="동영상 설명 보기"
            onClickBtn={handleVideoBtnClick}
          />
          <ComponentButtonRadiFillMain text="확인" onClickBtn={handleClose} />
        </>
      );
    }
    return (
      <ComponentButtonRadiFillMain
        text="동영상 설명 보기"
        onClickBtn={handleVideoBtnClick}
      />
    );
  }, [isCorrect, handleClose, handleVideoBtnClick]);

  const modalCharacter = useMemo(() => {
    if (isCorrect) {
      return contents.data.correct.character.src ?? CharacterProfile;
    }
    return contents.data.incorrect.character.src ?? CharacterProfile;
  }, [isCorrect, contents.data]);

  return (
    // NOTE: 설명 - active가 되면 보임
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <div className="modal active">
        <div className="modal-container base-modal">
          <div className="base-wrapper">
            {/* 제목영역 */}
            <ModalBaseTitle className="base-ttl">
              <div className="profile-img-wrap">
                <img src={modalCharacter} alt="프로필" />
              </div>
              <div className="txt-wrap">
                {/* 간지 */}
                <div className="ttl">
                  <HtmlContentComponent
                    html={
                      isCorrect
                        ? contents.data.correct.title
                        : contents.data.incorrect.title
                    }
                  />
                </div>
                <div className="txt">
                  <HtmlContentComponent
                    html={
                      isCorrect
                        ? contents.data.correct.sub
                        : contents.data.incorrect.sub
                    }
                  />
                </div>
              </div>
            </ModalBaseTitle>
            {/* 내용영역 */}
            <ModalBaseContents className="base-conts">
              <div className="dec">
                <HtmlContentComponent
                  html={
                    isCorrect
                      ? contents.data.correct.description
                      : contents.data.incorrect.description
                  }
                />
              </div>
            </ModalBaseContents>

            {/* NOTE: 설명 - 버튼이 하나만 들어갈 수도 있음 */}
            <div className="btns-wrap">{buttons}</div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModalSolution;
