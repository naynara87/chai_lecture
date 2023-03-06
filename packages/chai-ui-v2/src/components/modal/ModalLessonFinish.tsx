import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import { colorPalette, vw } from "../../assets";
import ComponentNumbering from "../molecules/ComponentNumbering";

interface ModalLessonFinishProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wideModal: boolean;
}

const ModalContentsWrapper = styled.div`
  .conts-wrap:not(:first-child) {
    margin-top: ${vw(60)};
  }
`;

const ModalFinishTitle = styled.div`
  margin-bottom: ${vw(40)};
  font-size: ${vw(32)};

  > b {
    font-weight: 600;
  }

  .c-gray {
    color: ${colorPalette.gray500};
  }
`;

const ModalLessonFinish = ({
  isModalOpen,
  setIsModalOpen,
  wideModal,
}: ModalLessonFinishProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalCommon
      open={isModalOpen}
      onClose={handleClose}
      wideModal={wideModal}
    >
      <button className="btn-close-modal" onClick={handleClose}>
        <img src={IconClose} alt="닫기" />
      </button>
      <ModalContentsWrapper>
        {/* 반복될 경우 반복영역 (figma 8-학습정리-5) */}
        <div className="conts-wrap">
          <ModalFinishTitle>
            <b>{'문법1'}</b><span className="c-gray">{' | '}</span>{'능력을 나타내는 会'}
          </ModalFinishTitle>
          {/* TODO: key설명 - 내용으로 여러 text들이 들어감 */}
          <div className="modal-finish-conts">
            <ComponentNumbering />
          </div>
        </div>
        {/* end 반복될 경우 반복영역 (figma 8-학습정리-5) */}
        <div className="conts-wrap">
          <ModalFinishTitle>
            <b>{'문법2'}</b><span className="c-gray">{' | '}</span>{'운동별 동사 표현'}
          </ModalFinishTitle>
          {/* TODO: key설명 - 내용으로 여러 text들이 들어감 */}
          <div className="modal-finish-conts">
            <ComponentNumbering />
          </div>
        </div>
      </ModalContentsWrapper>
    </ModalCommon>
  );
};

export default ModalLessonFinish;
