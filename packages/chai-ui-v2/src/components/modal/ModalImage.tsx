import React from "react";
import styled from "@emotion/styled";
import IconClose from "../../assets/images/icon/icon_close_white.svg";
import ModalBase from "./ModalBase";

interface ModalImageProps {
  imageSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isImageModal: boolean;
}

const ModalImageContainer = styled.div`
  .base-modal.wide-modal {
    width: auto;
    max-width: 60vw;
    height: auto;
    max-height: 80vh;
    padding: 0;
    padding-top: 50px;
    border-radius: 0;
    background-color: transparent;
  }

  .btn-close-modal {
    top: 0;
    right: 0;
  }
`;

const ModalImageWrapper = styled.div`
  text-align: center;
  width: 100%;
  max-height: 100%;
`;

const ModalInnerBox = styled.img`
  z-index: 2;
  max-width: 100%;
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
    <ModalImageContainer>
      <ModalBase open={isModalOpen} onClose={handleClose}>
        <div className="modal active">
          <div
            className={`modal-container base-modal ${
              isImageModal ? "wide-modal" : ""
            }`}
          >
            <div className="base-wrapper">
              <button className="btn-close-modal" onClick={handleClose}>
                <img src={IconClose} alt="닫기" />
              </button>
              <ModalImageWrapper>
                <ModalInnerBox src={imageSrc} />
              </ModalImageWrapper>
            </div>
          </div>
        </div>
      </ModalBase>
    </ModalImageContainer>
  );
};

export default ModalImage;
