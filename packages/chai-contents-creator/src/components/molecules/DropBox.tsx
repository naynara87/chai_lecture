import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { ControlCameraOutlined } from "@mui/icons-material";
import {
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { CreatorContent } from "../../hooks/useCreateContent";
import CreatePlusBox from "../pages/CreatePlusBox";

interface DropBoxWrapperProps {
  customCss?: SerializedStyles;
  isLong?: boolean;
}

interface DropBoxProps {
  customCss?: SerializedStyles;
}

const longCss = css`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const DropBoxWrapper = styled.div<DropBoxWrapperProps>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  ${(props) => props.customCss}
  ${(props) => props.isLong && longCss}
`;

const overCss = css`
  border: 1px dashed black;
`;

const DragBox = styled.div`
  height: 100%;
`;

interface DropBoxProps {
  index: number;
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
  contentsContextMenuRef: React.MutableRefObject<number | undefined>;
  handleFocusHtml: (
    id?: string | undefined,
    type?: string | undefined,
    index?: number | undefined
  ) => void;
  componentList: (CreatorContent | undefined)[];
  setComponentIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  components: (JSX.Element | JSX.Element[] | undefined)[];
  isLong?: boolean;
}

const DropBox = ({
  index,
  provided,
  snapshot,
  contentsContextMenuRef,
  handleFocusHtml,
  componentList,
  setComponentIndex,
  components,
  isLong,
}: DropBoxProps) => {
  return (
    <DropBoxWrapper
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
      isLong={isLong}
    >
      {componentList[index] === undefined || componentList[index] === null ? (
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
    </DropBoxWrapper>
  );
};

export default DropBox;
