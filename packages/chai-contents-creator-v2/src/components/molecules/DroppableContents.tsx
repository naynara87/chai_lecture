import styled from "@emotion/styled";
import { Content } from "chai-ui-v2";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import useComponent from "../../hooks/useComponent";
import { ContentCommonProps } from "../../types/page";

const DroppableContainer = styled.div`
  min-height: 40px;
`;

interface DroppableContentsProps
  extends Omit<
    ContentCommonProps,
    "setFocusedId" | "isFocused" | "content" | "index"
  > {
  droppableId: string;
  contents: Content[];
}
const DroppableContents = ({
  droppableId,
  contents,
  currentSlide,
  position,
  updateContent,
  deleteContent,
  isDraggable,
}: DroppableContentsProps) => {
  const { getComponent, focusedId, setFocusedId } = useComponent();
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <DroppableContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {/* NOTE: MultilevelActionCardCreator에서 2차원 배열 중 원소가 0인 것이 생겼을 때
           * contents.map((content, index) => { ... })에서 에러가 발생합니다
           * 이를 방지하기 위해 contents?.map((content, index) => { ... }) 에 옵셔널 체이닝을 추가했습니다
           */}
          {contents?.map((content, index) => {
            return getComponent({
              index,
              currentSlide,
              content,
              isFocused: focusedId === content.id,
              setFocusedId,
              position,
              updateContent,
              deleteContent,
              isDraggable,
            });
          })}
          {provided.placeholder}
        </DroppableContainer>
      )}
    </Droppable>
  );
};

export default DroppableContents;
