import React, { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP16LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";

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
                index={index}
                provided={provided}
                snapshot={snapshot}
                contentsContextMenuRef={contentsContextMenuRef}
                handleFocusHtml={handleFocusHtml}
                componentList={componentList}
                setComponentIndex={setComponentIndex}
                components={components}
                isLong={index === 2}
              />
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
