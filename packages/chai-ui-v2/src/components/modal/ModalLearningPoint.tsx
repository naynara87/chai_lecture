import React, { useMemo } from "react";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import { Content, useContentMapper } from "../../core";
import ModalBase from "./ModalBase";

interface ModalLearningPointProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wideModal: boolean;
  modalContents?: Content[];
}

const ModalLearningPoint = ({
  isModalOpen,
  setIsModalOpen,
  wideModal,
  modalContents,
}: ModalLearningPointProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const { getContentComponent } = useContentMapper();

  const mainContents = useMemo(() => {
    return modalContents?.map((content, contentIndex) => {
      return getContentComponent(content, contentIndex);
    });
  }, [modalContents, getContentComponent]);

  return (
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <div className="modal-scroll-area">
        <div className="modal active">
          <div
            className={`modal-container base-modal ${
              wideModal ? "wide-modal" : ""
            }`}
          >
            <div className="content-container">
              <button className="btn-close-modal" onClick={handleClose}>
                <img src={IconClose} alt="닫기" draggable={false} />
              </button>
              <div className="modal-contents-wrapper w-100">{mainContents}</div>
            </div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalLearningPoint;
