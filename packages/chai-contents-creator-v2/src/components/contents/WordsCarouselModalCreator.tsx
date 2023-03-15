import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import { DraggableContentCommonProps } from "../../types/page";
import WordsCarousel from "../molecules/WordsCarousel";

const WordsCarouselModalCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      align="center"
    >
      <WordsCarousel />
    </ContentCreatorLayout>
  );
};

export default WordsCarouselModalCreator;
