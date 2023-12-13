import React from "react";
import ModalBase from "./ModalBase";

export interface ModalModalConfirmProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickRightButton?: () => void;
  handleClickLeftButton?: () => void;
  title: string;
  description: string;
  leftButtonText?: string;
  rightButtonText?: string;
  closeOnBackgroundClick?: boolean;
}

const ModalConfirm = ({
  isModalOpen,
  setIsModalOpen,
  handleClickLeftButton,
  handleClickRightButton,
  title,
  description,
  leftButtonText,
  rightButtonText,
  closeOnBackgroundClick,
}: ModalModalConfirmProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const _handleClickLeftButton = () => {
    handleClickLeftButton && handleClickLeftButton();
  };

  const _handleClickRightButton = () => {
    handleClickRightButton && handleClickRightButton();
  };

  return (
    <ModalBase
      open={isModalOpen}
      onClose={handleClose}
      closeOnBackgroundClick={closeOnBackgroundClick}
    >
      <div className="modal-inner-box modal-confirm-inner-box">
        <div className="mb-3">
          <h2 className="modal-confirm-text modal-confirm-title">{title}</h2>
          <p className="modal-confirm-text text-center pre-line">
            {description}
          </p>
        </div>
        <div className="d-flex gap-3 w-100">
          <button
            className="modal-confirm-text modal-button modal-border-button"
            onClick={_handleClickLeftButton}
          >
            {leftButtonText || "아니오"}
          </button>
          <button
            className="modal-confirm-text modal-button modal-color-button"
            onClick={_handleClickRightButton}
          >
            {rightButtonText || "예"}
          </button>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalConfirm;
