import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import React from "react";
import { Droppable } from "react-beautiful-dnd";

export const DashBoxAreaWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 2px dashed ${colorPalette.gray700};
  padding: 16px;
  position: relative;
  /* overflow-y: scroll; */
`;

interface DashBoxAreaProps {
  children: React.ReactNode;
  droppableId: string; // getDroppableId를 이용해서 전달하자
}

/**
 * 공통 템플릿이 아닌 경우 DashBoxArea를 새로 만들어서 그것을 사용하자
 * - 또는 DashBoxAreaWrapper만 사용하자
 * - 공통 템플릿 : Template01, TemplateH37, TemplateH55
 */
const DashBoxArea = ({ children, droppableId }: DashBoxAreaProps) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <DashBoxAreaWrapper
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {provided.placeholder}
          {children}
        </DashBoxAreaWrapper>
      )}
    </Droppable>
  );
};

export default DashBoxArea;
