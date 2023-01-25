import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

interface ModalImageProps {
  imageSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalInnerBox = styled.img`
  overflow: hidden;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${changePXtoVW(1360)};
  height: ${changePXtoVW(680)};
  padding-bottom: ${changePXtoVH(48)};
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
  object-fit: contain;
`;

const ModalImage = ({ isModalOpen, setIsModalOpen, imageSrc }: ModalImageProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <ModalInnerBox src={imageSrc} />
    </ModalCommon>
  );
};

export default ModalImage;
