import React from "react";
import IconClose from "../../assets/images/icon/icon_close_black.svg";
import styled from "@emotion/styled";
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
    padding: 3vmin 8vmin;
    background: #edeff5;
    border-radius: 999px;
    font-size: 3.6vmin;
    margin-bottom: 3vmin;
    & b {
      color: #6673a3;
      font-weight: 700;
    }
  }

  .question-cont-wrapper {
    background-color: #f5f5f5;
    border-radius: 2vmin;
    padding: 5vmin;
    width: 108vmin;
    height: 60vmin;
    margin-bottom: 3vmin;
    border-radius: 2vmin;
    overflow: auto;

    .question-sub {
      font-size: 2.8vmin;
      font-weight: 700;
      margin-bottom: 5vmin;
    }
    .question-cont {
      font-size: 2.2vmin;
      font-weight: 400;
      white-space: pre-line;
    }
  }
`;

const ButtonStart = styled.button`
  padding: 3vmin 7.5vmin;
  margin-left: auto;
  background: #6673a3;
  color: white;
  border-radius: 10vmin;
  font-size: 2.4vmin;
  font-weight: 700;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: #46538c;
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
          className={`modal-container base-modal ${
            wideModal ? "wide-modal" : ""
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
                  {`1. 시험 응시 전 네트워크 상태를 확인해 주세요.

                  2. 마지막 문항에서만 '채점하기' 버튼이 노출됩니다.

                  3. 답안을 선택 후, '다음' 버튼을 누르면 답이 저장됩니다.  
                  `}
                  &nbsp;&nbsp;&nbsp;
                  {` '다음' 버튼을 누르면 답을 수정할 수 없으니 신중하게 선택하세요.

                  4. '채점하기' 버튼을 누르기 전 네트워크 상태가 불안정하면 문제를 처음부터 다시 풀어야 합니다.

                  5. 실제 시험에 임하는 자세로 문제를 풀어 주세요.`}
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
