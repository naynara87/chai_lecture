import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { ControlCameraOutlined } from "@mui/icons-material";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import CreatePlusBox from "../pages/CreatePlusBox";
import { TP16LayoutWrapper } from "chai-ui";

interface DropBoxProps {
  customCss?: SerializedStyles;
  isLong?: boolean;
}

const longCss = css`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const DropBox = styled.div<DropBoxProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-y: auto;

  ${(props) => props.customCss}
  ${(props) => props.isLong && longCss}
`;

const DragBox = styled.div`
  height: 100%;
`;

const overCss = css`
  border: 1px dashed black;
`;

interface TP16LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP16Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP16LayoutProps) => {
  const contents = useMemo(() => {
    return Array(3)
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
                isLong={index === 2}
              >
                {componentList[index] === undefined ||
                componentList[index] === null ? (
                  <CreatePlusBox
                    componentIndex={index}
                    setComponentIndex={setComponentIndex}
                  />
                ) : (
                  <Draggable
                    draggableId={`content${index}`}
                    key={`content${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <DragBox
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
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
  }, [
    componentList,
    components,
    setComponentIndex,
    contentsContextMenuRef,
    handleFocusHtml,
  ]);
  return (
    <TP16LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP16LayoutWrapper>
  );
};

export default CreateTP16Layout;
