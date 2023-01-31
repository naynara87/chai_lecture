import React, { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP11LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";

interface TP11LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP11Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP11LayoutProps) => {
  const contents = useMemo(() => {
    return Array(2)
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
    <TP11LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP11LayoutWrapper>
  );
};

export default CreateTP11Layout;
