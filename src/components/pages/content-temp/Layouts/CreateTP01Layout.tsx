import React from "react";
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
  return (
    <TP01LayoutStyle id={id}>
      <div className="page-conts-wrap">
        {/* 컴포넌트가 추가되는 영역 */}
        {(componentList[0] === undefined || componentList[0] === null) && (
          <CreatePlusBox
            componentNames={componentNames}
            addNewComponent={addNewComponent}
            componentIndex={0}
          />
        )}
        {components[0]}
      </div>
      <div className="page-conts-wrap">
        {/* 컴포넌트가 추가되는 영역 */}
        {(componentList[1] === undefined || componentList[1] === null) && (
          <CreatePlusBox
            componentNames={componentNames}
            addNewComponent={addNewComponent}
            componentIndex={1}
          />
        )}
        {components[1]}
      </div>
    </TP01LayoutStyle>
  );
};

export default CreateTP01Layout;
