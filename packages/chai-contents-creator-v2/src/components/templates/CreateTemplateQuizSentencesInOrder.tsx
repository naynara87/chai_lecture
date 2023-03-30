import { TemplateQuizSentencesInOrderData } from "chai-ui-v2";
import { CreateEditMain } from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import CharacterSentenceListCheckedCreator from "../contents/CharacterSentenceAnswerListCreator";
import PageHeader from "../molecules/PageHeader";
import { CreateEditMainWrap55 } from "./CreateTemplateH55";

const CreateTemplateQuizSentencesInOrder = ({
  templateType,
  addComponentMap,
  slideId,
  slides,
  updateContent,
  deleteContent,
  returnUseComponent,
  updateContentToSentenceInOrderTemplate,
  ...pageHeaderProps
}: PageCommonProps) => {
  const { focusedId, setFocusedId, getComponent, getDroppableId } =
    returnUseComponent;

  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as TemplateQuizSentencesInOrderData;

  const leftDroppableId = getDroppableId(slideId, "leftContents");

  const rightDroppableId = getDroppableId(slideId, "rightContents");

  return (
    <>
      <PageHeader slideId={slideId} slides={slides} {...pageHeaderProps} />
      <CreateEditMainWrap55>
        <CreateEditMain>
          <DashBoxArea droppableId={leftDroppableId}>
            {thisSlide.titleContents &&
              getComponent({
                index: 0,
                currentSlide: thisSlide,
                content: thisSlide.titleContents,
                isFocused: focusedId === thisSlide.titleContents.id,
                setFocusedId,
                updateContent,
                deleteContent,
                position: "titleContents",
                templateType: thisSlide.type,
                isDraggable: false,
                isEditBtn: false,
              })}
            {thisSlide.mainContents &&
              getComponent({
                index: 1,
                currentSlide: thisSlide,
                content: thisSlide.mainContents,
                isFocused: focusedId === thisSlide.mainContents.id,
                setFocusedId,
                updateContent,
                deleteContent,
                position: "mainContents",
                templateType: thisSlide.type,
                isDraggable: false,
                isEditBtn: false,
                updateContentToSentenceInOrderTemplate,
              })}
          </DashBoxArea>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxArea droppableId={rightDroppableId}>
            {thisSlide.mainContents && (
              <CharacterSentenceListCheckedCreator
                content={thisSlide.mainContents}
              />
            )}
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap55>
    </>
  );
};

export default CreateTemplateQuizSentencesInOrder;
