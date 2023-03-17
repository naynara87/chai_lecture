import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AudioWrapper from "../molecules/AudioWrapper";
import { DraggableContentCommonProps } from "../../types/page";
import { AudioContentData } from "chai-ui-v2";

const AudioCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
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

  console.log("thisContent", thisContent);
  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
    >
      <AudioWrapper onSubmit={handleSubmitUrl} />
    </ContentCreatorLayout>
  );
};

export default AudioCreator;
