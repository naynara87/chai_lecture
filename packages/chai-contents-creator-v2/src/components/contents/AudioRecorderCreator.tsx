import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import IconMic from "chai-ui-v2/dist/assets/images/icon/icon_mic.svg";
import { DraggableContentCommonProps } from "../../types/page";

const AudioRecorderCreator = ({
  content,
  deleteContent,
  copyContent,
  pasteContent,
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
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <div className="recorder-wrapper">
        <img src={IconMic} alt="" />
        <p>녹음을 시작해 보세요.</p>
      </div>
    </ContentCreatorLayout>
  );
};

export default AudioRecorderCreator;
