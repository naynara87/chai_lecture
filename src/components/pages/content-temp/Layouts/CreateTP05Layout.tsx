import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import CreatePlusBox from "../CreatePlusBox";
import { ControlCameraOutlined } from "@mui/icons-material";
import { useCreateLayoutMapperProps } from "../../../../hooks/contentCreate/useCreateLayoutMapper";
import { TP05LayoutStyle } from "../../../Layouts/TP05Layout";

interface DropBoxProps {
  customCss?: SerializedStyles;
}

const DropBox = styled.div<DropBoxProps>`
  ${(props) => props.customCss}
`;

const overCss = css`
  border: 1px dashed black;
`;

const layoutCss = css`
  grid-template-rows: 60% 38%;
  height: 100%;
`;

interface TP05LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP05Layout = ({
  components,
  componentList,
  addNewComponent,
  componentNames,
  id,
}: TP05LayoutProps) => {
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
              >
                {componentList[index] === undefined || componentList[index] === null ? (
                  <CreatePlusBox
                    componentNames={componentNames}
                    addNewComponent={addNewComponent}
                    componentIndex={index}
                  />
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
  }, [addNewComponent, componentList, componentNames, components]);
  return (
    <TP05LayoutStyle id={id} customCss={layoutCss}>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP05LayoutStyle>
  );
};

export default CreateTP05Layout;
