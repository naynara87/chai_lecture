import styled from "@emotion/styled";
import { SpeakingContentData } from "chai-ui-v2";
import { DraggableContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlAndTimeInputWrapper from "../molecules/UrlAndTimeInputWrapper";

const SpeakingWrapper = styled.div`
  & .time-input-form {
    width: 140px;
    height: 44px;
    padding: 12px 13px;
    box-sizing: border-box;
    margin-right: 4px;
    border-radius: 8px;
    font-size: 12px;
    border: 1px solid #b6b6b6;
    border: 1px solid #b6b6b6;
    &::placeholder {
      color: #b6b6b6;
    }
  }
`;

const SpeakingCreator = ({
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
  const thisContent = content as SpeakingContentData;

  const handleSubmitUrl = (url: string, time: number) => {
    const newContent = {
      ...thisContent,
      data: {
        src: url,
        speakingTime: time,
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
      <SpeakingWrapper onClick={(e) => setFocusedId(e, content.id)}>
        <UrlAndTimeInputWrapper typeText="오디오" onSubmit={handleSubmitUrl} />
      </SpeakingWrapper>
    </ContentCreatorLayout>
  );
};

export default SpeakingCreator;
