import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { SentenceWord, StudySentencesWithVocabularyData } from "../../types/templateContents";
import ImageContentComponent from "./ImageContentComponent";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import OptionButton from "../atoms/OptionButton";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { css } from "@emotion/react";
import ModalSentences from "../modal/ModalSentences";
import ArrowRight from "../atoms/svg/ArrowRight";
import ArrowLeft from "../atoms/svg/ArrowLeft";
import SentenceBubbleComponent from "../molecules/SentenceBubble";

const SentencesOptionContainer = styled.div`
  width: ${changePXtoVW(630)};
  display: flex;
  justify-content: space-between;
  margin: 0 auto ${changePXtoVW(30)};
  height: auto;
`;

const LeftContainer = styled.div``;

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
  margin-bottom: ${changePXtoVW(10)};
`;

const OptionButtonWrapper = styled.div`
  display: flex;
  /* height: ${changePXtoVW(70)}; */
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  /* height: ${changePXtoVH(700)}; */
  /* overflow: auto; */
  font-size: ${changePXtoVW(48)};
  font-weight: 400;
  color: ${colorPalette.descriptionText};
  white-space: pre-line;
  text-align: left;
  padding: ${changePXtoVH(50)} 0;
`;

interface ChangeSentenceIndexButtonProps {
  isLast?: boolean;
}

const ChangeSentenceIndexButton = styled.div<ChangeSentenceIndexButtonProps>`
  cursor: ${(props) => (props.isLast ? "pointer" : "default")};
  margin-left: ${changePXtoVW(10)};
  display: flex;
  align-items: center;
  opacity: ${(props) => !props.isLast && 0.3};
`;

const ShowAllSentencesButton = styled.button`
  min-width: ${changePXtoVW(100)};
  height: ${changePXtoVW(48)};
  line-height: ${changePXtoVW(40)};
  padding: 0 ${changePXtoVW(48)};
  border: 3px solid ${colorPalette.sentenceAllButton};
  border-radius: ${changePXtoVW(28)};
  font-weight: 600;
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.sentenceAllButton};
  cursor: pointer;
`;

const optionButtonCss = css`
  min-width: ${changePXtoVW(200)};
`;

const optionIconCss = css`
  &.active {
    left: calc(100% - ${changePXtoVW(15)});
    transform: translateX(-100%) translateY(-50%);
  }
`;

const optionTextCss = css`
    left: calc(100% - ${changePXtoVW(30)});
    transform: translateX(-100%) translateY(-50%);
  &.active {
    left: ${changePXtoVW(30)};
    transform: translateY(-50%);
  }
`;

const htmlCss = css`
  margin-bottom: ${changePXtoVH(10)};
  line-height: 1.35;
`;

const imageCss = css`
  width: ${changePXtoVW(500)};
`;

const arrowCss = css`
  transform: scale(0.6);
  cursor: pointer;
`;

interface SentencesOptionProps {
  bgColor: string | false;
}

type LanguageType = "korean" | "chinese";

const SentencesOption = styled.button<SentencesOptionProps>`
  width: ${changePXtoVW(300)};
  height: ${changePXtoVW(72)};
  background-color: ${(props) => props.bgColor || colorPalette.disableBackground};
  border-radius: ${changePXtoVW(8)};
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
  const [languageOption, setLanguageOption] = useState<LanguageType>("chinese");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [texts, setTexts] = useState<string[]>([]);
  const [pronunciations, setPronunciations] = useState<string[]>([]);
  const [meanings, setMeanings] = useState<string[]>([]);
  const [words, setWords] = useState<SentenceWord[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            {languageOption === "chinese" && (
              <HtmlContentComponent html={sentence.text} customCss={htmlCss} />
            )}
            {languageOption === "korean" && (
              <HtmlContentComponent html={sentence.meaning} customCss={htmlCss} />
            )}
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
            text="중국어"
            active={languageOption === "chinese"}
            handleClickOption={() => {
              setLanguageOption("chinese");
            }}
          />
          <OptionButton
            customIconCss={optionIconCss}
            customWrapperCss={optionButtonCss}
            customTextCss={optionTextCss}
            text="한국어"
            active={languageOption === "korean"}
            handleClickOption={() => {
              setLanguageOption("korean");
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
          {sentencesOption === "one" && (
            <SentenceBubbleComponent
              sentences={sentences[currentSentenceIndex].words}
              currentBubbleSentenceIndex={currentBubbleSentenceIndex}
              setCurrentBubbleSentenceIndex={setCurrentBubbleSentenceIndex}
            />
          )}
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
