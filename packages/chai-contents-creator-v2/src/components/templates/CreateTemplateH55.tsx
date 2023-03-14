import styled from "@emotion/styled";
import { Template_H_5_5Data } from "chai-ui-v2";
import useComponentContext from "../../hooks/useComponentContext";
import {
  CreateEditMainWrap,
  CreateEditMain,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import PageHeader from "../molecules/PageHeader";

const CreateEditMainWrap55 = styled(CreateEditMainWrap)`
  ${CreateEditMain} {
    width: 50%;
  }
  gap: 24px;
`;

const CreateTemplateH55 = ({
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
  const {
    ComponentsContextMenuCommon: ComponentsContextMenuRight,
    isComponentsContextMenuOpen: isComponentsContextMenuOpenRight,
    toggleContextMenu: toggleContextMenuRight,
  } = useComponentContext();

  const { focusedId, setFocusedId, getComponent, getDroppableId } =
    returnUseComponent;

  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as Template_H_5_5Data;

  const leftDroppableId = getDroppableId(slideId, "leftContents");

  const rightDroppableId = getDroppableId(slideId, "rightContents");

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap55>
        <CreateEditMain>
          <DashBoxArea droppableId={leftDroppableId}>
            <CreateTemplateChoiceBtnWrap>
              <button className="btn-comp-select" onClick={toggleContextMenu}>
                컴포넌트 선택
              </button>
              <ComponentsContextMenuCommon
                isComponentsContextMenuOpen={isComponentsContextMenuOpen}
                addComponentMap={addComponentMap}
                slideId={slideId}
                position="leftContents"
                toggleContextMenu={toggleContextMenu}
              />
            </CreateTemplateChoiceBtnWrap>
            {thisSlide.leftContents.map((content, index) => {
              return getComponent({
                index,
                currentSlide: thisSlide,
                content,
                isFocused: focusedId === content.id,
                setFocusedId,
                updateContent,
                position: "leftContents",
              });
            })}
          </DashBoxArea>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxArea droppableId={rightDroppableId}>
            <CreateTemplateChoiceBtnWrap>
              <button
                className="btn-comp-select"
                onClick={toggleContextMenuRight}
              >
                컴포넌트 선택
              </button>
              <ComponentsContextMenuRight
                isComponentsContextMenuOpen={isComponentsContextMenuOpenRight}
                addComponentMap={addComponentMap}
                slideId={slideId}
                position="rightContents"
                toggleContextMenu={toggleContextMenuRight}
              />
            </CreateTemplateChoiceBtnWrap>
            {thisSlide.rightContents.map((content, index) => {
              return getComponent({
                index,
                currentSlide: thisSlide,
                content,
                isFocused: focusedId === content?.id,
                setFocusedId,
                updateContent,
                position: "rightContents",
              });
            })}
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap55>
    </>
  );
};

export default CreateTemplateH55;
