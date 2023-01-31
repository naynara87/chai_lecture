import React, { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP06LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";

interface TP06LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP06Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP06LayoutProps) => {
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
    <TP06LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP06LayoutWrapper>
  );
};

export default CreateTP06Layout;
