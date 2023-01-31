import React, { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP02LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";

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
    <TP02LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP02LayoutWrapper>
  );
};

export default CreateTP02Layout;
