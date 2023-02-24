import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";
import { RotatingLines } from "react-loader-spinner";

const ModalHeader = styled.h2`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: ${changePXtoVW(48)};
  color: ${colorPalette.black};
`;

const ModalDescription = styled.p`
  margin-bottom: 24px;
  font-weight: 500;
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.loadingModalDescription};
`;

interface ModalLoadingProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalInnerBox = styled.div`
  overflow: hidden;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
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
  width: ${changePXtoVW(720)};
  height: ${changePXtoVW(472)};
  padding-bottom: 3.3333333333vh;
  border-radius: 40px;
  background-color: ${colorPalette.white};
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const ModalLoading = ({ isModalOpen, setIsModalOpen }: ModalLoadingProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <ModalInnerBox>
        <ModalHeader>채점 중</ModalHeader>
        <ModalDescription>잠시만 기다려 주세요.</ModalDescription>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="4"
          animationDuration="0.75"
          width="86"
          visible={true}
        />
      </ModalInnerBox>
    </ModalCommon>
  );
};

export default ModalLoading;