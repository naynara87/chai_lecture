import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { StudySentencesWithVocabularyData } from "../../types/templateContents";
import { changePXtoVW } from "../../utils/styles";
import AudioButton from "../atoms/AudioButton";
import ArrowLeft from "../atoms/svg/ArrowLeft";
import ArrowRight from "../atoms/svg/ArrowRight";
import IconSentenceCharacter from "../atoms/svg/IconSentenceCharacter";
import IconTail from "../atoms/svg/IconTail";
import XIcon from "../atoms/svg/XIcon";
import HtmlContentComponent from "./HtmlContentComponent";

const BubbleContainer = styled.div`
  display: flex;
  width: ${changePXtoVW(360)};
  margin: 10px auto 0;
  position: relative;
`;

interface SentenceBubbleProps {
  open: boolean;
}

interface BubbleTextProps {
  open: boolean;
}

const BubbleText = styled.div<BubbleTextProps>`
  width: ${(props) => (props.open ? "80%" : "100%")};
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorPalette.white};
  font-size: ${changePXtoVW(30)};
  font-weight: 700;
  display: flex;
  justify-content: ${(props) => props.open && "space-between"};
`;

const SentenceBubble = styled.div<SentenceBubbleProps>`
  width: ${(props) => (props.open ? changePXtoVW(670) : changePXtoVW(130))};
  height: ${changePXtoVW(130)};
  border-radius: ${(props) => (props.open ? "92px" : "50%")};
  background-color: ${(props) => (props.open ? colorPalette.white : colorPalette.sentenceBubble)};
  border: 2px dashed ${colorPalette.sentenceBubble};
  position: absolute;
  right: 0;
  transform: ${(props) => props.open && `translateX(${changePXtoVW(550)})`};
  transition: all 0.3s ease-in;
  margin-left: 20px;
`;

interface BubbleMoreIconProps {
  open: boolean;
}
const BubbleMoreIcon = styled.button<BubbleMoreIconProps>`
  position: absolute;
  width: ${changePXtoVW(40)};
  height: ${changePXtoVW(40)};
  border-radius: 50%;
  top: 0;
  transform: translateY(100%) translateX(40%);
  right: 0;
  background-color: ${(props) => (props.open ? colorPalette.deepBlue : colorPalette.white)};
  cursor: pointer;
`;

const xIconCss = css`
  transform: scale(0.4);
`;

const arrowCss = css`
  transform: scale(0.6);
  cursor: pointer;
`;

const htmlCss = css`
  color: ${colorPalette.black};
`;

const audioCss = css`
  width: 30px;
  height: 30px;
`;

interface SentenceBubbleComponentProps {
  sentences: StudySentencesWithVocabularyData["sentences"];
  currentSentenceIndex: number;
  currentBubbleSentenceIndex: number;
  setCurrentBubbleSentenceIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SentenceBubbleComponent = ({
  sentences,
  currentSentenceIndex,
  currentBubbleSentenceIndex,
  setCurrentBubbleSentenceIndex,
}: SentenceBubbleComponentProps) => {
  const [isSentenceMoreOpen, setIsSentenceMoreOpen] = useState(false);

  const bubbleSentence = useMemo(() => {
    return (
      <>
        <ArrowLeft
          disabled={!sentences[currentSentenceIndex].words[currentBubbleSentenceIndex - 1]}
          activeColor={colorPalette.black}
          customCss={arrowCss}
          onClickIcon={() => {
            if (sentences[currentSentenceIndex].words[currentBubbleSentenceIndex - 1]) {
              setCurrentBubbleSentenceIndex((prev) => prev - 1);
            }
          }}
        />
        <HtmlContentComponent
          html={sentences[currentSentenceIndex].words[currentBubbleSentenceIndex].text}
          customCss={htmlCss}
        />
        <HtmlContentComponent
          html={sentences[currentSentenceIndex].words[currentBubbleSentenceIndex].pronunciation}
          customCss={htmlCss}
        />
        <HtmlContentComponent
          html={sentences[currentSentenceIndex].words[currentBubbleSentenceIndex].meaning}
          customCss={htmlCss}
        />
        {sentences[currentSentenceIndex].audio && (
          <AudioButton
            isAudio={true}
            audioUrl={sentences[currentSentenceIndex].audio?.src}
            customCss={audioCss}
          />
        )}
        <ArrowRight
          disabled={!sentences[currentSentenceIndex].words[currentBubbleSentenceIndex + 1]}
          activeColor={colorPalette.black}
          customCss={arrowCss}
          onClickIcon={() => {
            if (sentences[currentSentenceIndex].words[currentBubbleSentenceIndex + 1]) {
              setCurrentBubbleSentenceIndex((prev) => prev + 1);
            }
          }}
        />
      </>
    );
  }, [sentences, currentBubbleSentenceIndex, currentSentenceIndex, setCurrentBubbleSentenceIndex]);

  return (
    <BubbleContainer>
      <IconSentenceCharacter />
      {!isSentenceMoreOpen && <IconTail color={colorPalette.sentenceBubble} />}
      <SentenceBubble open={isSentenceMoreOpen}>
        <BubbleText open={isSentenceMoreOpen}>
          {isSentenceMoreOpen ? bubbleSentence : "단어"}
        </BubbleText>
        <BubbleMoreIcon
          open={isSentenceMoreOpen}
          onClick={() => {
            setIsSentenceMoreOpen(!isSentenceMoreOpen);
          }}
        >
          {isSentenceMoreOpen ? (
            <XIcon
              css={xIconCss}
              color={isSentenceMoreOpen ? colorPalette.white : colorPalette.black}
            />
          ) : (
            <ArrowRight customCss={arrowCss} />
          )}
        </BubbleMoreIcon>
      </SentenceBubble>
    </BubbleContainer>
  );
};

export default SentenceBubbleComponent;
