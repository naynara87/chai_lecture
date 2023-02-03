import {
  SortWordsAnswerWrapper,
  SortWordsContent,
  SortWordsQuestionWrapper,
  SortWordsWrapper,
} from "chai-ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ContentProps } from "../../hooks/useCreateContent";
import ButtonCreator from "../atoms/ButtonCreator";
import { OptionButtonWrapper } from "../atoms/OptionButtonWrapper";
import BlankCreator from "../molecules/BlankCreator";
import TextCardCreator from "../molecules/TextCardCreator";
import WordQuizAnswerCreator from "../molecules/WordQuizAnswerCreator";
import ExplanationCreator from "./ExplanationCreator";

interface SortWordsCreatorProps extends ContentProps {}

const SortWordsCreator = ({
  onSave,
  id,
  componentList,
  setComponentList,
  handleFocusHtml,
  focusEditor,
}: SortWordsCreatorProps) => {
  const [sortWordsData, setSortWordsData] = useState<
    SortWordsContent | undefined
  >(undefined);
  const [componentIndex, setComponentIndex] = useState<number | undefined>(
    undefined
  );

  const getData = useCallback(() => {
    const sortWordsContent = componentList.find((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    })?.content as SortWordsContent;
    const sortWordsContentIndex = componentList.findIndex((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    });
    setComponentIndex(sortWordsContentIndex);
    setSortWordsData(sortWordsContent);
  }, [componentList, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSubmitText = useCallback(
    (text: string, keyName?: string, index?: number | string) => {
      if (componentIndex === undefined) return;
      if (sortWordsData === undefined) return;
      if (index === undefined) return;
      const copySortWordsDataArr = JSON.parse(
        JSON.stringify(sortWordsData.data)
      );
      if (copySortWordsDataArr[0].questions[index].indexOf("*") === -1) {
        copySortWordsDataArr[0].questions[index] = text ?? "";
      } else {
        copySortWordsDataArr[0].questions[index] = "*" + text ?? "*";
      }
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data = copySortWordsDataArr;
      setComponentList(copyComponentList);
    },
    [sortWordsData, componentList, setComponentList, componentIndex]
  );

  const handleSubmitFakeChoiceText = useCallback(
    (text: string, keyName?: string, index?: number | string) => {
      if (componentIndex === undefined) return;
      if (sortWordsData === undefined) return;
      if (index === undefined) return;
      const copySortWordsDataArr = JSON.parse(
        JSON.stringify(sortWordsData.data)
      );
      copySortWordsDataArr[0].fakeChoices[index] = text ?? "";
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data = copySortWordsDataArr;
      setComponentList(copyComponentList);
    },
    [sortWordsData, componentList, setComponentList, componentIndex]
  );

  const addAnswer = useCallback(
    (answerType: string) => {
      if (sortWordsData === undefined) return;
      if (componentIndex === undefined) return;
      const copySortWordsDataArr = JSON.parse(
        JSON.stringify(sortWordsData.data)
      );
      if (answerType === "question") {
        copySortWordsDataArr[0].questions = [
          ...copySortWordsDataArr[0].questions,
          "",
        ];
      } else {
        copySortWordsDataArr[0].fakeChoices = [
          ...copySortWordsDataArr[0].fakeChoices,
          "",
        ];
      }
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data = copySortWordsDataArr;
      setComponentList(copyComponentList);
    },
    [componentIndex, componentList, setComponentList, sortWordsData]
  );

  const deleteAnswer = useCallback(
    (index: number) => {
      if (componentIndex === undefined) return;
      if (!sortWordsData?.data) return;
      const copyComponentList = [...componentList];

      if (sortWordsData?.data?.[0].questions.length <= 1) {
        copyComponentList.splice(componentIndex, 1, undefined);
        setComponentList(copyComponentList);
        return;
      }

      const copyChooseTextByAudioDataArr = [...sortWordsData.data];
      copyChooseTextByAudioDataArr[0].questions.splice(index, 1);
      copyComponentList[componentIndex]!.content.data =
        copyChooseTextByAudioDataArr;
      setComponentList(copyComponentList);
    },
    [sortWordsData, componentList, componentIndex, setComponentList]
  );

  const changeQuestionType = useCallback(
    (index: number) => {
      if (componentIndex === undefined) return;
      if (!sortWordsData?.data) return;
      const copyComponentList = [...componentList];
      const copyChooseTextByAudioDataArr = [...sortWordsData.data];
      if (
        copyChooseTextByAudioDataArr[0].questions[index].indexOf("*") === -1
      ) {
        copyChooseTextByAudioDataArr[0].questions[index] =
          "*" + copyChooseTextByAudioDataArr[0].questions[index];
      } else {
        copyChooseTextByAudioDataArr[0].questions[index] =
          copyChooseTextByAudioDataArr[0].questions[index].slice(1);
      }
      copyComponentList[componentIndex]!.content.data =
        copyChooseTextByAudioDataArr;
      setComponentList(copyComponentList);
    },
    [sortWordsData, componentList, componentIndex, setComponentList]
  );

  const addFakeChoices = useCallback(() => {
    if (sortWordsData === undefined) return;
    if (componentIndex === undefined) return;
    const copySortWordsDataArr = JSON.parse(JSON.stringify(sortWordsData.data));
    copySortWordsDataArr[0].fakeChoices = [""];
    const copyComponentList = [...componentList];
    copyComponentList[componentIndex]!.content.data = copySortWordsDataArr;
    setComponentList(copyComponentList);
  }, [componentIndex, componentList, setComponentList, sortWordsData]);

  const questionContents = useMemo(() => {
    if (!handleFocusHtml) return;
    return sortWordsData?.data[0].questions.map((question, index) => {
      return (
        <div key={index}>
          {question.indexOf("*") === -1 ? (
            <TextCardCreator
              text={question}
              handleSubmitText={handleSubmitText}
              keyName="question"
              index={index}
              id={id + "question" + index}
              focusEditor={focusEditor}
              onClickHtml={() => handleFocusHtml(id, "question", index)}
              textMaxLength={5}
            />
          ) : (
            <BlankCreator
              text={question}
              handleSubmitText={handleSubmitText}
              keyName="question"
              index={index}
              id={id + "question" + index}
              focusEditor={focusEditor}
              onClickHtml={() => handleFocusHtml(id, "question", index)}
              textMaxLength={5}
            />
          )}
          <div>
            <ButtonCreator onClick={() => changeQuestionType(index)}>
              유형변경
            </ButtonCreator>
            <ButtonCreator onClick={() => deleteAnswer(index)}>
              삭제
            </ButtonCreator>
          </div>
        </div>
      );
    });
  }, [
    sortWordsData?.data,
    focusEditor,
    handleFocusHtml,
    handleSubmitText,
    id,
    deleteAnswer,
    changeQuestionType,
  ]);

  const fakeChoices = useMemo(() => {
    if (!sortWordsData?.data) return;
    return sortWordsData.data[0].fakeChoices?.map((fakeChoice, choiceIndex) => {
      return (
        <WordQuizAnswerCreator
          text={fakeChoice}
          id={id}
          contentIndex={choiceIndex}
          handleFocusHtml={handleFocusHtml}
          focusEditor={focusEditor}
          handleSubmitText={handleSubmitFakeChoiceText}
        />
      );
    });
  }, [
    focusEditor,
    handleFocusHtml,
    id,
    handleSubmitFakeChoiceText,
    sortWordsData?.data,
  ]);

  const submitExplanationText = useCallback(
    (text: string, keyName?: string) => {
      if (componentIndex === undefined) return;
      if (sortWordsData === undefined) return;
      const copySortWordsDataArr = JSON.parse(
        JSON.stringify(sortWordsData.data)
      );
      if (!copySortWordsDataArr[0].explanation) {
        copySortWordsDataArr[0].explanation = {
          text: "",
          correctMessage: "",
          wrongMessage: "",
          audio: {
            src: "",
          },
        };
      }
      if (keyName === "text") {
        copySortWordsDataArr[0].explanation!.text = text ?? "";
      } else if (keyName === "correctMessage") {
        copySortWordsDataArr[0].explanation!.correctMessage = text ?? "";
      } else if (keyName === "wrongMessage") {
        copySortWordsDataArr[0].explanation!.wrongMessage = text ?? "";
      } else if (keyName === "audio") {
        copySortWordsDataArr[0].explanation!.audio!.src = text ?? "";
      }
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data = copySortWordsDataArr;
      setComponentList(copyComponentList);
    },
    [sortWordsData, componentList, componentIndex, setComponentList]
  );

  return (
    <div>
      <SortWordsWrapper>
        <SortWordsQuestionWrapper>
          {questionContents}
          <ButtonCreator onClick={() => addAnswer("question")}>+</ButtonCreator>
        </SortWordsQuestionWrapper>
        <SortWordsAnswerWrapper>
          {sortWordsData && sortWordsData.data[0].fakeChoices && fakeChoices}
          {sortWordsData && sortWordsData.data[0].fakeChoices && (
            <ButtonCreator onClick={() => addAnswer("fakeChoices")}>
              예시추가
            </ButtonCreator>
          )}
        </SortWordsAnswerWrapper>
        <ExplanationCreator
          id={id}
          focusEditor={focusEditor}
          explanation={sortWordsData?.data[0].explanation}
          submitExplanationText={submitExplanationText}
          handleFocusHtml={handleFocusHtml}
        />
      </SortWordsWrapper>
      <OptionButtonWrapper>
        {sortWordsData && !sortWordsData.data[0].fakeChoices && (
          <ButtonCreator onClick={addFakeChoices}>fakechoice추가</ButtonCreator>
        )}
      </OptionButtonWrapper>
    </div>
  );
};

export default SortWordsCreator;
