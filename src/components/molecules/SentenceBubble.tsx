import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { footerHeightNormal } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import { SentenceWord } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import AudioButton from "../atoms/AudioButton";
import ArrowLeft from "../atoms/svg/ArrowLeft";
import ArrowRight from "../atoms/svg/ArrowRight";
import IconSentenceCharacter from "../atoms/svg/IconSentenceCharacter";
import IconTail from "../atoms/svg/IconTail";
import XIcon from "../atoms/svg/XIcon";
import HtmlContentComponent from "./HtmlContentComponent";

interface BubbleContainerProps {
  containerCss?: SerializedStyles;
}

const BubbleContainer = styled.div<BubbleContainerProps>`
  ${(props) => props.containerCss}

  z-index: 5;
  position: fixed;
  left: 50%;
  top: auto;
  bottom: calc(${footerHeightNormal} + 15px);
  display: flex;
  justify-content: flex-start;
  /* width: ${changePXtoVW(360)}; */
  width: ${changePXtoVW(1600)};
  transform: translateX(-50%);
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
  /* justify-content: ${(props) => props.open && "space-between"}; */
  justify-content: center;
  align-items: center;
  gap: ${changePXtoVW(20)};
  font-size: ${changePXtoVW(30)};
  font-weight: 500;
  color: ${colorPalette.white};
`;

const SentenceBubble = styled.div<SentenceBubbleProps>`
  min-width: ${(props) => (props.open ? changePXtoVW(1000) : changePXtoVW(130))};
  width: auto;
  height: ${changePXtoVW(130)};
  border-radius: ${(props) => (props.open ? "92px" : "50%")};
  background-color: ${(props) => (props.open ? colorPalette.white : colorPalette.sentenceBubble)};
  border: 2px dashed ${colorPalette.sentenceBubble};
  position: absolute;
  left: ${changePXtoVW(200)};
  /* transform: ${(props) => props.open && `translateX(${changePXtoVW(550)})`}; */
  transition: all 0.3s ease-in;
  /* margin-left: ${changePXtoVW(20)}; */
`;

interface BubbleMoreIconProps {
  open: boolean;
}
const BubbleMoreIcon = styled.button<BubbleMoreIconProps>`
  position: absolute;
  top: 50%;
  left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  right: ${(props) => (props.open ? `${changePXtoVW(-10)}` : `${changePXtoVW(-30)}`)};
  width: ${changePXtoVW(56)};
  height: ${changePXtoVW(56)};
  border-radius: 50%;
  background-color: ${(props) => (props.open ? colorPalette.deepBlue : colorPalette.white)};
  transform: translateY(-50%);
  cursor: pointer;
`;

const xIconCss = css`
  width: ${changePXtoVW(23)};
  transform: translateX(${changePXtoVW(1)});
`;

const arrowCss = css`
  width: ${changePXtoVW(15)};
  cursor: pointer;

  > svg {
    max-width: 100%;
  }
`;

const htmlCss = css`
  color: ${colorPalette.black};
`;

const audioCss = css`
  width: ${changePXtoVW(48)};
  height: ${changePXtoVW(48)};
  margin-left: ${changePXtoVW(8)};
`;

interface SentenceBubbleComponentProps {
  sentences: SentenceWord[];
  containerCss?: SerializedStyles;
  currentBubbleSentenceIndex?: number;
  setCurrentBubbleSentenceIndex?: React.Dispatch<React.SetStateAction<number>>;
}

const SentenceBubbleComponent = ({
  sentences,
  containerCss,
  currentBubbleSentenceIndex = 0,
  setCurrentBubbleSentenceIndex,
}: SentenceBubbleComponentProps) => {
  const [isSentenceMoreOpen, setIsSentenceMoreOpen] = useState(false);
  const bubbleSentence = useMemo(() => {
    return (
      <>
        {setCurrentBubbleSentenceIndex && (
          <ArrowLeft
            disabled={!sentences[currentBubbleSentenceIndex - 1]}
            activeColor={colorPalette.black}
            customCss={arrowCss}
            onClickIcon={() => {
              if (sentences[currentBubbleSentenceIndex - 1]) {
                setCurrentBubbleSentenceIndex((prev) => prev - 1);
              }
            }}
          />
        )}
        <HtmlContentComponent
          html={sentences[currentBubbleSentenceIndex].text}
          customCss={htmlCss}
        />
        <HtmlContentComponent
          html={sentences[currentBubbleSentenceIndex].pronunciation}
          customCss={htmlCss}
        />
        <HtmlContentComponent
          html={sentences[currentBubbleSentenceIndex].meaning}
          customCss={htmlCss}
        />
        {sentences[currentBubbleSentenceIndex].audio && (
          <AudioButton
            isAudio={true}
            audioUrl={sentences[currentBubbleSentenceIndex].audio?.src}
            customCss={audioCss}
          />
        )}
        {setCurrentBubbleSentenceIndex && (
          <ArrowRight
            disabled={!sentences[currentBubbleSentenceIndex + 1]}
            activeColor={colorPalette.black}
            customCss={arrowCss}
            onClickIcon={() => {
              if (sentences[currentBubbleSentenceIndex + 1]) {
                setCurrentBubbleSentenceIndex((prev) => prev + 1);
              }
            }}
          />
        )}
      </>
    );
  }, [sentences, currentBubbleSentenceIndex, setCurrentBubbleSentenceIndex]);

  return (
    <BubbleContainer containerCss={containerCss}>
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
