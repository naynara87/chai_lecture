import styled from "@emotion/styled";
import { BorderTextBoxContentData, colorPalette } from "chai-ui-v2";
import { DraggableContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import TextEditorViewer from "../molecules/TextEditorViewer";

const BorderTextBoxWrapper = styled.div`
  border: 1px solid ${colorPalette.gray800};
  width: 100%;

  border-radius: 20px;
  padding: 45px 60px;
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

  const handleDeleteComponent = () => {
    deleteContent(currentSlide.id, content.id, position);
  };

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      onDeleteComponent={handleDeleteComponent}
    >
      <BorderTextBoxWrapper onClick={(e) => setFocusedId(e, content.id)}>
        <TextEditorViewer
          isFocused={isFocused}
          text={thisContent.data.text}
          setText={setText}
        />
      </BorderTextBoxWrapper>
    </ContentCreatorLayout>
  );
};

export default BorderTextBoxCreator;
