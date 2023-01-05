import React, { useMemo } from "react";
import styled from "@emotion/styled";
import ModalCommon from "./ModalCommon";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { SentenceWord } from "../../types/templateContents";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { css } from "@emotion/react";
import XIcon from "../atoms/svg/XIcon";

interface ModalSentencesProps {
  sentences: SentenceWord[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalInnerBox = styled.div`
  overflow: hidden;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${changePXtoVW(1032)};
  height: ${changePXtoVW(682)};
  padding-bottom: ${changePXtoVH(48)};
  border-radius: ${changePXtoVW(40)};
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18%;
  background-color: ${colorPalette.deepBlue};
  font-weight: 700;
  font-size: ${changePXtoVW(48)};
  color: ${colorPalette.white};
`;

interface ModalContentProps {
  sentenceLength: number;
}

const ModalContent = styled.div<ModalContentProps>`
  overflow-y: auto;
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(${(props) => props.sentenceLength}, max-content);
  width: 100%;
  height: 82%;
  padding: ${changePXtoVW(50)};
`;

const Sentence = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto ${changePXtoVW(20)};
  padding: ${changePXtoVW(10)} ${changePXtoVW(40)} 0;
  font-weight: 400;
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
  width: auto;
  font-weight: 500;
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.descriptionText};
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 2%;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${colorPalette.backgroundWhite};
  cursor: pointer;
`;

const xIconCss = css`
  transform: scale(0.4);
`;

const ModalSentences = ({ isModalOpen, setIsModalOpen, sentences }: ModalSentencesProps) => {
  // const audioRef = useRef<HTMLAudioElement>(null);
  // const { audioIndex, handleClickAudioButton, audioSrc } = useAudio(audioRef);

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
          {/* <AudioButton
            isAudio={false}
            audioUrl={sentence.audio?.src}
            currentAudioIndex={audioIndex}
            audioIndex={index}
            audioHandler={handleClickAudioButton}
            customCss={audioCss}
          /> */}
        </Sentence>
      );
    });
  }, [sentences]);

  return (
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      <ModalInnerBox>
        <ModalHeader>
          전체단어
          <IconWrapper
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <XIcon css={xIconCss} color={colorPalette.deepBlue} />
          </IconWrapper>
        </ModalHeader>
        <ModalContent sentenceLength={sentences.length}>{sentencesContents}</ModalContent>
      </ModalInnerBox>
      {/* <audio ref={audioRef}>
        <source src={audioSrc} />
      </audio> */}
    </ModalCommon>
  );
};

export default ModalSentences;
