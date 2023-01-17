import React, { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { CreatorContent } from "../../../../hooks/contentCreate/useCreateContent";
import { Content } from "../../../../types/appData";
import { TP01LayoutStyle } from "../../../Layouts/TP01Layout";
import CreatePlusBox from "../CreatePlusBox";

interface TP01LayoutProps {
  components: (JSX.Element | JSX.Element[] | undefined)[];
  componentList: (CreatorContent | undefined)[];
  addNewComponent: (contentType: Content["type"]) => void;
  componentNames: Content["type"][];
  id?: string;
}
const CreateTP01Layout = ({
  components,
  componentList,
  addNewComponent,
  componentNames,
  id,
}: TP01LayoutProps) => {
  const contents = useMemo(() => {
    return ["", ""].map((value, index) => {
      return (
        <Droppable droppableId={`componentList${index}`}>
          {(provided) => (
            <div
              className={`page-conts-wrap componentList${index}`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {componentList[index] === undefined || componentList[index] === null ? (
                <CreatePlusBox
                  componentNames={componentNames}
                  addNewComponent={addNewComponent}
                  componentIndex={index}
                />
              ) : (
                components[index]
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      );
    });
  }, [addNewComponent, componentList, componentNames, components]);
  return (
    <TP01LayoutStyle id={id}>
      {/* 컴포넌트가 추가되는 영역 */}
      {contents}
    </TP01LayoutStyle>
  );
};

export default CreateTP01Layout;
