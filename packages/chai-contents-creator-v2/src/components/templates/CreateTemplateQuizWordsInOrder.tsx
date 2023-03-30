import { TemplateQuizWordsInOrderData } from "chai-ui-v2";
import { CreateEditMain } from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import PageHeader from "../molecules/PageHeader";
import { CreateEditMainWrap37 } from "./CreateTemplateH37";

const CreateTemplateQuizWordsInOrder = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  updateContent,
  deleteContent,
  returnUseComponent,
  updateContentToWordsInOrderTemplate,
  ...pageHeaderProps
}: PageCommonProps) => {
  const { focusedId, setFocusedId, getComponent, getDroppableId } =
    returnUseComponent;

  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as TemplateQuizWordsInOrderData;

  const leftDroppableId = getDroppableId(slideId, "leftContents");

  const rightDroppableId = getDroppableId(slideId, "wordsInOrder");

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
            {thisSlide.wordsInOrder &&
              getComponent({
                index: 0,
                currentSlide: thisSlide,
                content: thisSlide.wordsInOrder,
                isFocused: focusedId === thisSlide.wordsInOrder?.id,
                setFocusedId,
                updateContent,
                deleteContent,
                position: "wordsInOrder",
                templateType: thisSlide.type,
                isDraggable: false,
                isEditBtn: false,
                updateContentToWordsInOrderTemplate,
              })}
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap37>
    </>
  );
};

export default CreateTemplateQuizWordsInOrder;
