import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TP01LayoutStyle } from "../../../Layouts/TP01Layout";
import CreatePlusBox from "../CreatePlusBox";
import { ControlCameraOutlined } from "@mui/icons-material";
import { useCreateLayoutMapperProps } from "../../../../hooks/contentCreate/useCreateLayoutMapper";

interface DropBoxProps {
  customCss?: SerializedStyles;
}

const DropBox = styled.div<DropBoxProps>`
  ${(props) => props.customCss}
`;

const DragBox = styled.div`
  height: 100%;
`;

const overCss = css`
  border: 1px dashed black;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 60% 38%;
`;

interface TP01LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP01Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP01LayoutProps) => {
  const contents = useMemo(() => {
    return Array(2)
      .fill("")
      .map((value, index) => {
        return (
          <Droppable droppableId={`componentList${index}`}>
            {(provided, snapshot) => (
              <DropBox
                className={`page-conts-wrap componentList${index}`}
                {...provided.droppableProps}
                ref={provided.innerRef}
                customCss={snapshot.isDraggingOver ? overCss : undefined}
                onContextMenu={() => {
                  contentsContextMenuRef.current = index;
                }}
                onClick={() => {
                  handleFocusHtml();
                }}
              >
                {componentList[index] === undefined || componentList[index] === null ? (
                  <CreatePlusBox componentIndex={index} setComponentIndex={setComponentIndex} />
                ) : (
                  <Draggable draggableId={`content${index}`} key={`content${index}`} index={index}>
                    {(provided) => (
                      <DragBox ref={provided.innerRef} {...provided.draggableProps}>
                        <div {...provided.dragHandleProps}>
                          <ControlCameraOutlined />
                        </div>
                        {components[index]}
                      </DragBox>
                    )}
                  </Draggable>
                )}
                {provided.placeholder}
              </DropBox>
            )}
          </Droppable>
        );
      });
  }, [componentList, components, setComponentIndex, contentsContextMenuRef, handleFocusHtml]);
  return (
    <TP01LayoutStyle id={id}>
      {/* 컴포넌트가 추가되는 영역 */}
      <ContentWrapper>{contents}</ContentWrapper>
    </TP01LayoutStyle>
  );
};

export default CreateTP01Layout;
