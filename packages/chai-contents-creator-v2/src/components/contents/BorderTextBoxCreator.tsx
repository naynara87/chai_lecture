import styled from "@emotion/styled";
import { BorderTextBoxContentData, colorPalette } from "chai-ui-v2";
import { DraggableContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import TextEditorViewer from "../molecules/TextEditorViewer";

const BorderTextBoxWrapper = styled.div`
  border: min(2px, 0.1vmin) solid ${colorPalette.gray800};
  width: 100%;
  max-width: calc(100% - 46px);
  border-radius: 20px;
  padding: 2vmin;
  text-align: left;
`;

/**
 * CH-01-04 학습 목표
 */
const BorderTextBoxCreator = ({
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
  const thisContent = content as BorderTextBoxContentData;

  const setText = (text: string) => {
    const newContent = {
      ...thisContent,
      data: {
        text,
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
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <BorderTextBoxWrapper onClick={(e) => setFocusedId(e, content.id)}>
        <TextEditorViewer
          isFocused={isFocused}
          text={thisContent.data.text}
          setText={setText}
          hasFontSize={false}
        />
      </BorderTextBoxWrapper>
    </ContentCreatorLayout>
  );
};

export default BorderTextBoxCreator;
