import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { CreatorContent } from "../../../../hooks/contentCreate/useCreateContent";
import { Content } from "../../../../types/appData";
import { TP01LayoutStyle } from "../../../Layouts/TP01Layout";
import CreatePlusBox from "../CreatePlusBox";
import { ControlCameraOutlined, PersonalVideoOutlined } from "@mui/icons-material";

interface DropBoxProps {
  customCss?: SerializedStyles;
}

const DropBox = styled.div<DropBoxProps>`
  ${(props) => props.customCss}
`;

const overCss = css`
  border: 1px dashed black;
`;
interface TP01LayoutProps {
  components: (JSX.Element | JSX.Element[] | undefined)[];
  componentList: (CreatorContent | undefined)[];
  addNewComponent: (contentType: Content["type"]) => void;
  componentNames: Content["type"][];
  id?: string;
}
const CreateTP01Layout = ({
  components,
  componentList,
  addNewComponent,
  componentNames,
  id,
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
    <TP01LayoutStyle id={id}>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP01LayoutStyle>
  );
};

export default CreateTP01Layout;
