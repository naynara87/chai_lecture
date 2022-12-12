import React, { useMemo } from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import IconModalCharacter from "../atoms/svg/IconModalCharacter";
import { colorPalette } from "../../styles/colorPalette";
import { Introduction } from "../../types/appData";
import StartModalContents from "../molecules/StartModalContents";
import isEmpty from "lodash/isEmpty";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

export const ModalInnerBox = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: ${changePXtoVW(720)};
  width: 90%;
  padding-bottom: ${changePXtoVH(48)};
  border-radius: ${changePXtoVW(40)};
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.h2`
  width: 100%;
  padding: ${changePXtoVH(40)} 0 ${changePXtoVH(32)};
  background-color: ${colorPalette.confirmBtn};
  line-height: 1.5;
  font-weight: 600;
  font-size: ${changePXtoVW(48)};
  color: ${colorPalette.white};
  text-align: center;
`;

export const ModalTitle = styled.p`
  margin: ${changePXtoVH(64)} 0;
  line-height: 3.5;
  font-weight: 500;
  font-size: ${changePXtoVW(30)};
  line-height: 1.6;
  white-space: pre-line;
`;

export const ModalBody = styled.div`
  width: 100%;
  padding: 0 ${changePXtoVW(64)};
  text-align: center;

  > svg {
    max-width: ${changePXtoVW(265)};
  }
`;

export const ModalSecondTitle = styled.h3`
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
`;

export const ModalDescriptionWrap = styled.div`
  position: relative;
  margin-top: ${changePXtoVH(-18)};
  padding: ${changePXtoVH(16)} 0 ${changePXtoVH(8)};
  border: 2px dashed ${colorPalette.disableBackground};
  border-radius: ${changePXtoVW(24)};
  background-color: ${colorPalette.modalDescriptionBackground};
`;

interface StartButtonProps {
  isIntroductionContentsEmpty: boolean;
}
export const StartButton = styled.button<StartButtonProps>`
  min-width: ${changePXtoVW(278)};
  height: ${changePXtoVW(80)};
  background-color: ${colorPalette.confirmBtn};
  color: ${colorPalette.white};
  border-radius: ${changePXtoVW(48)};
  font-weight: 600;
  font-size: ${changePXtoVW(24)};
  transition: all 0.3s;
  margin-top: ${(props) => (props.isIntroductionContentsEmpty ? "10px" : changePXtoVH(100))};
  cursor: pointer;
`;

interface ModalStartProps {
  introduction: Introduction;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCornerPage?: boolean;
  handleClickStart(): void;
}

const ModalStart = ({
  introduction,
  isModalOpen,
  setIsModalOpen,
  isCornerPage = false,
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
    <ModalCommon open={isModalOpen} onClose={handleClose} isCornerPage={isCornerPage}>
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
