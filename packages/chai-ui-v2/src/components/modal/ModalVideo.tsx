import React from "react";
import IconClose from "../../assets/images/icon/icon_close_white.svg";
import ModalBase from "./ModalBase";
import { ComponentVideo } from "../contents";

interface ModalVideoProps {
  videoSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalVideo = ({
  isModalOpen,
  setIsModalOpen,
  videoSrc,
}: ModalVideoProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <div className="modal-video-only">
        <div className="modal active">
          <div className="modal-container base-modal">
            <div className="base-wrapper">
              <button className="btn-close-modal" onClick={handleClose}>
                <img src={IconClose} alt="닫기" />
              </button>
              <div className="modal-video-wrapper w-100 text-center">
                <div className="normal-modal-inner-box modal-video-inner-box">
                  <ComponentVideo
                    content={{
                      id: "1",
                      type: "video",
                      data: { src: videoSrc },
                    }}
                    isModal={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalVideo;
