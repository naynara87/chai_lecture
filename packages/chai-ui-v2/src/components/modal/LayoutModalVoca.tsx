// import styled from "@emotion/styled";
import React from "react";
import ImgVocaComponent from "../atoms/ImgVocaComponent";
import ModalCommon from "./ModalCommon";
import ModalSwiper from "./ModalSwiper";

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
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      {/* 
        TODO: key설명 - 모달 닫기버튼
        <button className="btn-close-modal">
          <img src="images/icon/icon_close_black.svg" alt="닫기" />
        </button>
         */}
      {/* 제목영역 */}
      <div className="base-ttl">
        <div className="profile-img-wrap">
          <ImgVocaComponent />
        </div>
        {/* <div className="txt-wrap">
          <h2 className="ttl">새로운 단어</h2>
        </div> */}
      </div>
      <ModalSwiper />
    </ModalCommon>
  );
};

export default LayoutModalVoca;
