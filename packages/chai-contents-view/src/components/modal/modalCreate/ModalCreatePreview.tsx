import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "../ModalCommon";
import { changePXtoVH, changePXtoVW } from "../../../utils/styles";
import { colorPalette } from "../../../styles/colorPalette";
import CornerMain from "../../molecules/CornerMain";
import { ApproveContent, CreateTemplatePage, CreateTemplateType, ID } from "../../../types/appData";

interface ModalCreatePreviewProps {
  getPreviewObject: () => {
    id: ID;
    title: string;
    description: string;
    template: {
      type: CreateTemplateType;
      contents: ApproveContent[];
    };
  };
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalInnerBox = styled.div`
  overflow: hidden;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${changePXtoVW(1600)};
  height: ${changePXtoVH(1200)};
  padding-bottom: ${changePXtoVH(48)};
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
  object-fit: contain;
`;

const ModalCreatePreview = ({
  isModalOpen,
  setIsModalOpen,
  getPreviewObject,
}: ModalCreatePreviewProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <ModalInnerBox>
        <button onClick={() => handleClose()}>미리보기 해제</button>
        <CornerMain
          setPageCompleted={() => {
            return;
          }}
          page={getPreviewObject() as CreateTemplatePage}
        />
      </ModalInnerBox>
    </ModalCommon>
  );
};

export default ModalCreatePreview;
