import React from "react";
import IconClose from "../../assets/images/icon/icon_close_white.svg";
import ModalBase from "./ModalBase";

interface ModalImageProps {
  imageSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isImageModal: boolean;
}

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
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <div className="modal-image-only">
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
              <div className="modal-image-wrapper">
                <img className="normal-modal-inner-box" src={imageSrc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalImage;
