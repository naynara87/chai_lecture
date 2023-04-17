import React, { useMemo } from "react";
import styled from "@emotion/styled";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import { vh, vw } from "../../assets";
import { Content, useContentMapper } from "../../core";
import ModalBase from "./ModalBase";

interface ModalLearningPointProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wideModal: boolean;
  modalContents?: Content[];
}

const ModalScrollArea = styled.div`
  .modal-container {
    padding: 0;
  }
`;

const ModalContentsWrapper = styled.div`
  width: 100%;
  
  .conts-wrap:not(:first-of-type) {
    margin-top: ${vw(60)};
  }
`;

const ContentContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: ${vh(60)} ${vw(60)};
`;

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
      <ModalScrollArea>
        <div className="modal active">
          <div
            className={`modal-container base-modal ${wideModal ? "wide-modal" : ""
              }`}
          >
            <ContentContainer>
              <button className="btn-close-modal" onClick={handleClose}>
                <img src={IconClose} alt="닫기" draggable={false} />
              </button>
              <ModalContentsWrapper>{mainContents}</ModalContentsWrapper>
            </ContentContainer>
          </div>
        </div>
      </ModalScrollArea>
    </ModalBase>
  );
};

export default ModalLearningPoint;
