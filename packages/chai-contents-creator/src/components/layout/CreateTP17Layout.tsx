import React, { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP17LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";

interface TP17LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP17Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP17LayoutProps) => {
  const contents = useMemo(() => {
    return Array(4)
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
                isLong={index === 0 || index === 3}
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
    <TP17LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP17LayoutWrapper>
  );
};

export default CreateTP17Layout;
