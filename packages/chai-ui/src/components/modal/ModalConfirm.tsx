import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";
import ModalCommon from "./ModalCommon";
import {
  ModalHeader as Title,
  ModalInnerBox,
  ModalTitle as Description,
} from "./ModalStart";

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

interface ModalModalConfirmProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickRightButton(): void;
  handleClickLeftButton(): void;
  title: string;
  description: string;
  leftButtonText?: string;
  rightButtonText?: string;
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
}: ModalModalConfirmProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const _handleClickLeftButton = () => {
    handleClickLeftButton();
  };

  const _handleClickRightButton = () => {
    handleClickRightButton();
  };

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
};

export default ModalConfirm;
