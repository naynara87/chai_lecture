import { Template01Data } from "chai-ui-v2";
import React, { useState } from "react";
import useComponentContext from "../../hooks/useComponentContext";
import {
  CreateEditMainWrap,
  CreateEditMain,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import ActivityGuideCharacterCreator from "../contents/ActivityGuideCharacterCreator";
import ModalIntroduction from "../molecules/modal/ModalIntroduction";
import PageHeader from "../molecules/PageHeader";

const CreateTemplate01 = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  updateContent,
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

  const { focusedId, setFocusedId, getComponent } = returnUseComponent;

  const currentSlide = slides.find((slide) => slide.id === slideId)!;

  const [isModalLayoutChangeOpen, setIsModalLayoutChangeOpen] = useState(true);

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
            <ActivityGuideCharacterCreator />
            <ModalIntroduction
              isModalOpen={isModalLayoutChangeOpen}
              setIsModalOpen={setIsModalLayoutChangeOpen}
            />
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap>
    </>
  );
};

export default CreateTemplate01;
