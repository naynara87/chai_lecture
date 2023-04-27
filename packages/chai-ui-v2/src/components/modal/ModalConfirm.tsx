import React from "react";
import styled from "@emotion/styled";
import ModalBase from "./ModalBase";
import { colorPalette } from "../../assets";

const ModalButton = styled.button`
  width: 100%;
  padding: 14px 10px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
`;

const ModalBorderButton = styled(ModalButton)`
  border: 1px solid ${colorPalette.gray550};
  color: ${colorPalette.gray900};
`;

const ModalColorButton = styled(ModalButton)`
  border: 1px solid ${colorPalette.purple700};
  background-color: ${colorPalette.purple700};
  color: ${colorPalette.white};
`;

const ModalInnerBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 376px;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

const InnerTextContainer = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  line-height: 1.6;
  font-weight: 700;
  font-size: 24px;
  color: ${colorPalette.text};
  text-align: center;
  white-space: pre-line;
`;

const Description = styled.p`
  text-align: center;
  white-space: pre-line;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

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
      <ModalInnerBox>
        <InnerTextContainer>
          <Title className="modal-confirm-text">{title}</Title>
          <Description className="modal-confirm-text">
            {description}
          </Description>
        </InnerTextContainer>
        <ButtonContainer>
          <ModalBorderButton
            className="modal-confirm-text"
            onClick={_handleClickLeftButton}
          >
            {leftButtonText || "아니오"}
          </ModalBorderButton>
          <ModalColorButton
            className="modal-confirm-text"
            onClick={_handleClickRightButton}
          >
            {rightButtonText || "예"}
          </ModalColorButton>
        </ButtonContainer>
      </ModalInnerBox>
    </ModalBase>
  );
};

export default ModalConfirm;
