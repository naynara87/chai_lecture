import React, { ReactElement } from "react";

interface ModalCommonProps {
  children: ReactElement | ReactElement[];
  open: boolean;
  onClose: () => void;
  wideModal?: boolean;
  vocaModal?: boolean;
}

const ModalCommon = ({
  children,
  onClose,
  open,
  wideModal,
  vocaModal,
}: ModalCommonProps) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal ${open ? "active" : ""}`}>
      <div className="modal-bg" onClick={handleClose}></div>
      <div
        className={`modal-container base-modal ${
          wideModal ? "wide-modal" : ""
        } ${vocaModal ? "voca-modal" : ""}`}
      >
        <div className="base-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default ModalCommon;
