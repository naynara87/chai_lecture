import { Modal } from "@mui/material";
import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { footerHeightNormal, headerHeightNormal } from "../../constants/layout";

interface ModalBackgroundProps {
  isCornerPage?: boolean;
}

const ModalBackground = styled.div<ModalBackgroundProps>`
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: ${(props) =>
    props.isCornerPage
      ? `calc(100vh - ${headerHeightNormal} - ${footerHeightNormal})`
      : `calc(100vh - ${headerHeightNormal})`}; */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

interface ModalCommonProps {
  children: ReactElement | ReactElement[];
  open: boolean;
  onClose: () => void;
  isCornerPage?: boolean;
}

/**
 * @param children 모달창이 열리면 보여질 컴포넌트
 */
const ModalCommon = ({
  children,
  open,
  onClose,
  isCornerPage = false,
}: ModalCommonProps) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal open={open}>
      <ModalBackground onClick={handleClose} isCornerPage={isCornerPage}>
        {children}
      </ModalBackground>
    </Modal>
  );
};

export default ModalCommon;