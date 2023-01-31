import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { ControlCameraOutlined } from "@mui/icons-material";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import CreatePlusBox from "../pages/CreatePlusBox";
import { TP02LayoutWrapper } from "chai-ui";

interface DropBoxProps {
  customCss?: SerializedStyles;
}

const DropBox = styled.div<DropBoxProps>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  ${(props) => props.customCss}
`;

const overCss = css`
  border: 1px dashed black;
`;

interface TP02LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP02Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  contentsContextMenuRef,
  handleFocusHtml,
}: TP02LayoutProps) => {
  const contents = useMemo(() => {
    return Array(1)
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
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <div {...provided.dragHandleProps}>
                          <ControlCameraOutlined />
                        </div>
                        {components[index]}
                      </div>
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
    <TP02LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP02LayoutWrapper>
  );
};

export default CreateTP02Layout;
