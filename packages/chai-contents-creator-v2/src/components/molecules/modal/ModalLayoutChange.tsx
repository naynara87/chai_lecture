import styled from "@emotion/styled";
import { colorPalette, ModalBase, TemplateType } from "chai-ui-v2";
import React from "react";
import ChooseLayout from "../CreateLayout";

const ModalInner = styled.div`
  background-color: ${colorPalette.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 740px;
  padding: 40px;
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
        <ChooseLayout onClickLayout={handleLayoutChange} />
      </ModalInner>
    </ModalBase>
  );
};

export default ModalLayoutChange;
