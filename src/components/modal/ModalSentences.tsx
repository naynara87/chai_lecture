import React, { useMemo, useRef } from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { SentenceWord } from "../../types/templateContents";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { css } from "@emotion/react";
import AudioButton from "../atoms/AudioButton";
import useAudio from "../../hooks/useAudio";

interface ModalSentencesProps {
  sentences: SentenceWord[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalInnerBox = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${changePXtoVW(1032)};
  height: ${changePXtoVW(682)};
  padding-bottom: ${changePXtoVH(48)};
  border-radius: ${changePXtoVW(40)};
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 18%;
  background-color: ${colorPalette.deepBlue};
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorPalette.white};
  font-size: ${changePXtoVW(48)};
  font-weight: 700;
`;

interface ModalContentProps {
  sentenceLength: number;
}

const ModalContent = styled.div<ModalContentProps>`
  padding: ${changePXtoVW(50)};
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 82%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(${(props) => props.sentenceLength}, max-content);
  overflow-y: auto;
`;

const Sentence = styled.div`
  padding: ${changePXtoVW(10)} ${changePXtoVW(40)} 0;
  display: flex;
  font-weight: 400;

  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 0 auto ${changePXtoVW(20)};
`;

const textCss = css`
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.black};
`;

const pronunciationCss = css`
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.descriptionText};
`;

const meaningCss = css`
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.descriptionText};
  font-weight: 500;
  width: auto;
`;

const audioCss = css`
  width: ${changePXtoVW(40)};
  height: ${changePXtoVW(40)};
`;

const ModalSentences = ({ isModalOpen, setIsModalOpen, sentences }: ModalSentencesProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { audioIndex, handleClickAudioButton, audioSrc } = useAudio(audioRef);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const sentencesContents = useMemo(() => {
    return sentences.map((sentence, index) => {
      return (
        <Sentence key={index}>
          <HtmlContentComponent html={sentence.text} customCss={textCss} />
          <HtmlContentComponent html={sentence.pronunciation} customCss={pronunciationCss} />
          <HtmlContentComponent html={sentence.meaning} customCss={meaningCss} />
          <AudioButton
            isAudio={false}
            audioUrl={sentence.audio?.src}
            currentAudioIndex={audioIndex}
            audioIndex={index}
            audioHandler={handleClickAudioButton}
            customCss={audioCss}
          />
        </Sentence>
      );
    });
  }, [sentences, audioIndex, handleClickAudioButton]);

  return (
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <ModalInnerBox>
        <ModalHeader>전체단어</ModalHeader>
        <ModalContent sentenceLength={sentences.length}>{sentencesContents}</ModalContent>
      </ModalInnerBox>
      <audio ref={audioRef}>
        <source src={audioSrc} />
      </audio>
    </ModalCommon>
  );
};

export default ModalSentences;
