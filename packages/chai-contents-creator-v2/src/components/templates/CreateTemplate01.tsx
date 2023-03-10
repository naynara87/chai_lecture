import React from "react";
import useComponentContext from "../../hooks/useComponentContext";
import {
  CreateEditMainWrap,
  CreateEditMain,
  DashBoxArea,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import PageHeader from "../molecules/PageHeader";

const CreateTemplate01 = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  ...pageHeaderProps
}: PageCommonProps) => {
  const {
    ComponentsContextMenuCommon,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentContext();

  // const thisSlide = slides.find((slide) => slide.slideId === slideId);

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
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
                slideId={slideId}
                position="contents"
              />
              {/* TODO: 컴포넌트 리스트 렌더링 */}
            </CreateTemplateChoiceBtnWrap>
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap>
    </>
  );
};

export default CreateTemplate01;
