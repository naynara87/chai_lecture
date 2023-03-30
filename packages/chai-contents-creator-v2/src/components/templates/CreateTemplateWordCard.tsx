import { TemplateWordCardData } from "chai-ui-v2";
import useComponentWordCardContext from "../../hooks/useComponentWordCardContext";
import {
  CreateEditMain,
  CreateTemplateChoiceBtnWrap,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import PageHeader from "../molecules/PageHeader";
import { CreateEditMainWrap37 } from "./CreateTemplateH37";

const CreateTemplateWordCard = ({
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
    ComponentsWordCardContextMenuCommon,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  } = useComponentWordCardContext();

  const { focusedId, setFocusedId, getComponent, getDroppableId } =
    returnUseComponent;

  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as TemplateWordCardData;

  const leftDroppableId = getDroppableId(slideId, "leftContents");

  const rightDroppableId = getDroppableId(slideId, "rightContents");

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap37>
        <CreateEditMain>
          <DashBoxArea droppableId={leftDroppableId}>
            {thisSlide.leftContents &&
              thisSlide.leftContents.map((content, index) => {
                return getComponent({
                  index,
                  currentSlide: thisSlide,
                  content,
                  isFocused: focusedId === content.id,
                  setFocusedId,
                  updateContent,
                  deleteContent,
                  position: "leftContents",
                  isDraggable: false,
                  isEditBtn: false,
                });
              })}
          </DashBoxArea>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxArea droppableId={rightDroppableId}>
            <CreateTemplateChoiceBtnWrap>
              <button className="btn-comp-select" onClick={toggleContextMenu}>
                컴포넌트 선택
              </button>
              <ComponentsWordCardContextMenuCommon
                isComponentsContextMenuOpen={isComponentsContextMenuOpen}
                addComponentMap={addComponentMap}
                slideId={slideId}
                position="rightContents"
                toggleContextMenu={toggleContextMenu}
              />
            </CreateTemplateChoiceBtnWrap>
            {thisSlide.rightContents &&
              thisSlide.rightContents.map((content, index) => {
                return getComponent({
                  index,
                  currentSlide: thisSlide,
                  content,
                  isFocused: focusedId === content?.id,
                  setFocusedId,
                  updateContent,
                  deleteContent,
                  position: "rightContents",
                  templateType: thisSlide.type,
                  isDraggable: false,
                  isEditBtn: false,
                });
              })}
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap37>
    </>
  );
};

export default CreateTemplateWordCard;
