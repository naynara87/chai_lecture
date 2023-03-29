import styled from "@emotion/styled";
import React from "react";
import ImgContinueComponent from "../atoms/ImgContinueComponent";
import ModalBase from "./ModalBase";
// import ComponentButtonRadiBorderMain from "./ComponentButtonRadiBorderMain";
// import ComponentButtonRadiFillMain from "./ComponentButtonRadiFillMain";

const ModalBaseTitle = styled.div`
  .profile-img-wrap {
    overflow: visible;
  }

  .profile-img-wrap .img {
    transform: none;
  }
`;

const ModalBaseContents = styled.div``;

interface LayoutModalContinueProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutModalContinue = ({
  isModalOpen,
  setIsModalOpen,
}: LayoutModalContinueProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    // key설명 - active가 되면 보임
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
                <h2 className="ttl">학습 이어하기</h2>
              </div>
            </ModalBaseTitle>
            <ModalBaseContents className="base-conts">
              <div className="dec">
                아직 학습을 하지 않은 내용이 있어요.
                <br />
                지난 학습에 이어서 진행 하시겠어요?
              </div>
            </ModalBaseContents>

            {/* key설명 - 버튼이 하나만 들어갈 수도 있음 */}
            <div className="btns-wrap">
              {/* <ComponentButtonRadiBorderMain text="처음부터 하기" />
            <ComponentButtonRadiFillMain text="이어서 하기" /> */}
            </div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModalContinue;
