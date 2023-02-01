import { ChooseTextByAudioContent } from "chai-ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ContentProps } from "../../hooks/useCreateContent";
import { OptionButtonWrapper } from "../atoms/OptionButtonWrapper";
import ChooseTextByAudioQuizContentCreator from "../molecules/ChooseTextByAudioQuizContentCreator";

interface ChooseTextByAudioCreatorProps extends ContentProps {}

const ChooseTextByAudioCreator = ({
  onSave,
  id,
  componentList,
  setComponentList,
  addComponentToExistingComponentById,
  handleFocusHtml,
  focusEditor,
}: ChooseTextByAudioCreatorProps) => {
  const [chooseTextByAudioData, setChooseTextByAudioData] = useState<
    ChooseTextByAudioContent | undefined
  >(undefined);
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
    })?.content as ChooseTextByAudioContent;
    const chooseTextContentIndex = componentList.findIndex((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    });
    setComponentIndex(chooseTextContentIndex);
    setChooseTextByAudioData(chooseTextContent);
  }, [componentList, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const addAnswer = useCallback(() => {
    if (!addComponentToExistingComponentById) return;
    addComponentToExistingComponentById("chooseTextByAudio", id);
  }, [addComponentToExistingComponentById, id]);

  const handleSubmitText = useCallback(
    (text: string, keyName?: string, index?: number | string) => {
      if (componentIndex === undefined) return;
      if (chooseTextByAudioData === undefined) return;
      if (index === undefined) return;
      if (keyName === undefined) return;
      const copyChooseTextByAudioDataArr = JSON.parse(
        JSON.stringify(chooseTextByAudioData.data)
      );
      copyChooseTextByAudioDataArr[index].choices[keyName?.slice(-1)] =
        text ?? "";
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data =
        copyChooseTextByAudioDataArr;
      setComponentList(copyComponentList);
    },
    [chooseTextByAudioData, componentList, setComponentList, componentIndex]
  );

  const handleDeleteAudioAnswer = useCallback(
    (index: number) => {
      if (componentIndex === undefined) return;
      if (!chooseTextByAudioData?.data) return;
      const copyComponentList = [...componentList];

      // NOTE kjw 텍스트박스가 하나일때 콘텐츠전체삭제
      if (chooseTextByAudioData?.data.length <= 1) {
        copyComponentList.splice(componentIndex, 1, undefined);
        setComponentList(copyComponentList);
        return;
      }

      // NOTE kjw 텍스트박스가 여러개일때 해당 콘텐츠만 삭제
      const copyChooseTextByAudioDataArr = [...chooseTextByAudioData.data];
      copyChooseTextByAudioDataArr.splice(index, 1);
      copyComponentList[componentIndex]!.content.data =
        copyChooseTextByAudioDataArr;
      setComponentList(copyComponentList);
    },
    [chooseTextByAudioData, componentList, componentIndex, setComponentList]
  );

  const handleSubmitAnswerIndex = useCallback(
    (answerIndex: number, index?: number | string) => {
      if (componentIndex === undefined) return;
      if (chooseTextByAudioData === undefined) return;
      if (index === undefined) return;
      const copyChooseTextByAudioDataArr = JSON.parse(
        JSON.stringify(chooseTextByAudioData.data)
      );
      copyChooseTextByAudioDataArr[index].answerIndex = answerIndex ?? -1;
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data =
        copyChooseTextByAudioDataArr;
      setComponentList(copyComponentList);
    },
    [chooseTextByAudioData, componentList, setComponentList, componentIndex]
  );

  const encodeFileToBase64 = useCallback(
    (fileBlob: Blob, contentIndex: number) => {
      if (componentIndex === undefined) return;

      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onload = () => {
        const src = reader.result as string;
        const copyComponentList = JSON.parse(JSON.stringify(componentList));
        const content = copyComponentList[componentIndex]
          ?.content as ChooseTextByAudioContent;
        content.data[contentIndex].audio.src = src;
        setComponentList(copyComponentList);
      };
    },
    [componentList, componentIndex, setComponentList]
  );

  const handleClickSortAnswerMode = useCallback(() => {
    if (componentIndex === undefined) return;
    const copyComponentList = [...componentList];
    const content = copyComponentList[componentIndex]
      ?.content as ChooseTextByAudioContent;
    content.options!.sortAnswer = !content.options?.sortAnswer;
    setComponentList(copyComponentList);
  }, [componentList, componentIndex, setComponentList]);

  const chooseTextByAudio = useMemo(() => {
    if (componentIndex === undefined) return;
    return chooseTextByAudioData?.data.map((answerData, index) => {
      return (
        <ChooseTextByAudioQuizContentCreator
          answerData={answerData}
          id={id}
          quizIndex={index}
          handleFocusHtml={handleFocusHtml}
          focusEditor={focusEditor}
          handleSubmitText={handleSubmitText}
          handleDeleteAudioAnswer={handleDeleteAudioAnswer}
          encodeFileToBase64={encodeFileToBase64}
          handleSubmitAnswerIndex={handleSubmitAnswerIndex}
        />
      );
    });
  }, [
    chooseTextByAudioData,
    focusEditor,
    handleFocusHtml,
    componentIndex,
    id,
    handleSubmitText,
    handleDeleteAudioAnswer,
    encodeFileToBase64,
    handleSubmitAnswerIndex,
  ]);

  return (
    <div>
      {chooseTextByAudio}
      <OptionButtonWrapper>
        <button onClick={handleClickSortAnswerMode}>
          {chooseTextByAudioData?.options?.sortAnswer
            ? "랜덤답안 비활성화"
            : "랜덤답안 활성화"}
        </button>
      </OptionButtonWrapper>
      <button onClick={addAnswer}>+</button>
    </div>
  );
};

export default ChooseTextByAudioCreator;
