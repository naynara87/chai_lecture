import React, { useMemo } from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import IconModalCharacter from "../atoms/svg/IconModalCharacter";
import { colorPalette } from "../../styles/colorPalette";
import { breakPoints } from "../../constants/layout";
import { Introduction } from "../../types/appData";
import StartModalContents from "../molecules/StartModalContents";
import isEmpty from "lodash/isEmpty";
import { changePXtoVH } from "../../utils/styles";

const ModalInnerBox = styled.div`
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 37.5vw;
  width: 90%;
  padding-bottom: 3.3333333333vh;
  border-radius: 2.0833333333vw;
  background-color: ${colorPalette.white};
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const ModalHeader = styled.h2`
  width: 100%;
  padding: 2.7777777778vh 0 2.2222222222vh;
  background-color: ${colorPalette.confirmBtn};
  line-height: 1.5;
  font-weight: 600;
  font-size: 2.5vw;
  color: ${colorPalette.white};
  text-align: center;
`;

const ModalTitle = styled.p`
  line-height: 3.5;
  font-weight: 500;
  font-size: 1.5625vw;
  white-space: pre-line;
`;

const ModalBody = styled.div`
  width: 100%;
  padding: 0 3.3333333333vw;
  text-align: center;
`;

const ModalSecondTitle = styled.h3`
  font-weight: 600;
  font-size: 1.5625vw;
`;

const ModalDescriptionWrap = styled.div`
  position: relative;
  margin-top: -1.25vh;
  padding: 1.1111111111vh 0 0.5555555556vh;
  border: 2px dashed ${colorPalette.disableBackground};
  border-radius: 1.25vw;
  background-color: ${colorPalette.modalDescriptionBackground};
`;

interface StartButtonProps {
  isIntroductionContentsEmpty: boolean;
}
const StartButton = styled.button<StartButtonProps>`
  min-width: 149px;
  height: 43px;
  background-color: ${colorPalette.confirmBtn};
  color: ${colorPalette.white};
  border-radius: 26px;
  font-weight: 600;
  font-size: 13px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin-top: ${(props) => (props.isIntroductionContentsEmpty ? "10px" : changePXtoVH(53))};
  cursor: pointer;

  @media all and (max-width: ${breakPoints.tablet}) {
    min-width: 14.4791666667vw;
    height: 4.1666666667vw;
    border-radius: 2.5vw;
    font-size: 1.25vw;
    margin-top: 5.2083333333vw;
  }
`;

interface ModalStartProps {
  introduction: Introduction;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickStart(): void;
}

const ModalStart = ({
  introduction,
  isModalOpen,
  setIsModalOpen,
  handleClickStart,
}: ModalStartProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const isIntroductionContentsEmpty = useMemo(
    () => isEmpty(introduction.contents),
    [introduction.contents],
  );

  return (
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <ModalInnerBox>
        <ModalHeader>{introduction.title || "학습 목표"}</ModalHeader>
        <ModalTitle>{introduction.subTitle}</ModalTitle>
        {!isIntroductionContentsEmpty && (
          <ModalBody>
            <IconModalCharacter />
            <ModalDescriptionWrap>
              <ModalSecondTitle>{introduction.contentsTitle || "학습 내용"}</ModalSecondTitle>
              <StartModalContents introduction={introduction} />
            </ModalDescriptionWrap>
          </ModalBody>
        )}
        <StartButton
          onClick={handleClickStart}
          isIntroductionContentsEmpty={isIntroductionContentsEmpty}
        >
          {introduction.confirmButtonText || "확인"}
        </StartButton>
      </ModalInnerBox>
    </ModalCommon>
  );
};

export default ModalStart;
