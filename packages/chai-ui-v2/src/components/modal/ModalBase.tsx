import { Modal, ModalUnstyledOwnProps } from "@mui/material";
import React, { ReactElement } from "react";

interface ModalBaseProps {
  children: ReactElement | ReactElement[];
  open: boolean;
  onClose: () => void;
  closeOnBackgroundClick?: boolean;
}

/**
 * @param children 모달창이 열리면 보여질 컴포넌트
 */
const ModalBase = ({
  children,
  open,
  onClose,
  closeOnBackgroundClick = true,
}: ModalBaseProps) => {
  const handleClose: ModalUnstyledOwnProps["onClose"] = (_, reason) => {
    if (!closeOnBackgroundClick && reason === "backdropClick") {
      return;
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <>{children}</>
    </Modal>
  );
};

export default ModalBase;
