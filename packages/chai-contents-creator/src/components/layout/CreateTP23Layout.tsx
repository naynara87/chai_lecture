import React, { useMemo } from "react";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP23LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";
import { StrictModeDroppable } from "../molecules/StrictModeDroppable";

interface TP23LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP23Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP23LayoutProps) => {
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
    <TP23LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP23LayoutWrapper>
  );
};

export default CreateTP23Layout;
