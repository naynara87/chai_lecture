import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";

interface ModalImageProps {
  imageSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalInnerBox = styled.img`
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${changePXtoVW(1360)};
  height: ${changePXtoVW(680)};
  padding-bottom: 3.3333333333vh;
  /* border-radius: 2.0833333333vw; */
  background-color: ${colorPalette.white};
  -webkit-transform: translate(-50%, -50%);
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
