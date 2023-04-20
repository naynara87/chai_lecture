import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import IconMic from "chai-ui-v2/dist/assets/images/icon/icon_mic.svg";
import { DraggableContentCommonProps } from "../../types/page";

export const RecorderWrapper = styled.div`
  display: flex;
  padding: 0 24px;
  width: 200px;
  height: 50px;
  line-height: 50px;
  border-radius: 8px;
  border: 2px solid #dce6ff;
  align-items: center;
  & img {
    width: 24px;
    height: 24px;
    box-shadow: 0px 6px 0px rgba(88, 88, 88, 0.2);
    border-radius: 6px;
    margin-right: 20px;
    cursor: pointer;
  }
  & p {
    font-size: 12px;
  }
`;

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
      <RecorderWrapper>
        <img src={IconMic} alt="" />
        <p>녹음을 시작해 보세요</p>
      </RecorderWrapper>
    </ContentCreatorLayout>
  );
};

export default AudioRecorderCreator;
