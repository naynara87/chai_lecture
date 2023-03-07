// import styled from "@emotion/styled";
import React from "react";
import ImgVocaComponent from "../atoms/ImgVocaComponent";
import ModalCommon from "./ModalCommon";
import ModalSwiper from "./ModalSwiper";
import IconClose from "../../assets/images/icon/icon_close_black.svg";

interface LayoutModalVocaProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutModalVoca = ({
  isModalOpen,
  setIsModalOpen,
}: LayoutModalVocaProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

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
      <ModalSwiper />
    </ModalCommon>
  );
};

export default LayoutModalVoca;
