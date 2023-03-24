import { RecorderWrapper } from "./AudioRecorderCreator";
import IconMic from "chai-ui-v2/dist/assets/images/icon/icon_mic.svg";
import styled from "@emotion/styled";
import { DraggableContentCommonProps } from "../../types/page";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ComponentGrayLineCreator from "../molecules/ComponentGrayLineCreator";
import { FinalSpeakingContentData } from "chai-ui-v2";
import useGrayLineComponent from "../../hooks/useGrayLineComponent";
import ExampleContentsCreator from "../molecules/ExampleContentsCreator";
import { useCallback } from "react";

const FinalSpeakingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const FinalSpeakingContentCreator = ({
  content,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  isEditBtn,
  deleteContent,
  updateContentToFinalSpeakingTemplate,
  isFocused,
  setFocusedId,
}: DraggableContentCommonProps) => {
  const thisContent = content as FinalSpeakingContentData;

  const { addComponent, updateComponent, deleteComponent, handleOnDragEnd } =
    useGrayLineComponent({
      content: thisContent,
      currentSlide,
      updateContentToTemplate: updateContentToFinalSpeakingTemplate,
    });

  const setText = useCallback(
    (text: string) => {
      const newContent = {
        ...thisContent,
        data: {
          ...thisContent.data,
          answerModel: text,
        },
      };
      updateContentToFinalSpeakingTemplate &&
        updateContentToFinalSpeakingTemplate(currentSlide.id, newContent);
    },
    [thisContent, updateContentToFinalSpeakingTemplate, currentSlide.id],
  );

  const getText = useCallback(() => {
    return thisContent.data.answerModel ?? "";
  }, [thisContent.data]);

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      isEditBtn={isEditBtn}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      align="center"
    >
      <FinalSpeakingContentWrapper>
        <ComponentGrayLineCreator
          contents={thisContent.data.exampleContents ?? []}
          addComponent={addComponent}
          currentSlide={currentSlide}
          position={position}
          updateComponent={updateComponent}
          deleteComponent={deleteComponent}
          handleOnDragEnd={handleOnDragEnd}
        />
        {/* TODO: ComponentGrayLineCreator 들어올 영역 */}
        <RecorderWrapper>
          <img src={IconMic} alt="" />
          <p>녹음을 시작해보세요</p>
        </RecorderWrapper>
        <div onClick={(e) => setFocusedId(e, thisContent.id)}>
          <ExampleContentsCreator
            setText={setText}
            getText={getText}
            isFocused={isFocused}
          />
        </div>
      </FinalSpeakingContentWrapper>
    </ContentCreatorLayout>
  );
};

export default FinalSpeakingContentCreator;
