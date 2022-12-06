import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { footerHeightNormal } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import OIcon from "../atoms/svg/OIcon";
import { css } from "@emotion/react";
import XIcon from "../atoms/svg/XIcon";
import AudioButton from "../atoms/AudioButton";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import HtmlContentComponent from "./HtmlContentComponent";

const ExplanationWrapper = styled.div`
  position: fixed;
  bottom: calc(${footerHeightNormal} + ${changePXtoVH(10)});
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ExplanationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  max-width: ${changePXtoVW(1340)};
  min-height: ${changePXtoVH(160)};
  grid-template-columns: max-content 1fr;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: ${changePXtoVW(56)};
  height: ${changePXtoVW(56)};
  border-radius: 50%;
  background-color: ${colorPalette.deepBlue};
  background-image: url("${process.env.PUBLIC_URL}/images/icon/icon_close.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  transform: translateX(-20%);
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: calc(100% - ${changePXtoVW(120)});
  height: ${changePXtoVH(160)};
  padding: ${changePXtoVH(10)} ${changePXtoVW(40)};
  background-position: left 3px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("${process.env.PUBLIC_URL}/images/img/bg_answer_balloon.png");
`;

const ImageWrapper = styled.div`
  width: ${changePXtoVW(120)};
`;

const OXWrapper = styled.div`
  width: ${changePXtoVW(96)};
  min-width: ${changePXtoVW(96)};
  height: 100%;
  padding-top: ${changePXtoVH(4)};
  margin-left: ${changePXtoVW(40)};
  margin-right: ${changePXtoVW(32)};
  display: flex;
`;

const ExplanationTextCss = css`
  font-size: ${changePXtoVW(16)};
  line-height: ${changePXtoVW(24)};
  font-weight: 600;
`;

const Text = styled.div`
  padding-top: ${changePXtoVH(12)};
  padding-bottom: ${changePXtoVH(8)};
  ${ExplanationTextCss}
`;

const ExplanationTitle = styled.div`
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.deepBlue};
`;

const ExplanationHtmlCss = css`
  max-height: ${changePXtoVH(50)};
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.descriptionText};
  font-weight: 400;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${changePXtoVW(5)};
`;

const audioCss = css`
  width: ${changePXtoVW(40)};
  height: ${changePXtoVW(40)};
  transform: translateY(${changePXtoVW(-10)});
  margin-left: ${changePXtoVW(12)};
`;

const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

type ExplanationData = {
  audio?: {
    src: string;
  };
  correctMessage: string;
  wrongMessage: string;
  text: string;
};

interface ExplanationProps {
  explanation: ExplanationData;
  isCorrect: boolean;
  handleClickClose: () => void;
}
const Explanation = ({ isCorrect, explanation, handleClickClose }: ExplanationProps) => {
  const { audio, correctMessage, wrongMessage, text } = explanation;

  const iconUrl = useMemo(() => {
    if (isCorrect) {
      return `${process.env.PUBLIC_URL}/images/img/bg_right_character.png`;
    }
    return `${process.env.PUBLIC_URL}/images/img/bg_wrong_character.png`;
  }, [isCorrect]);

  const infoText = useMemo(() => {
    if (isCorrect) {
      return correctMessage;
    }
    return wrongMessage;
  }, [isCorrect, correctMessage, wrongMessage]);
  return (
    <ExplanationWrapper>
      <ExplanationContainer>
        <ImageWrapper>
          <IconImg src={iconUrl} alt="" />
        </ImageWrapper>
        <TextBox>
          <OXWrapper>{isCorrect ? <OIcon /> : <XIcon />}</OXWrapper>
          <Text>
            <InfoWrapper>
              <ExplanationTitle>{infoText}</ExplanationTitle>
              {audio && <AudioButton isAudio={true} audioUrl={audio.src} customCss={audioCss} />}
            </InfoWrapper>
            <HtmlContentComponent html={text} customCss={ExplanationHtmlCss} />
          </Text>
          <CloseButton onClick={handleClickClose} />
        </TextBox>
      </ExplanationContainer>
    </ExplanationWrapper>
  );
};

export default Explanation;
