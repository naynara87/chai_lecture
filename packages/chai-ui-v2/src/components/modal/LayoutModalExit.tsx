import styled from "@emotion/styled";
import React from "react";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
} from "../atoms";
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
  exitPlayer: () => Promise<unknown> | undefined;
}

const LayoutModalContinue = ({
  isModalOpen,
  setIsModalOpen,
  exitPlayer,
}: LayoutModalContinueProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClickClose = async () => {
    if (exitPlayer) {
      await exitPlayer();
    }
    console.log("학습 종료");
    const btnQuit = document.querySelector<HTMLDivElement>("#quit");
    window.parent.postMessage(
      {
        func: "pageReload",
      },
      "*",
    );
    btnQuit?.click();
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
                <h2 className="ttl">학습 나가기</h2>
              </div>
            </ModalBaseTitle>
            <ModalBaseContents className="base-conts">
              <div className="dec">
                아직 학습을 하지 않은 내용이 있어요.
                <br />
                학습을 종료 하시겠어요?
              </div>
            </ModalBaseContents>

            {/* key설명 - 버튼이 하나만 들어갈 수도 있음 */}
            <div className="btns-wrap">
              <ComponentButtonRadiBorderMain
                text="계속 학습하기"
                onClickBtn={handleClose}
              />
              <ComponentButtonRadiFillMain
                text="학습 종료하기"
                onClickBtn={() => {
                  handleClickClose()
                    .then((result) => {
                      console.log(result);
                    })
                    .catch((err) => console.log(err));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModalContinue;
