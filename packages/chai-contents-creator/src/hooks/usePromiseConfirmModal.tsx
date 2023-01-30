import styled from "@emotion/styled";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  changePXtoVW,
  colorPalette,
  ModalCommon,
  ModalHeader as Title,
  ModalInnerBox,
  ModalTitle as Description,
} from "chai-ui";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 ${changePXtoVW(20)};
`;

const ModalButton = styled.button`
  min-width: ${changePXtoVW(200)};
  height: ${changePXtoVW(80)};
  border-radius: ${changePXtoVW(48)};
  background-color: ${colorPalette.confirmBtn};
  font-weight: 600;
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.white};
  transition: all 0.3s;
  cursor: pointer;

  &:first-of-type {
    margin-right: ${changePXtoVW(50)};
  }
`;

interface usePromiseConfirmModalProps {
  title: string;
  description: string;
  leftButtonText?: string;
  rightButtonText?: string;
}

const usePromiseConfirmModal = ({
  title,
  description,
  leftButtonText,
  rightButtonText,
}: usePromiseConfirmModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resolveRef = useRef<(value: unknown) => void>(() => {});

  const showOpenModal = () => {
    setIsModalOpen(true);

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
      <ModalCommon open={isModalOpen} onClose={handleClose}>
        <ModalInnerBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonContainer>
            <ModalButton onClick={_handleClickLeftButton}>
              {leftButtonText || "아니오"}
            </ModalButton>
            <ModalButton onClick={_handleClickRightButton}>
              {rightButtonText || "예"}
            </ModalButton>
          </ButtonContainer>
        </ModalInnerBox>
      </ModalCommon>
    );
  }, [
    isModalOpen,
    _handleClickLeftButton,
    _handleClickRightButton,
    description,
    leftButtonText,
    rightButtonText,
    title,
  ]);

  return {
    modalContent,
    showOpenModal,
  };
};

export default usePromiseConfirmModal;
