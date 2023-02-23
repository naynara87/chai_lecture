import styled from "@emotion/styled";
import React, { ReactElement } from "react";

const ModalBase = styled.div``;
const ModalBackground = styled.div``;

interface ModalCommonProps {
  children: ReactElement | ReactElement[];
  open: boolean;
  onClose: () => void;
}

const ModalCommon = ({ children, onClose, open }: ModalCommonProps) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBase className={`modal ${open && "active"}`}>
      <ModalBackground className="modal-bg" onClick={handleClose} />
      <div className="modal-container base-modal">
        <div className="base-wrapper">{children}</div>
      </div>
    </ModalBase>
  );
};

export default ModalCommon;
