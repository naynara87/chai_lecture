import styled from "@emotion/styled";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  HtmlContentComponent,
  ImgContinueComponent,
  ModalBase,
} from "../../components";

const ModalBaseTitle = styled.div`
  .profile-img-wrap {
    overflow: visible;
  }

  .profile-img-wrap .img {
    transform: none;
  }
`;

const ModalBaseContents = styled.div``;

interface modalContentProps {
  title: string;
  description: string;
  leftButtonText: string;
  rightButtonText: string;
}

const usePromiseConfirmModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const resolveRef = useRef<(value: unknown) => void>(
    (value: unknown) => value,
  );

  const showOpenModal = ({
    title,
    description,
    leftButtonText,
    rightButtonText,
  }: modalContentProps) => {
    setIsModalOpen(true);
    setTitle(title);
    setDescription(description);
    setLeftButtonText(leftButtonText);
    setRightButtonText(rightButtonText);

    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const _handleClickLeftButton = useCallback(() => {
    resolveRef.current(false);
    handleClose();
  }, []);

  const _handleClickRightButton = useCallback(() => {
    resolveRef.current(true);
    handleClose();
  }, []);

  const modalContent = useMemo(() => {
    return (
      <ModalBase open={isModalOpen} onClose={handleClose}>
        <div className="modal active">
          <div className="modal-container base-modal">
            <div className="base-wrapper">
              {/* 제목영역 */}
              <ModalBaseTitle className="base-ttl">
                <div className="profile-img-wrap">
                  <ImgContinueComponent />
                </div>
                <div className="txt-wrap">
                  <h2 className="ttl">{title}</h2>
                </div>
              </ModalBaseTitle>
              <ModalBaseContents className="base-conts">
                <div className="dec">
                  <HtmlContentComponent html={description} />
                </div>
              </ModalBaseContents>

              {/* key설명 - 버튼이 하나만 들어갈 수도 있음 */}
              <div className="btns-wrap">
                <ComponentButtonRadiBorderMain
                  text={leftButtonText || "아니오"}
                  onClickBtn={_handleClickLeftButton}
                />
                <ComponentButtonRadiFillMain
                  text={rightButtonText || "예"}
                  onClickBtn={_handleClickRightButton}
                />
              </div>
            </div>
          </div>
        </div>
      </ModalBase>
    );
  }, [
    isModalOpen,
    _handleClickLeftButton,
    _handleClickRightButton,
    title,
    description,
    leftButtonText,
    rightButtonText,
  ]);

  return {
    modalContent,
    showOpenModal,
  };
};

export default usePromiseConfirmModal;
