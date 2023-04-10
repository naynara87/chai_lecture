import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import { DraggableContentCommonProps } from "../../types/page";
import WordsCarousel from "../molecules/WordsCarousel";
import { useCallback, useEffect, useState } from "react";
import { useToast, WordsCarouselContentData } from "chai-ui-v2";
import "swiper/css";
import "swiper/css/pagination";
import { cloneDeep } from "lodash";

const WordsCarouselModalCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  deleteContent,
  copyContent,
  pasteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const thisContent = content as WordsCarouselContentData;

  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();

  const { addToast } = useToast();

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
          ...thisContent.data,
          words: thisContent.data.words.map((word, wordsIndex) => {
            if (wordsIndex === index) {
              return {
                ...word,
                word: text,
              };
            }
            return word;
          }),
        },
      };
      updateContent(currentSlide.id, content.id, position, newContent);
    },
    [content.id, currentSlide.id, position, thisContent, updateContent],
  );

  const setAudioUrl = useCallback(
    (index: number) => (url: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          words: thisContent.data.words.map((audio, audioIndex) => {
            if (audioIndex === index) {
              return {
                ...audio,
                audio: {
                  src: url,
                },
              };
            }
            return audio;
          }),
        },
      };
      updateContent(currentSlide.id, content.id, position, newContent);
    },
    [content.id, currentSlide.id, position, thisContent, updateContent],
  );

  const setSoundEffect = (url: string) => {
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
  };

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

  const deleteImage = (index: number) => {
    if (thisContent.data.words.length === 1) {
      addToast("최소 1개이상 입력하셔야 합니다.", "info");
      return;
    }

    const newContent = {
      ...thisContent,
      data: {
        words: thisContent.data.words.filter(
          (_, dataIndex) => dataIndex !== index,
        ),
      },
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      align="center"
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <WordsCarousel
        wordsCarouselData={thisContent.data}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setText={setText}
        focusTextEditor={focusTextEditor}
        isTextEditorFocused={isTextEditorFocused}
        addCard={addCard}
        setSoundEffect={setSoundEffect}
        setAudioUrl={setAudioUrl}
        deleteImage={deleteImage}
      />
    </ContentCreatorLayout>
  );
};

export default WordsCarouselModalCreator;
