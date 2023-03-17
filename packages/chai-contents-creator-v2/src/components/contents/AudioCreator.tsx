import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AudioWrapper from "../molecules/AudioWrapper";
import { DraggableContentCommonProps } from "../../types/page";
import { AudioContentData } from "chai-ui-v2";

const AudioCreator = ({
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
  const thisContent = content as AudioContentData;

  const handleSubmitUrl = (url: string) => {
    const newContent = {
      ...thisContent,
      data: {
        src: url,
      },
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  const handleDeleteComponent = () => {
    deleteContent(currentSlide.id, content.id, position);
  };

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      onDeleteComponent={handleDeleteComponent}
    >
      <AudioWrapper onSubmit={handleSubmitUrl} />
    </ContentCreatorLayout>
  );
};

export default AudioCreator;
