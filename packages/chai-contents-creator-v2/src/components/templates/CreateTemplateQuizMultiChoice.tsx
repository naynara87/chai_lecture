import { TemplateQuizMultiChoiceData } from "chai-ui-v2";
import { CreateEditMain } from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import PageHeader from "../molecules/PageHeader";
import { CreateEditMainWrap37 } from "./CreateTemplateH37";

const CreateTemplateQuizMultiChoice = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  updateContent,
  deleteContent,
  returnUseComponent,
  updateContentToMultiChoiceTemplate,
  ...pageHeaderProps
}: PageCommonProps) => {
  const { focusedId, setFocusedId, getComponent, getDroppableId } =
    returnUseComponent;

  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as TemplateQuizMultiChoiceData;

  const leftDroppableId = getDroppableId(slideId, "leftContents");

  const rightDroppableId = getDroppableId(slideId, "multiChoice");

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap37>
        <CreateEditMain>
          <DashBoxArea droppableId={leftDroppableId}>
            {thisSlide.leftContents.map((content, index) => {
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
            {getComponent({
              index: 0,
              currentSlide: thisSlide,
              content: thisSlide.multiChoice,
              isFocused: focusedId === thisSlide.multiChoice?.id,
              setFocusedId,
              updateContent,
              deleteContent,
              position: "multiChoice",
              templateType: thisSlide.type,
              isDraggable: false,
              isEditBtn: false,
              updateContentToMultiChoiceTemplate,
            })}
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap37>
    </>
  );
};

export default CreateTemplateQuizMultiChoice;
