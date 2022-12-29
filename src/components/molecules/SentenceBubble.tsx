import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { footerHeightNormal } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import { SentenceWord } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import AudioButton from "../atoms/AudioButton";
import XIcon from "../atoms/svg/XIcon";
import HtmlContentComponent from "./HtmlContentComponent";

interface BubbleContainerProps {
  containerCss?: SerializedStyles;
  open: boolean;
}

const BubbleContainer = styled.div<BubbleContainerProps>`
  ${(props) => props.containerCss}

  z-index: 5;
  position: fixed;
  top: auto;
  bottom: calc(${footerHeightNormal} + ${(props) => (props.open ? "100px" : "40px")});
  left: 50%;
  display: flex;
  justify-content: flex-start;
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
  display: flex;
  justify-content: ${(props) => (props.open ? "flex-start" : "center")};
  align-items: center;
  gap: ${changePXtoVW(20)};
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.deepBlue};
  cursor: ${(props) => !props.open && "pointer"};
`;

const SentenceBubble = styled.div<SentenceBubbleProps>`
  position: absolute;
  right: ${changePXtoVW(0)};
  width: ${(props) => (props.open ? "100%" : changePXtoVW(200))};
  height: ${(props) => (props.open ? changePXtoVH(216) : changePXtoVW(64))};
  padding: 0 ${(props) => props.open && changePXtoVW(50)};
  border: 2px solid
  ${(props) => (props.open ? colorPalette.grayf7 : colorPalette.deepBlue)};
  border-radius: ${(props) => (props.open ? "0px" : "48px")};
  background-color: ${(props) =>
    props.open ? colorPalette.grayf7 : colorPalette.backgroundWhite};
  transition: all 0.3s ease;
`;

const Sentence = styled.div`
  font-weight: 700;
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.sentenceBubble};
`;

const xIconCss = css`
  width: ${changePXtoVW(30)};
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
  font-weight: 400;
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.black};
`;

const audioCss = css`
  width: ${changePXtoVW(48)};
  height: ${changePXtoVW(48)};
  margin-left: ${changePXtoVW(8)};
`;

const XIconWrapper = styled.div`
  position: absolute;
  right: 2%;
  top: 50%;
  display: flex;
  justify-content: center;
  width: ${changePXtoVW(64)};
  height: ${changePXtoVW(64)};
  border-radius: 50%;
  background-color: ${colorPalette.deepBlue};
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-50%);
  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${changePXtoVH(20)};
`;

const SentenceWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: ${changePXtoVW(20)};
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
    return sentences.map((sentence, index) => {
      return (
        <SentenceWrapper key={index}>
          <HtmlContentComponent html={sentence.text} customCss={htmlCss} />
          <HtmlContentComponent html={sentence.pronunciation} customCss={htmlCss} />
          <HtmlContentComponent html={sentence.meaning} customCss={htmlCss} />
          {sentence.audio && (
            <AudioButton isAudio={true} audioUrl={sentence.audio?.src} customCss={audioCss} />
          )}
        </SentenceWrapper>
      );
    });

    // {
    //   setCurrentBubbleSentenceIndex && (
    //     <ArrowLeft
    //       disabled={!sentences[currentBubbleSentenceIndex - 1]}
    //       activeColor={colorPalette.black}
    //       customCss={arrowCss}
    //       onClickIcon={() => {
    //         if (sentences[currentBubbleSentenceIndex - 1]) {
    //           setCurrentBubbleSentenceIndex((prev) => prev - 1);
    //         }
    //       }}
    //     />
    //   );
    // }
    //  {setCurrentBubbleSentenceIndex && (
    //       <ArrowRight
    //         disabled={!sentences[currentBubbleSentenceIndex + 1]}
    //         activeColor={colorPalette.black}
    //         customCss={arrowCss}
    //         onClickIcon={() => {
    //           if (sentences[currentBubbleSentenceIndex + 1]) {
    //             setCurrentBubbleSentenceIndex((prev) => prev + 1);
    //           }
    //         }}
    //       />
    //     )}
  }, [sentences]);

  return (
    <BubbleContainer open={isSentenceMoreOpen} containerCss={containerCss}>
      <SentenceBubble open={isSentenceMoreOpen}>
        <BubbleText
          open={isSentenceMoreOpen}
          onClick={() => {
            setIsSentenceMoreOpen(true);
          }}
        >
          {isSentenceMoreOpen && <Sentence>단어</Sentence>}
          <TextWrapper>{isSentenceMoreOpen ? bubbleSentence : "단어보기"}</TextWrapper>
        </BubbleText>
        {isSentenceMoreOpen && (
          <XIconWrapper
            onClick={() => {
              setIsSentenceMoreOpen(false);
            }}
          >
            <XIcon color={colorPalette.backgroundWhite} css={xIconCss} />
          </XIconWrapper>
        )}
      </SentenceBubble>
    </BubbleContainer>
  );
};

export default SentenceBubbleComponent;
