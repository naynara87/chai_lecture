import { Modal } from "@mui/material";
import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { footerHeightNormal, headerHeightNormal } from "../../constants/layout";

const ModalBackground = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(100vh - ${headerHeightNormal} - ${footerHeightNormal});
  /* margin-top: ${headerHeightNormal}; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

interface ModalCommonProps {
  children: ReactElement | ReactElement[];
  open: boolean;
  onClose: () => void;
}

/**
 * @param children 모달창이 열리면 보여질 컴포넌트
 */
const ModalCommon = ({ children, open, onClose }: ModalCommonProps) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal open={open}>
      <ModalBackground onClick={handleClose}>{children}</ModalBackground>
    </Modal>
  );
};

export default ModalCommon;
