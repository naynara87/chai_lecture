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
  const handleDeleteComponent = () => {
    deleteContent(currentSlide.id, content.id, position);
  };
  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      onDeleteComponent={handleDeleteComponent}
      align="center"
    >
      <WordsCarousel />
    </ContentCreatorLayout>
  );
};

export default WordsCarouselModalCreator;
