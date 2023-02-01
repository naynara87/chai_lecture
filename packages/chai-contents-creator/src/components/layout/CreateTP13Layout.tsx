import React, { useMemo } from "react";
import { useCreateLayoutMapperProps } from "../../hooks/useCreateLayoutMapper";
import { TP13LayoutWrapper } from "chai-ui";
import DropBox from "../molecules/DropBox";
import { StrictModeDroppable } from "../molecules/StrictModeDroppable";

interface TP13LayoutProps extends useCreateLayoutMapperProps {}

const CreateTP13Layout = ({
  components,
  componentList,
  setComponentIndex,
  id,
  handleFocusHtml,
  contentsContextMenuRef,
}: TP13LayoutProps) => {
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
    <TP13LayoutWrapper>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP13LayoutWrapper>
  );
};

export default CreateTP13Layout;
