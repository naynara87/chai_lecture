import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import { DraggableContentCommonProps } from "../../types/page";
import WordsCarousel from "../molecules/WordsCarousel";

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
      <WordsCarousel />
    </ContentCreatorLayout>
  );
};

export default WordsCarouselModalCreator;
