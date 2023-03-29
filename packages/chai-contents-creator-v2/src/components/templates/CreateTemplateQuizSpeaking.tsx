import { TemplateQuizSpeakingData } from "chai-ui-v2";
import { CreateEditMain } from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import PageHeader from "../molecules/PageHeader";
import { CreateEditMainWrap37 } from "./CreateTemplateH37";

const CreateTemplateQuizSpeaking = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  updateContent,
  deleteContent,
  returnUseComponent,
  updateContentToFinalSpeakingTemplate,
  ...pageHeaderProps
}: PageCommonProps) => {
  const { focusedId, setFocusedId, getComponent, getDroppableId } =
    returnUseComponent;

  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as TemplateQuizSpeakingData;

  const leftDroppableId = getDroppableId(slideId, "leftContents");

  const rightDroppableId = getDroppableId(slideId, "rightContents");
  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap37>
        <CreateEditMain>
          <DashBoxArea droppableId={leftDroppableId}>
            {thisSlide.leftContents &&
              getComponent({
                index: 0,
                currentSlide: thisSlide,
                content: thisSlide.leftContents,
                isFocused: focusedId === thisSlide.leftContents.id,
                setFocusedId,
                updateContent,
                deleteContent,
                position: "leftContents",
                templateType: thisSlide.type,
                isDraggable: false,
                isEditBtn: false,
              })}
          </DashBoxArea>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxArea droppableId={rightDroppableId}>
            {thisSlide.rightContents &&
              getComponent({
                index: 1,
                currentSlide: thisSlide,
                content: thisSlide.rightContents,
                isFocused: focusedId === thisSlide.rightContents.id,
                setFocusedId,
                updateContent,
                deleteContent,
                updateContentToFinalSpeakingTemplate,
                position: "rightContents",
                templateType: thisSlide.type,
                isDraggable: false,
                isEditBtn: false,
              })}
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap37>
    </>
  );
};

export default CreateTemplateQuizSpeaking;
