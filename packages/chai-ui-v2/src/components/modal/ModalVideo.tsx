import React from "react";
import styled from "@emotion/styled";
import IconClose from "../../assets/images/icon/icon_close_white.svg";
import { ComponentVideo } from "../atoms";
import ModalBase from "./ModalBase";

interface ModalVideoProps {
  videoSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalVideoContainer = styled.div`
  .base-modal {
    width: auto;
    max-width: 60vw;
    height: auto;
    max-height: 80vh;
    padding: 0;
    padding-top: 50px;
    border-radius: 0;
    background-color: transparent;
  }

  .btn-close-modal {
    top: 0;
    right: 0;
  }

  .player-wrap {
    border-radius: 0;
  }
`;

const ModalVideoWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const ModalInnerBox = styled.div`
  z-index: 2;
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ModalVideo = ({
  isModalOpen,
  setIsModalOpen,
  videoSrc,
}: ModalVideoProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalVideoContainer>
      <ModalBase open={isModalOpen} onClose={handleClose}>
        <div className="modal active">
          <div className="modal-container base-modal">
            <div className="base-wrapper">
              <button className="btn-close-modal" onClick={handleClose}>
                <img src={IconClose} alt="닫기" />
              </button>
              <ModalVideoWrapper>
                <ModalInnerBox>
                  <ComponentVideo
                    content={{
                      id: "1",
                      type: "video",
                      data: { src: videoSrc },
                    }}
                  />
                </ModalInnerBox>
              </ModalVideoWrapper>
            </div>
          </div>
        </div>
      </ModalBase>
    </ModalVideoContainer>
  );
};

export default ModalVideo;
