import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import IconCheckYellow from "../atoms/svg/IconCheckYellow";
import IconModalCharacter from "../atoms/svg/IconModalCharacter";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

const ModalInnerBox = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: ${changePXtoVW(720)};
  width: 90%;
  padding-bottom: ${changePXtoVH(48)};
  border-radius: ${changePXtoVW(40)};
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

const ModalHeader = styled.h2`
  width: 100%;
  padding: ${changePXtoVH(40)} 0 ${changePXtoVH(32)};
  background-color: ${colorPalette.confirmBtn};
  line-height: 1.5;
  font-weight: 600;
  font-size: ${changePXtoVW(48)};
  color: ${colorPalette.white};
  text-align: center;
`;

const ModalTitle = styled.p`
  margin: ${changePXtoVH(64)} 0;
  line-height: 3.5;
  font-weight: 500;
  font-size: ${changePXtoVW(30)};
  line-height: 1.6;
  white-space: pre-line;
`;

const ModalBody = styled.div`
  width: 100%;
  padding: 0 ${changePXtoVW(64)};
  text-align: center;

  > svg {
    max-width: ${changePXtoVW(265)};
  }
`;

const ModalSecondTitle = styled.h3`
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
`;

const ModalDescription = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${changePXtoVH(16)};
  margin-left: ${changePXtoVH(8)};
  font-weight: 500;
  font-size: ${changePXtoVW(24)};
  white-space: pre-line;
`;

const ModalDescriptionWrap = styled.div`
  position: relative;
  margin-top: ${changePXtoVH(-18)};
  padding: ${changePXtoVH(16)} 0 ${changePXtoVH(8)};
  border: 2px dashed ${colorPalette.disableBackground};
  border-radius: ${changePXtoVW(24)};
  background-color: ${colorPalette.modalDescriptionBackground};
`;

const StartButton = styled.button`
  min-width: ${changePXtoVW(278)};
  height: ${changePXtoVH(80)};
  background-color: ${colorPalette.confirmBtn};
  color: ${colorPalette.white};
  border-radius: ${changePXtoVW(48)};
  font-weight: 600;
  font-size: ${changePXtoVW(24)};
  transition: all 0.3s;
  margin-top: ${changePXtoVH(100)};
  cursor: pointer;
`;

interface ModalStartProps {
  title: string;
  description: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickStart(): void;
}

const ModalStart = ({
  title,
  description,
  isModalOpen,
  setIsModalOpen,
  handleClickStart,
}: ModalStartProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <ModalInnerBox>
        <ModalHeader>학습 목표</ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>
          <IconModalCharacter />
          <ModalDescriptionWrap>
            <ModalSecondTitle>학습 내용</ModalSecondTitle>
            <IconCheckYellow color={colorPalette.modalCheckIcon} />
            <ModalDescription>{description}</ModalDescription>
          </ModalDescriptionWrap>
        </ModalBody>
        <StartButton onClick={handleClickStart}>확인</StartButton>
      </ModalInnerBox>
    </ModalCommon>
  );
};

export default ModalStart;
