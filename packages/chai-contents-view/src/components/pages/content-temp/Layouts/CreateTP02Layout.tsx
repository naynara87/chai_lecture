import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import CreatePlusBox from "../CreatePlusBox";
import { ControlCameraOutlined } from "@mui/icons-material";
import { TP02LayoutStyle } from "chai-ui";
import { useCreateLayoutMapperProps } from "../../../../hooks/contentCreate/useCreateLayoutMapper";

interface DropBoxProps {
  customCss?: SerializedStyles;
}

const DropBox = styled.div<DropBoxProps>`
  ${(props) => props.customCss}
`;

const overCss = css`
  border: 1px dashed black;
`;

const ContentWrapper = styled.div`
  display: block;
  height: 100%;
`;

const layoutCss = css`
  display: block;
  height: 100%;
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
                {componentList[index] === undefined || componentList[index] === null ? (
                  <CreatePlusBox componentIndex={index} setComponentIndex={setComponentIndex} />
                ) : (
                  <Draggable draggableId={`content${index}`} key={`content${index}`} index={index}>
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
  }, [componentList, components, setComponentIndex, contentsContextMenuRef, handleFocusHtml]);
  return (
    <TP02LayoutStyle id={id} customCss={layoutCss}>
      {/* 컴포넌트가 추가되는 영역 */}
      <ContentWrapper>{contents}</ContentWrapper>
    </TP02LayoutStyle>
  );
};

export default CreateTP02Layout;
