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
  top: auto;
  bottom: calc(${footerHeightNormal} + ${changePXtoVH(10)});
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ExplanationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  max-width: ${changePXtoVW(1600)};
  min-height: ${changePXtoVH(160)};
  background-color: ${colorPalette.grayf7};
`;

const CloseButton = styled.button`
  /* position: absolute;
  top: 0;
  right: 0;
  width: ${changePXtoVW(56)};
  height: ${changePXtoVW(56)};
  border-radius: 50%;
  background-color: ${colorPalette.deepBlue};
  background-image: url("${process.env.REACT_APP_BASE_URL}/images/icon/icon_close.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  transform: translateX(-20%);
  cursor: pointer; */
  display: none;
`;

export const TextBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: calc(100% - ${changePXtoVW(120)});
  height: ${changePXtoVW(160)};
  padding: ${changePXtoVH(10)} ${changePXtoVW(40)};
`;

export const OXWrapper = styled.div`
  width: ${changePXtoVW(48)};
  min-width: ${changePXtoVW(48)};
  margin-right: ${changePXtoVW(16)};
`;

export const ExplanationTextCss = css`
  overflow: auto;
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: ${changePXtoVW(16)};
  line-height: ${changePXtoVW(24)};

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;

interface TextProps {
  isText?: boolean;
}

export const Text = styled.div<TextProps>`
  height: ${(props) => !props.isText && "auto"};
  padding-top: ${changePXtoVH(12)};
  padding-bottom: ${changePXtoVH(8)};
  ${ExplanationTextCss}

  p {
    font-weight: 500;
    font-size: ${changePXtoVW(30)} !important;
    text-align: left;
  }
`;

export const ExplanationTitle = styled.div`
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.lightBlue};
`;

export const ExplanationHtmlCss = css`
  margin-top: ${changePXtoVW(24)};
  font-weight: 400;
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.descriptionText};
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${changePXtoVW(5)};
`;

const audioCss = css`
  width: ${changePXtoVW(40)};
  height: ${changePXtoVW(40)};
  margin-left: ${changePXtoVW(12)};
`;

type ExplanationData = {
  audio?: {
    src: string;
  };
  correctMessage?: string;
  wrongMessage?: string;
  text?: string;
};

interface ExplanationProps {
  explanation?: ExplanationData;
  isCorrect: boolean;
  handleClickClose: () => void;
}
const Explanation = ({
  isCorrect,
  explanation = { correctMessage: "정답입니다!", wrongMessage: "오답입니다!" },
  handleClickClose,
}: ExplanationProps) => {
  const { audio, correctMessage, wrongMessage, text } = explanation;

  const iconUrl = useMemo(() => {
    if (isCorrect) {
      return `${process.env.REACT_APP_BASE_URL}/images/img/bg_right_character.png`;
    }
    return `${process.env.REACT_APP_BASE_URL}/images/img/bg_wrong_character.png`;
  }, [isCorrect]);

  const infoText = useMemo(() => {
    if (isCorrect) {
      return correctMessage ?? "정답입니다!";
    }
    return wrongMessage ?? "오답입니다!";
  }, [isCorrect, correctMessage, wrongMessage]);

  return (
    <ExplanationWrapper>
      <ExplanationContainer>
        <TextBox>
          <Text isText={!!text}>
            <InfoWrapper>
              <OXWrapper>{isCorrect ? <OIcon /> : <XIcon />}</OXWrapper>
              <ExplanationTitle>{infoText}</ExplanationTitle>
              {audio && <AudioButton isAudio={true} audioUrl={audio.src} customCss={audioCss} />}
            </InfoWrapper>
            {text && <HtmlContentComponent html={text} customCss={ExplanationHtmlCss} />}
          </Text>
          <CloseButton onClick={handleClickClose} />
        </TextBox>
      </ExplanationContainer>
    </ExplanationWrapper>
  );
};

export default Explanation;
