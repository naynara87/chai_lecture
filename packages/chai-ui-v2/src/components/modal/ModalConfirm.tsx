import React from "react";
import styled from "@emotion/styled";
import ModalBase from "./ModalBase";
import { colorPalette, vw } from "../../assets";

const ModalButton = styled.button`
  /* border-radius: ${vw(8)}; */
  border-radius: 8px;
  font-weight: 500;
  /* font-size: ${vw(13)}; */
  font-size: 13px;
  /* line-height: ${vw(16)}; */
  line-height: 16px;
  width: 100%;
  padding: 14px;
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
  background-color: ${colorPalette.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* padding: ${vw(24)}; */
  padding: 24px;
  /* border-radius: ${vw(16)}; */
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 376px;
`;

const InnerTextContainer = styled.div`
  /* margin-top: ${vw(16)};
  margin-bottom: ${vw(40)}; */
  margin-top: 16px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-weight: 700;
  /* font-size: ${vw(24)}; */
  font-size: 24px;
  /* line-height: ${vw(35)}; */
  line-height: 35px;
  color: ${colorPalette.text};
  /* margin-bottom: ${vw(24)}; */
  margin-bottom: 24px;
  text-align: center;
`;

const Description = styled.p`
  font-weight: 400;
  /* font-size: ${vw(16)};
  line-height: ${vw(23)}; */
  font-size: 16px;
  line-height: 23px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: ${vw(8)}; */
  grid-gap: 8px;
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
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InnerTextContainer>
        <ButtonContainer>
          <ModalBorderButton onClick={_handleClickLeftButton}>
            {leftButtonText || "아니오"}
          </ModalBorderButton>
          <ModalColorButton onClick={_handleClickRightButton}>
            {rightButtonText || "예"}
          </ModalColorButton>
        </ButtonContainer>
      </ModalInnerBox>
    </ModalBase>
  );
};

export default ModalConfirm;
