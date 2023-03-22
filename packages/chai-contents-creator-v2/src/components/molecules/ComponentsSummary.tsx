import { Template01Data } from "chai-ui-v2";
import { useCallback, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import useComponent from "../../hooks/useComponent";
import useComponentContext from "../../hooks/useComponentContext";
import usePage from "../../hooks/usePage";
import useTemplate from "../../hooks/useTemplate";
import {
  CreateEditMain,
  CreateEditMainWrap,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import PageHeader from "./PageHeader";

const ComponentsSummary = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  updateContent,
  deleteContent,
  returnUseComponent,
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

  const { focusedId, setFocusedId, getComponent, getDroppableId } =
    returnUseComponent;

  const droppableId = getDroppableId(slideId, "contents");

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap>
        <CreateEditMain>
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
          {thisSlide.contents.map((content, index) => {
            return getComponent({
              index,
              currentSlide: thisSlide,
              content,
              isFocused: focusedId === content?.id,
              setFocusedId,
              updateContent,
              deleteContent,
              position: "contents",
            });
          })}
        </CreateEditMain>
      </CreateEditMainWrap>
    </>
  );
};

export default ComponentsSummary;
