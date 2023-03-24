import { TemplateQuizSentencesInOrderData } from "chai-ui-v2";
import { CreateEditMain } from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import DashBoxArea from "../atoms/DashBoxArea";
import CharacterSentenceListCheckedCreator from "../contents/CharacterSentenceAnswerListCreator";
import QuizSentenceCreator from "../contents/CharacterSentenceListCreator";
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
            {getComponent({
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
            <QuizSentenceCreator />
          </DashBoxArea>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxArea droppableId={rightDroppableId}>
            <CharacterSentenceListCheckedCreator />
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap55>
    </>
  );
};

export default CreateTemplateQuizSentencesInOrder;
