import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import IconClose from "../../assets/images/icon/icon_close_black.svg";

interface ModalImageProps {
  imageSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isImageModal: boolean;
}

const ModalImageWrapper = styled.div`
  text-align: center;
`;

const ModalInnerBox = styled.img`
  z-index: 2;
  width: 90%;
  max-height: 100%;
  object-fit: contain;
`;

const ModalImage = ({
  isModalOpen,
  setIsModalOpen,
  imageSrc,
  isImageModal,
}: ModalImageProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalCommon
      open={isModalOpen}
      onClose={handleClose}
      wideModal={isImageModal}
    >
      <button className="btn-close-modal" onClick={handleClose}>
        <img src={IconClose} alt="닫기" />
      </button>
      <ModalImageWrapper>
        <ModalInnerBox src={imageSrc} />
      </ModalImageWrapper>
    </ModalCommon>
  );
};

export default ModalImage;
