import React, { useMemo } from "react";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP21LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";
import { StrictModeDroppable } from "../molecules/StrictModeDroppable";

interface TP21LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP21Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP21LayoutProps) => {
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
    <TP21LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP21LayoutWrapper>
  );
};

export default CreateTP21Layout;
