import React, { useCallback, useMemo, useRef, useState } from "react";
import { ModalBase } from "../../components";
import {
  ConfirmInnerTextContainer,
  ConfirmModalBorderButton,
  ConfirmModalButtonContainer,
  ConfirmModalColorButton,
  ConfirmModalDescription,
  ConfirmModalInnerBox,
  ConfirmModalTitle,
} from "../../components/modal/ModalConfirmView";

interface modalContentProps {
  title: string;
  description: string;
  leftButtonText: string;
  rightButtonText: string;
}

const usePromiseQuestionExitConfirmModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const resolveRef = useRef<(value: unknown) => void>(
    (value: unknown) => value,
  );

  const showOpenModal = ({
    title,
    description,
    leftButtonText,
    rightButtonText,
  }: modalContentProps) => {
    setIsModalOpen(true);
    setTitle(title);
    setDescription(description);
    setLeftButtonText(leftButtonText);
    setRightButtonText(rightButtonText);

    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const _handleClickLeftButton = useCallback(() => {
    resolveRef.current(false);
    handleClose();
  }, []);

  const _handleClickRightButton = useCallback(() => {
    resolveRef.current(true);
    handleClose();
  }, []);

  const modalContent = useMemo(() => {
    return (
      <ModalBase open={isModalOpen} onClose={handleClose}>
        <ConfirmModalInnerBox>
          <ConfirmInnerTextContainer>
            <ConfirmModalTitle className="modal-confirm-text">
              {title}
            </ConfirmModalTitle>
            <ConfirmModalDescription className="modal-confirm-text">
              {description}
            </ConfirmModalDescription>
          </ConfirmInnerTextContainer>
          <ConfirmModalButtonContainer>
            <ConfirmModalBorderButton
              className="modal-confirm-text"
              onClick={_handleClickLeftButton}
            >
              {leftButtonText || "아니오"}
            </ConfirmModalBorderButton>
            <ConfirmModalColorButton
              className="modal-confirm-text"
              onClick={_handleClickRightButton}
            >
              {rightButtonText || "예"}
            </ConfirmModalColorButton>
          </ConfirmModalButtonContainer>
        </ConfirmModalInnerBox>
      </ModalBase>
    );
  }, [
    isModalOpen,
    _handleClickLeftButton,
    _handleClickRightButton,
    title,
    description,
    leftButtonText,
    rightButtonText,
  ]);

  return {
    modalContent,
    showOpenModal,
  };
};

export default usePromiseQuestionExitConfirmModal;
