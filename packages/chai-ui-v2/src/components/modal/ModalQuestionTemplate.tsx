import React from "react";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import styled from "@emotion/styled";
import { vw, vh } from "../../assets";
import ModalBase from "./ModalBase";

interface ModalQuestionProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wideModal: boolean;
  quizTypeText: string;
  quizTotalLength: number;
  onClickStart: () => void;
}

const ModalQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .question-tit-wrapper {
    padding: ${vh(20)} ${vw(80)};
    background: #edeff5;
    border-radius: 999px;
    font-size: ${vw(36)};
    margin-bottom: ${vh(30)};
    & b {
      color: #6673a3;
      font-weight: 700;
    }
  }

  .question-cont-wrapper {
    background-color: #f5f5f5;
    border-radius: ${vw(20)};
    padding: ${vh(50)} ${vw(50)};
    width: ${vw(1084)};
    height: ${vh(572)};
    margin-bottom: ${vh(30)};
    border-radius: ${vw(20)};
    .question-sub {
      font-size: ${vw(28)};
      font-weight: 700;
      margin-bottom: ${vh(50)};
    }
    .question-cont {
      font-size: ${vw(24)};
      font-weight: 400;
    }
  }
`;

const ButtonStart = styled.button`
  padding: ${vh(24)} ${vw(75)};
  margin-left: auto;
  background: #6673a3;
  color: white;
  border-radius: ${vw(100)};
  font-size: ${vw(24)};
  font-weight: 700;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: #46538C;
  }
`;

const ModalQuestionTemplate = ({
  isModalOpen,
  setIsModalOpen,
  wideModal,
  quizTypeText,
  quizTotalLength,
  onClickStart,
}: ModalQuestionProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
    onClickStart();
  };
  return (
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <div className="modal active">
        <div
          className={`modal-container base-modal ${wideModal ? "wide-modal" : ""
            }`}
        >
          <div className="base-wrapper">
            <button className="btn-close-modal" onClick={handleClose}>
              <img src={IconClose} alt="닫기" />
            </button>
            <ModalQuestionWrapper>
              <p className="question-tit-wrapper">
                <b>{quizTypeText} </b>총 <b>{quizTotalLength}</b>문항
              </p>
              <div className="question-cont-wrapper">
                <p className="question-sub">{`<시험 중 유의사항>`}</p>
                <p className="question-cont">
                  1. 시험 응시 전 네트워크 상태를 확인해 주세요.
                  <br />
                  2. 제시된 문항을 모두 풀어 주세요.
                  <br />
                  3. 답안 선택 후 확인 버튼을 꼭 눌러 주세요. (확인 버튼을 누른
                  뒤엔 답변 수정이 불가합니다.)
                  <br />
                  4. ‘채점하기’ 버튼을 누르기 전 네트워크가 끊기면 처음부터 다시
                  문제를 풀어야 합니다.
                  <br />
                  5. ‘채점하기’ 버튼을 누르기 전까지는 문항을 자유롭게 이동하여
                  문제를 풀 수 있습니다.
                  <br />
                  6. 실제 시험에 임하는 자세로 문제를 풀어 주세요.
                </p>
              </div>
            </ModalQuestionWrapper>
            <ButtonStart onClick={handleClose}>시작</ButtonStart>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalQuestionTemplate;
