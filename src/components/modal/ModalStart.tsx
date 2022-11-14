import React from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import IconCheckYellow from "../atoms/svg/IconCheckYellow";
import IconModalCharacter from "../atoms/svg/IconModalCharacter";
import { colorPalette } from "../../styles/colorPalette";
import { Link } from "react-router-dom";

interface ModalStartProps {
  title: string;
  description: string;
  isModalOpen: boolean;
  linkUrl?: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const ModalDescription = styled.p`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 0.5555555556vh;
  margin-left: 0.5vh;
  font-weight: 500;
  font-size: 1.25vw;
  white-space: pre-line;
`;

const ModalDescriptionWrap = styled.div`
  position: relative;
  margin-top: -1.25vh;
  padding: 1.1111111111vh 0 0.5555555556vh;
  border: 2px dashed ${colorPalette.disableBackground};
  border-radius: 1.25vw;
  background-color: ${colorPalette.modalDescriptionBackground};
`;

const StartButton = styled.button`
  min-width: 149px;
  height: 43px;
  background-color: ${colorPalette.confirmBtn};
  color: ${colorPalette.white};
  border-radius: 26px;
  font-weight: 600;
  font-size: 13px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin-top: 53px;
  cursor: pointer;

  @media all and (max-width: 1024px) {
    min-width: 14.4791666667vw;
    height: 4.1666666667vw;
    border-radius: 2.5vw;
    font-size: 1.25vw;
    margin-top: 5.2083333333vw;
  }
`;

const ModalStart = ({
  title,
  description,
  isModalOpen,
  linkUrl,
  setIsModalOpen,
}: ModalStartProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <ModalInnerBox>
        <ModalHeader>학습 목표</ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>
          <IconModalCharacter />
          <ModalDescriptionWrap>
            <ModalSecondTitle>학습 내용</ModalSecondTitle>
            <IconCheckYellow color={colorPalette.modalCheckIcon} />
            <ModalDescription>{description}</ModalDescription>
          </ModalDescriptionWrap>
        </ModalBody>
        <Link to={linkUrl ?? ""}>
          <StartButton>확인</StartButton>
        </Link>
      </ModalInnerBox>
    </ModalCommon>
  );
};

export default ModalStart;
