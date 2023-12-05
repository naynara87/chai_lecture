import React from "react";
import styled from "@emotion/styled";
import ModalBase from "./ModalBase";
import { colorPalette } from "../../assets";

export const ConfirmModalButton = styled.button`
  width: 50%;
  border-radius: 10vmin;
  font-weight: 700;
  font-size: 3vmin;
  padding: 0.5em 1em;
`;

interface ConfirmModalBorderButtonProps {
  color?: string;
}

export const ConfirmModalBorderButton = styled(
  ConfirmModalButton,
)<ConfirmModalBorderButtonProps>`
  border: min(2px, 0.1vmin) solid ${colorPalette.gray550};
  background-color: ${colorPalette.white};
  color: ${(props) => (props.color ? props.color : "#6673a3")};
`;

interface ConfirmModalColorButtonProps {
  color?: string;
}

export const ConfirmModalColorButton = styled(
  ConfirmModalButton,
)<ConfirmModalColorButtonProps>`
  background-color: ${(props) => (props.color ? props.color : "#6673a3")};
  color: ${colorPalette.white};
`;

export const ConfirmModalInnerBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 4vmin 3vmin;
  border-radius: 3vmin;
  width: 100%;
  max-width: 80vmin;
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

export const ConfirmInnerTextContainer = styled.div`
  margin-bottom: 2vmin;
`;

export const ConfirmModalTitle = styled.h2`
  margin-bottom: 3vmin;
  line-height: 1.6;
  font-weight: 700;
  font-size: 2.6vmin;
  color: ${colorPalette.text};
  text-align: center;
  white-space: pre-line;
`;

export const ConfirmModalDescription = styled.p`
  text-align: center;
  white-space: pre-line;
  font-size: 2.2vmin;
  font-weight: 400;
  color: #808080;
`;

export const ConfirmModalButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
`;

export interface ModalConfirmViewProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickRightButton?: () => void;
  handleClickLeftButton?: () => void;
  title: string;
  description: string;
  leftButtonText?: string;
  rightButtonText?: string;
  closeOnBackgroundClick?: boolean;
  btnColor?: string;
}

const ModalConfirmView = ({
  isModalOpen,
  setIsModalOpen,
  handleClickLeftButton,
  handleClickRightButton,
  title,
  description,
  leftButtonText,
  rightButtonText,
  closeOnBackgroundClick,
  btnColor,
}: ModalConfirmViewProps) => {
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
            color={btnColor}
          >
            {leftButtonText || "아니오"}
          </ConfirmModalBorderButton>
          <ConfirmModalColorButton
            className="modal-confirm-text"
            onClick={_handleClickRightButton}
            color={btnColor}
          >
            {rightButtonText || "예"}
          </ConfirmModalColorButton>
        </ConfirmModalButtonContainer>
      </ConfirmModalInnerBox>
    </ModalBase>
  );
};

export default ModalConfirmView;
