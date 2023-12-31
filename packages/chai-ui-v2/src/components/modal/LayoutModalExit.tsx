import React from "react";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
} from "../atoms";
import ImgContinueComponent from "../atoms/ImgContinueComponent";
import ModalBase from "./ModalBase";
import { ProgressData } from "../../core";
// import ComponentButtonRadiBorderMain from "./ComponentButtonRadiBorderMain";
// import ComponentButtonRadiFillMain from "./ComponentButtonRadiFillMain";

interface LayoutModalContinueProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  exitPlayer: () => void;
  saveProgress?: () => Promise<void>;
  progressData: ProgressData | undefined;
}

const LayoutModalExit = ({
  isModalOpen,
  setIsModalOpen,
  exitPlayer,
  saveProgress,
  progressData,
}: LayoutModalContinueProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClickClose = async () => {
    if (exitPlayer) {
      exitPlayer();
    }
    console.log("학습 종료");
    const btnQuit = document.querySelector<HTMLDivElement>("#quit");
    saveProgress && (await saveProgress());
    window.parent.postMessage(
      {
        func: "progressRate",
        data: progressData,
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
            <div className="modal-base-title base-ttl">
              <div className="profile-img-wrap overflow-visible">
                <ImgContinueComponent />
              </div>
              <div className="txt-wrap">
                <h2 className="ttl">학습 나가기</h2>
              </div>
            </div>
            <div className="base-conts">
              <div className="dec">
                아직 학습을 하지 않은 내용이 있어요.
                <br />
                학습을 종료하시겠어요?
              </div>
            </div>

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

export default LayoutModalExit;
