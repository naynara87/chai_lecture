import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { SentenceWord, StudySentencesWithVocabularyData } from "../../types/templateContents";
import ImageContentComponent from "./ImageContentComponent";
import { changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import OptionButton from "../atoms/OptionButton";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { css } from "@emotion/react";
import ModalSentences from "../modal/ModalSentences";
import IconSentenceCharacter from "../atoms/svg/IconSentenceCharacter";
import IconTail from "../atoms/svg/IconTail";
import ArrowRight from "../atoms/svg/ArrowRight";
import XIcon from "../atoms/svg/XIcon";
import ArrowLeft from "../atoms/svg/ArrowLeft";

const SentencesOptionContainer = styled.div`
  width: ${changePXtoVW(630)};
  display: flex;
  justify-content: space-between;
  margin: 0 auto ${changePXtoVW(30)};
  height: auto;
`;

const LeftContainer = styled.div``;

const BubbleContainer = styled.div`
  display: flex;
  width: ${changePXtoVW(360)};
  margin: 10px auto 0;
  position: relative;
`;

interface SentenceBubbleProps {
  open: boolean;
}

const SentenceBubble = styled.div<SentenceBubbleProps>`
  width: ${(props) => (props.open ? changePXtoVW(670) : changePXtoVW(130))};
  height: ${changePXtoVW(130)};
  border-radius: ${(props) => (props.open ? "25px" : "50%")};
  background-color: ${colorPalette.sentenceBubble};
  position: absolute;
  right: 0;
  transform: ${(props) => props.open && `translateX(${changePXtoVW(550)})`};
  transition: all 0.3s ease-in;
  margin-left: 20px;
`;

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

const BubbleMoreIcon = styled.button`
  position: absolute;
  width: ${changePXtoVW(40)};
  height: ${changePXtoVW(40)};
  border-radius: 50%;
  top: 0;
  transform: translateY(100%) translateX(40%);
  right: 0;
  background-color: white;
  cursor: pointer;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 56%;
  gap: 4%;
  align-items: flex-start;
`;

const SentenceWrapper = styled.div``;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const OptionButtonWrapper = styled.div`
  display: flex;
  height: ${changePXtoVW(70)};
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: ${changePXtoVW(350)};
  font-size: ${changePXtoVW(48)};
  font-weight: 400;
  color: ${colorPalette.descriptionText};
  white-space: pre-wrap;
  text-align: left;
`;

interface ChangeSentenceIndexButtonProps {
  isLast?: boolean;
}

const ChangeSentenceIndexButton = styled.div<ChangeSentenceIndexButtonProps>`
  cursor: ${(props) => (props.isLast ? "pointer" : "default")};
  margin-left: 10px;
  display: flex;
  align-items: center;
  opacity: ${(props) => !props.isLast && 0.3};
`;

const ShowAllSentencesButton = styled.button`
  width: 108px;
  height: 30px;
  border: 3px solid ${colorPalette.sentenceAllButton};
  border-radius: 28px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
  color: ${colorPalette.sentenceAllButton};
`;

const optionButtonCss = css`
  width: 100px;
`;

const optionIconCss = css`
  &.active {
    left: 65px;
  }
`;

const optionTextCss = css`
  &.active {
    right: 50px;
  }
`;

const htmlCss = css`
  margin-bottom: 10px;
  line-height: 1.35;
`;

const imageCss = css`
  width: ${changePXtoVW(500)};
`;

const arrowCss = css`
  transform: scale(0.6);
  cursor: pointer;
`;

const bubbleArrowCss = css`
  transform: scale(0.6);
  cursor: pointer;
`;

const xIconCss = css`
  transform: scale(0.4);
`;

interface SentencesOptionProps {
  bgColor: string | false;
}

const SentencesOption = styled.button<SentencesOptionProps>`
  width: ${changePXtoVW(300)};
  height: ${changePXtoVW(72)};
  background-color: ${(props) => props.bgColor || colorPalette.disableBackground};
  border-radius: 8px;
  color: ${colorPalette.white};
  font-size: ${changePXtoVW(30)};
  cursor: pointer;
`;

interface StudySentencesWithVocabularyProps {
  studySentencesWithVocabularyDatas: StudySentencesWithVocabularyData[];
}

type SentenceOption = "all" | "one";

const StudySentencesWithVocabulary = ({
  studySentencesWithVocabularyDatas,
}: StudySentencesWithVocabularyProps) => {
  const { sentences, image } = studySentencesWithVocabularyDatas?.[0];
  const [sentencesOption, setSentencesOption] = useState<SentenceOption>("all");
  const [languageOption, setLanguageOption] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [texts, setTexts] = useState<string[]>([]);
  const [pronunciations, setPronunciations] = useState<string[]>([]);
  const [meanings, setMeanings] = useState<string[]>([]);
  const [words, setWords] = useState<SentenceWord[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSentenceMoreOpen, setIsSentenceMoreOpen] = useState(false);
  const [currentBubbleSentenceIndex, setCurrentBubbleSentenceIndex] = useState(0);

  const firstSetting = useCallback(() => {
    sentences.forEach((sentence, index) => {
      setTexts((prev) => [...prev, sentence.text]);
      setPronunciations((prev) => [...prev, sentence.pronunciation]);
      setMeanings((prev) => [...prev, sentence.meaning]);
      sentence.words.forEach((word) => {
        setWords((prev) => [...prev, word]);
      });
    });
  }, [sentences]);

  useEffect(() => {
    firstSetting();
  }, [firstSetting]);

  const handleClickSentencesOptionButton = (sentencesType: SentenceOption) => {
    setSentencesOption(sentencesType);
  };

  const handleClickNextSentenceButton = useCallback(() => {
    if (sentences[currentSentenceIndex + 1]) {
      setCurrentBubbleSentenceIndex(0);
      setCurrentSentenceIndex((prev) => prev + 1);
    }
  }, [currentSentenceIndex, sentences]);

  const handleClickPrevSentenceButton = useCallback(() => {
    if (sentences[currentSentenceIndex - 1]) {
      setCurrentBubbleSentenceIndex(0);
      setCurrentSentenceIndex((prev) => prev - 1);
    }
  }, [currentSentenceIndex, sentences]);

  const renderText = useMemo(() => {
    if (sentencesOption === "one") {
      return (
        <>
          <HtmlContentComponent html={texts[currentSentenceIndex]} customCss={htmlCss} />
          <HtmlContentComponent html={pronunciations[currentSentenceIndex]} customCss={htmlCss} />
          <HtmlContentComponent html={meanings[currentSentenceIndex]} />
        </>
      );
    }
    if (sentencesOption === "all") {
      return sentences.map((sentence, index) => {
        return (
          <div key={index}>
            <HtmlContentComponent html={sentence.text} customCss={htmlCss} />
            {languageOption && <HtmlContentComponent html={sentence.meaning} customCss={htmlCss} />}
          </div>
        );
      });
    }
  }, [
    texts,
    meanings,
    currentSentenceIndex,
    pronunciations,
    sentencesOption,
    sentences,
    languageOption,
  ]);

  const renderTextOption = useMemo(() => {
    if (sentencesOption === "all") {
      return (
        <OptionButtonWrapper>
          <OptionButton
            customIconCss={optionIconCss}
            customWrapperCss={optionButtonCss}
            customTextCss={optionTextCss}
            text="한국어"
            active={languageOption}
            handleClickOption={() => {
              setLanguageOption(!languageOption);
            }}
          />
        </OptionButtonWrapper>
      );
    } else {
      return (
        <OptionButtonWrapper>
          <ChangeSentenceIndexButton
            isLast={!!sentences[currentSentenceIndex - 1]}
            onClick={handleClickPrevSentenceButton}
          >
            <ArrowLeft customCss={arrowCss} />
            이전 문장
          </ChangeSentenceIndexButton>
          <ChangeSentenceIndexButton
            isLast={!!sentences[currentSentenceIndex + 1]}
            onClick={handleClickNextSentenceButton}
          >
            다음 문장
            <ArrowRight customCss={arrowCss} />
          </ChangeSentenceIndexButton>
        </OptionButtonWrapper>
      );
    }
  }, [
    languageOption,
    sentencesOption,
    handleClickNextSentenceButton,
    handleClickPrevSentenceButton,
    sentences,
    currentSentenceIndex,
  ]);

  const bubbleSentence = useMemo(() => {
    return (
      <>
        <ArrowLeft
          disabled={!sentences[currentSentenceIndex].words[currentBubbleSentenceIndex - 1]}
          activeColor={colorPalette.white}
          customCss={bubbleArrowCss}
          onClickIcon={() => {
            if (sentences[currentSentenceIndex].words[currentBubbleSentenceIndex - 1]) {
              setCurrentBubbleSentenceIndex((prev) => prev - 1);
            }
          }}
        />
        <HtmlContentComponent
          html={sentences[currentSentenceIndex].words[currentBubbleSentenceIndex].text}
        />
        <HtmlContentComponent
          html={sentences[currentSentenceIndex].words[currentBubbleSentenceIndex].pronunciation}
        />
        <HtmlContentComponent
          html={sentences[currentSentenceIndex].words[currentBubbleSentenceIndex].meaning}
        />
        <ArrowRight
          disabled={!sentences[currentSentenceIndex].words[currentBubbleSentenceIndex + 1]}
          activeColor={colorPalette.white}
          customCss={arrowCss}
          onClickIcon={() => {
            if (sentences[currentSentenceIndex].words[currentBubbleSentenceIndex + 1]) {
              setCurrentBubbleSentenceIndex((prev) => prev + 1);
            }
          }}
        />
      </>
    );
  }, [sentences, currentBubbleSentenceIndex, currentSentenceIndex]);

  const renderBubble = useMemo(() => {
    return (
      <BubbleContainer>
        <IconSentenceCharacter />
        {!isSentenceMoreOpen && <IconTail color={colorPalette.sentenceBubble} />}
        <SentenceBubble open={isSentenceMoreOpen}>
          <BubbleText open={isSentenceMoreOpen}>
            {isSentenceMoreOpen ? bubbleSentence : "단어"}
          </BubbleText>
          <BubbleMoreIcon
            onClick={() => {
              setIsSentenceMoreOpen(!isSentenceMoreOpen);
            }}
          >
            {isSentenceMoreOpen ? (
              <XIcon css={xIconCss} color={colorPalette.black} />
            ) : (
              <ArrowRight customCss={arrowCss} />
            )}
          </BubbleMoreIcon>
        </SentenceBubble>
      </BubbleContainer>
    );
  }, [bubbleSentence, isSentenceMoreOpen]);

  return (
    <>
      <SentencesOptionContainer>
        <SentencesOption
          bgColor={sentencesOption === "all" && colorPalette.deepBlue}
          onClick={() => {
            handleClickSentencesOptionButton("all");
          }}
        >
          전체 문장 보기
        </SentencesOption>
        <SentencesOption
          bgColor={sentencesOption === "one" && colorPalette.deepBlue}
          onClick={() => {
            handleClickSentencesOptionButton("one");
          }}
        >
          한 문장씩 보기
        </SentencesOption>
      </SentencesOptionContainer>
      <RightContainer>
        <LeftContainer>
          <ImageContentComponent
            imageSrc={image.src}
            imageAlt={image.src}
            filter="none"
            customCss={imageCss}
          />
          {sentencesOption === "one" && renderBubble}
        </LeftContainer>

        <SentenceWrapper>
          <OptionContainer>
            <ShowAllSentencesButton
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              단어 전체보기
            </ShowAllSentencesButton>
            {renderTextOption}
          </OptionContainer>
          <TextContainer>{renderText}</TextContainer>
        </SentenceWrapper>
      </RightContainer>
      <ModalSentences sentences={words} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default StudySentencesWithVocabulary;
