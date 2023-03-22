import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import { DraggableContentCommonProps } from "../../types/page";
import WordsCarousel from "../molecules/WordsCarousel";
import { useCallback, useEffect, useMemo, useState } from "react";
import { WordsCarouselContentData } from "chai-ui-v2";
import IconPlay from "chai-ui-v2/dist/assets/images/icon/icon_play.svg";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import TextEditorViewer from "../molecules/TextEditorViewer";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import styled from "@emotion/styled";
import { cloneDeep } from "lodash";

const WordsCardWrapper = styled.div`
  border-radius: 8px;
  padding: 40px 24px 24px;
  background-color: #f0f0f0;
  margin-bottom: 16px;
  position: relative;
  .btn-delete {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .words-card-text {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  .icon-play {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
  }
`;

const SlideCard = styled.div`
  background-color: #eeeeee;
  border-radius: 10px;
  color: black;
`;

const WordsCarouselModalCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  deleteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const thisContent = content as WordsCarouselContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();

  const focusTextEditor = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      setFocusedId(e, content.id);
      setFocusedTextEditorIndex(index);
    },
    [setFocusedId, content.id],
  );

  const resetFocusedTextEditor = useCallback(() => {
    setFocusedTextEditorIndex(undefined);
  }, []);

  const isTextEditorFocused = useCallback(
    (index: number) => {
      return isFocused && focusedTextEditorIndex === index;
    },
    [isFocused, focusedTextEditorIndex],
  );

  useEffect(() => {
    window.addEventListener("click", resetFocusedTextEditor);
    return () => {
      window.removeEventListener("click", resetFocusedTextEditor);
    };
  }, [resetFocusedTextEditor]);

  const setText = useCallback(
    (index: number) => (text: string) => {
      const newContent = {
        ...thisContent,
        data: {
          words: thisContent.data.words.map((words, wordsIndex) => {
            if (wordsIndex === index) {
              return {
                ...words,
                word: text,
              };
            }
            return words;
          }),
        },
      };
      updateContent(currentSlide.id, content.id, position, newContent);
    },
    [content.id, currentSlide.id, position, thisContent, updateContent],
  );

  const handleSubmitUrl = useCallback(
    (url: string) => {
      const newContent = {
        ...thisContent,
        data: {
          words: {
            ...thisContent.data.words,
            audio: {
              src: url,
            },
          },
        },
      };
      updateContent(currentSlide.id, content.id, position, newContent);
    },
    [content.id, currentSlide.id, position, thisContent, updateContent],
  );

  const handleSubmitSoundEffect = useCallback(
    (url: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          soundEffect: {
            src: url,
          },
        },
      };
      updateContent(currentSlide.id, content.id, position, newContent);
    },
    [content.id, currentSlide.id, position, thisContent, updateContent],
  );

  const addCard = () => {
    const newContent: WordsCarouselContentData = cloneDeep(thisContent);
    newContent.data.words.push({
      word: "",
      audio: {
        src: "",
      },
    });
    updateContent(currentSlide.id, thisContent.id, position, newContent);
  };

  const slideContents = useMemo(() => {
    return thisContent.data.words.map((word, wordIndex) => {
      return (
        <SwiperSlide key={wordIndex}>
          <SlideCard>
            <WordsCardWrapper>
              <ObjectDeleteButton />
              <div
                onClick={focusTextEditor(wordIndex)}
                className="words-card-text"
              >
                <TextEditorViewer
                  isFocused={isTextEditorFocused(wordIndex)}
                  text={thisContent.data?.words[wordIndex].word ?? ""}
                  setText={setText(wordIndex)}
                  defaultText={
                    <p className="caption-text">텍스트를 입력해주세요</p>
                  }
                />
              </div>
              <div>
                <img src={IconPlay} alt="" className="icon-play" />
                <UrlInputWrapper
                  typeText="오디오"
                  onSubmit={handleSubmitUrl}
                ></UrlInputWrapper>
              </div>
            </WordsCardWrapper>
          </SlideCard>
        </SwiperSlide>
      );
    });
  }, [
    thisContent,
    isTextEditorFocused,
    setText,
    focusTextEditor,
    handleSubmitUrl,
  ]);

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      align="center"
    >
      <WordsCarousel
        content={content}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setText={setText}
        focusTextEditor={focusTextEditor}
        isTextEditorFocused={isTextEditorFocused}
        slideContents={slideContents}
        addCard={addCard}
        handleSubmitSoundEffect={handleSubmitSoundEffect}
      />
    </ContentCreatorLayout>
  );
};

export default WordsCarouselModalCreator;
