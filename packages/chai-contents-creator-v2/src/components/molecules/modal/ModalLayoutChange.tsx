import styled from "@emotion/styled";
import { colorPalette, ModalBase, TemplateType } from "chai-ui-v2";
import React from "react";
import ChooseLayout from "../CreateLayout";

const ModalInner = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 740px;
  width: 90%;
  border-radius: 20px;
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

export interface ModalLayoutChangeProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleLayoutChange: (templateType: TemplateType) => void;
}
const ModalLayoutChange = ({
  isModalOpen,
  setIsModalOpen,
  handleLayoutChange,
}: ModalLayoutChangeProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <ModalInner>
        <ChooseLayout
          onClickLayout={handleLayoutChange}
          onClose={handleClose}
        />
      </ModalInner>
    </ModalBase>
  );
};

export default ModalLayoutChange;
