import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import { ComponentVideo } from "../atoms";

interface ModalVideoProps {
  videoSrc: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <button className="btn-close-modal" onClick={handleClose}>
        <img src={IconClose} alt="닫기" />
      </button>
      <ModalVideoWrapper>
        <ModalInnerBox>
          <ComponentVideo
            content={{ id: "1", type: "video", data: { src: videoSrc } }}
          />
        </ModalInnerBox>
      </ModalVideoWrapper>
    </ModalCommon>
  );
};

export default ModalVideo;
