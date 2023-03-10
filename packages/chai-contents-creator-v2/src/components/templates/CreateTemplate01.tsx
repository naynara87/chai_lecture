import React from "react";
import useComponentContext from "../../hooks/useComponentContext";
import {
  CreateEditMainWrap,
  CreateEditMain,
  DashBoxArea,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import VideoCreator from "../contents/VideoCreator";
import PageHeader from "../molecules/PageHeader";

const CreateTemplate01 = ({
  templateType,
  addComponentMap,
  slideIndex,
  ...pageHeaderProps
}: PageCommonProps) => {
  const {
    ComponentsContextMenuCommon,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentContext();

  return (
    <>
      <PageHeader slideIndex={slideIndex} {...pageHeaderProps} />
      <CreateEditMainWrap>
        <CreateEditMain>
          <DashBoxArea>
            <CreateTemplateChoiceBtnWrap>
              <button className="btn-comp-select" onClick={toggleContextMenu}>
                컴포넌트 선택
              </button>
              <ComponentsContextMenuCommon
                isComponentsContextMenuOpen={isComponentsContextMenuOpen}
                addComponentMap={addComponentMap}
                slideIndex={slideIndex}
                position="contents"
              />
            </CreateTemplateChoiceBtnWrap>
            <VideoCreator />
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap>
    </>
  );
};

export default CreateTemplate01;
