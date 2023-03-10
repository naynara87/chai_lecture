import { Template01Data } from "chai-ui-v2";
import React from "react";
import useComponent from "../../hooks/useComponent";
import useComponentContext from "../../hooks/useComponentContext";
import usePage from "../../hooks/usePage";
import {
  CreateEditMainWrap,
  CreateEditMain,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
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

  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as Template01Data;

  const { focusedId, setFocusedId, getComponent } = useComponent();

  const { updateContent } = usePage();

  const currentSlide = slides.find((slide) => slide.id === slideId)!;

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
                toggleContextMenu={toggleContextMenu}
              />
            </CreateTemplateChoiceBtnWrap>
            {/* TODO: 컴포넌트 리스트 렌더링 */}
            {thisSlide.contents.map((content) => {
              return getComponent({
                currentSlide,
                content,
                isFocused: focusedId === content.id,
                setFocusedId,
                updateContent,
                position: "contents",
              });
            })}
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap>
    </>
  );
};

export default CreateTemplate01;
