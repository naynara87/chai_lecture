import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";

interface ModalImageProps {
  imageSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isImageModal: boolean;
}

const ModalInnerBox = styled.img`
  overflow: hidden;
  z-index: 2;
  width: 100%;
  height: auto;
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
      ImageModal={isImageModal}
    >
      <ModalInnerBox src={imageSrc} />
    </ModalCommon>
  );
};

export default ModalImage;
