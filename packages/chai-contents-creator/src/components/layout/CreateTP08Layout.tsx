import React, { useMemo } from "react";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP08LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";
import { StrictModeDroppable } from "../molecules/StrictModeDroppable";

interface TP08LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP08Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP08LayoutProps) => {
  const contents = useMemo(() => {
    return Array(2)
      .fill("")
      .map((value, index) => {
        return (
          <StrictModeDroppable droppableId={`componentList${index}`}>
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
          </StrictModeDroppable>
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
    <TP08LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP08LayoutWrapper>
  );
};

export default CreateTP08Layout;
