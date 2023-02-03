import {
  WordQuizAnswerWrapper,
  WordQuizContent,
  WordQuizWrapper,
} from "chai-ui";
import { WordQuizOptions } from "chai-ui/dist/types/templateContents";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ContentProps } from "../../hooks/useCreateContent";
import ButtonCreator from "../atoms/ButtonCreator";
import { OptionButtonWrapper } from "../atoms/OptionButtonWrapper";
import WordQuizAnswerCreator from "../molecules/WordQuizAnswerCreator";
import ExplanationCreator from "./ExplanationCreator";

interface WordQuizCreatorProps extends ContentProps {}

const WordQuizCreator = ({
  onSave,
  id,
  componentList,
  setComponentList,
  handleFocusHtml,
  focusEditor,
}: WordQuizCreatorProps) => {
  const [wordQuizData, setWordQuizData] = useState<WordQuizContent | undefined>(
    undefined
  );
  const [componentIndex, setComponentIndex] = useState<number | undefined>(
    undefined
  );
  const getData = useCallback(() => {
    const chooseTextContent = componentList.find((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    })?.content as WordQuizContent;
    const chooseTextContentIndex = componentList.findIndex((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    });
    setComponentIndex(chooseTextContentIndex);
    setWordQuizData(chooseTextContent);
  }, [componentList, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const addAnswer = useCallback(() => {
    if (wordQuizData === undefined) return;
    if (componentIndex === undefined) return;
    const copyChooseTextByAudioDataArr = JSON.parse(
      JSON.stringify(wordQuizData.data?.[0])
    );
    copyChooseTextByAudioDataArr.choices = [
      ...copyChooseTextByAudioDataArr.choices,
      "",
    ];
    const copyComponentList = [...componentList];
    copyComponentList[componentIndex]!.content.data[0] =
      copyChooseTextByAudioDataArr;
    setComponentList(copyComponentList);
  }, [componentIndex, componentList, setComponentList, wordQuizData]);

  const handleSubmitText = useCallback(
    (text: string, keyName?: string, index?: number | string) => {
      if (componentIndex === undefined) return;
      if (wordQuizData === undefined) return;
      if (index === undefined) return;
      const copyChooseTextByAudioDataArr = JSON.parse(
        JSON.stringify(wordQuizData.data)
      );
      copyChooseTextByAudioDataArr[0].choices[index] = text ?? "";
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data =
        copyChooseTextByAudioDataArr;
      setComponentList(copyComponentList);
    },
    [wordQuizData, componentList, setComponentList, componentIndex]
  );

  const handleDeleteAnswer = useCallback(
    (index: number) => {
      if (componentIndex === undefined) return;
      if (!wordQuizData?.data) return;
      const copyComponentList = [...componentList];

      if (wordQuizData?.data?.[0].choices.length <= 1) {
        copyComponentList.splice(componentIndex, 1, undefined);
        setComponentList(copyComponentList);
        return;
      }

      const copyChooseTextByAudioDataArr = [...wordQuizData.data];
      copyChooseTextByAudioDataArr[0].choices.splice(index, 1);
      copyComponentList[componentIndex]!.content.data =
        copyChooseTextByAudioDataArr;
      setComponentList(copyComponentList);
    },
    [wordQuizData, componentList, componentIndex, setComponentList]
  );

  const handleSubmitAnswerIndex = useCallback(
    (answerIndex: number) => {
      if (componentIndex === undefined) return;
      if (wordQuizData === undefined) return;
      const copyChooseTextByAudioDataArr = JSON.parse(
        JSON.stringify(wordQuizData.data)
      );
      copyChooseTextByAudioDataArr[0].answerIndex = answerIndex ?? -1;
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data =
        copyChooseTextByAudioDataArr;
      setComponentList(copyComponentList);
    },
    [wordQuizData, componentList, setComponentList, componentIndex]
  );

  const submitExplanationText = useCallback(
    (text: string, keyName?: string) => {
      if (componentIndex === undefined) return;
      if (wordQuizData === undefined) return;
      const copyChooseTextDataArr = JSON.parse(
        JSON.stringify(wordQuizData.data)
      );
      if (!copyChooseTextDataArr[0].explanation) {
        copyChooseTextDataArr[0].explanation = {
          text: "",
          correctMessage: "",
          wrongMessage: "",
          audio: {
            src: "",
          },
        };
      }
      if (keyName === "text") {
        copyChooseTextDataArr[0].explanation!.text = text ?? "";
      } else if (keyName === "correctMessage") {
        copyChooseTextDataArr[0].explanation!.correctMessage = text ?? "";
      } else if (keyName === "wrongMessage") {
        copyChooseTextDataArr[0].explanation!.wrongMessage = text ?? "";
      } else if (keyName === "audio") {
        copyChooseTextDataArr[0].explanation!.audio!.src = text ?? "";
      }
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data = copyChooseTextDataArr;
      setComponentList(copyComponentList);
    },
    [wordQuizData, componentList, componentIndex, setComponentList]
  );

  const handleClickMode = useCallback(
    (optionName: keyof WordQuizOptions) => {
      if (componentIndex === undefined) return;
      const copyComponentList = [...componentList];
      const content = copyComponentList[componentIndex]
        ?.content as WordQuizContent;
      if (optionName === "sortAnswer") {
        content.options!.sortAnswer = !content.options?.sortAnswer;
      }
      setComponentList(copyComponentList);
    },
    [componentList, componentIndex, setComponentList]
  );

  const wordQuiz = useMemo(() => {
    return (
      <WordQuizWrapper>
        <WordQuizAnswerWrapper>
          {wordQuizData?.data?.[0].choices.map((choice, index) => {
            return (
              <div>
                <input
                  type="radio"
                  name={id + `wordQuiz`}
                  onClick={() => {
                    handleSubmitAnswerIndex(index);
                  }}
                />
                <WordQuizAnswerCreator
                  text={choice}
                  id={id}
                  contentIndex={index}
                  handleFocusHtml={handleFocusHtml}
                  focusEditor={focusEditor}
                  handleSubmitText={handleSubmitText}
                />
                <ButtonCreator onClick={() => handleDeleteAnswer(index)}>
                  삭제
                </ButtonCreator>
              </div>
            );
          })}
          <ButtonCreator onClick={addAnswer}>+</ButtonCreator>

          <ExplanationCreator
            id={id}
            focusEditor={focusEditor}
            explanation={wordQuizData?.data?.[0].explanation}
            submitExplanationText={submitExplanationText}
            handleFocusHtml={handleFocusHtml}
          />
        </WordQuizAnswerWrapper>
      </WordQuizWrapper>
    );
  }, [
    wordQuizData?.data,
    id,
    focusEditor,
    handleFocusHtml,
    handleSubmitText,
    addAnswer,
    handleDeleteAnswer,
    handleSubmitAnswerIndex,
    submitExplanationText,
  ]);

  return (
    <div>
      {wordQuiz}
      <OptionButtonWrapper>
        <ButtonCreator onClick={() => handleClickMode("sortAnswer")}>
          {wordQuizData?.options?.sortAnswer
            ? "랜덤답안 비활성화"
            : "랜덤답안 활성화"}
        </ButtonCreator>
      </OptionButtonWrapper>
    </div>
  );
};

export default WordQuizCreator;
