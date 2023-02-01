import { css } from "@emotion/react";
import {
  ChooseTextContent,
  ChooseTextOptions,
  colorPalette,
  QuizAnswerContainer,
  QuizAnswerStyle,
  TipWrapper,
} from "chai-ui";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ContentProps } from "../../hooks/useCreateContent";
import { OptionButtonWrapper } from "../atoms/OptionButtonWrapper";

import ExplanationCreator from "./ExplanationCreator";
import HtmlCreator from "./HtmlCreator";

const chooseTextContainerCss = css`
  display: flex;
  justify-content: center;
`;

interface ChooseTextProps extends ContentProps {}

const ChooseTextCreator = ({
  onSave,
  id,
  componentList,
  setComponentList,
  handleFocusHtml,
  focusEditor,
}: ChooseTextProps) => {
  const [chooseTextData, setChooseTextData] = useState<
    ChooseTextContent | undefined
  >(undefined);
  const [contentIndex, setContentIndex] = useState<number | undefined>(
    undefined
  );

  const getData = useCallback(() => {
    const chooseTextContent = componentList.find((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    })?.content as ChooseTextContent;
    const chooseTextContentIndex = componentList.findIndex((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    });
    setContentIndex(chooseTextContentIndex);
    setChooseTextData(chooseTextContent);
  }, [componentList, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSubmitText = useCallback(
    (text: string, keyName?: string, index?: string | number) => {
      if (contentIndex === undefined) return;
      if (chooseTextData === undefined) return;
      if (index === undefined) return;
      const copyChooseTextDataArr = JSON.parse(
        JSON.stringify(chooseTextData.data)
      );
      copyChooseTextDataArr[0].choices[index] = text ?? "";
      const copyComponentList = [...componentList];
      copyComponentList[contentIndex]!.content.data = copyChooseTextDataArr;
      setComponentList(copyComponentList);
    },
    [chooseTextData, componentList, contentIndex, setComponentList]
  );

  const handleDeleteChooseText = useCallback(() => {
    if (contentIndex === undefined) return;
    if (!chooseTextData?.data) return;
    const copyComponentList = [...componentList];
    copyComponentList.splice(contentIndex, 1, undefined);
    setComponentList(copyComponentList);
  }, [chooseTextData, componentList, setComponentList, contentIndex]);

  const handleSubmitTipText = useCallback(
    (text: string) => {
      if (contentIndex === undefined) return;
      if (chooseTextData === undefined) return;
      const copyChooseTextDataArr = JSON.parse(
        JSON.stringify(chooseTextData.data)
      );
      copyChooseTextDataArr[0].tip = text ?? "";
      const copyComponentList = [...componentList];
      copyComponentList[contentIndex]!.content.data = copyChooseTextDataArr;
      setComponentList(copyComponentList);
    },
    [chooseTextData, componentList, contentIndex, setComponentList]
  );

  const submitExplanationText = useCallback(
    (text: string, keyName?: string) => {
      if (contentIndex === undefined) return;
      if (chooseTextData === undefined) return;
      const copyChooseTextDataArr = JSON.parse(
        JSON.stringify(chooseTextData.data)
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
      copyComponentList[contentIndex]!.content.data = copyChooseTextDataArr;
      setComponentList(copyComponentList);
    },
    [chooseTextData, componentList, contentIndex, setComponentList]
  );

  const handleClickCorrect = useCallback(
    (index: number) => {
      if (contentIndex === undefined) return;
      if (chooseTextData === undefined) return;
      const copyChooseTextDataArr = JSON.parse(
        JSON.stringify(chooseTextData.data)
      );
      copyChooseTextDataArr[0].answerIndex = index;
      const copyComponentList = [...componentList];
      copyComponentList[contentIndex]!.content.data = copyChooseTextDataArr;
      setComponentList(copyComponentList);
    },
    [chooseTextData, componentList, contentIndex, setComponentList]
  );

  const handleClickMode = useCallback(
    (optionName: keyof ChooseTextOptions) => {
      if (contentIndex === undefined) return;
      const copyComponentList = [...componentList];
      const content = copyComponentList[contentIndex]
        ?.content as ChooseTextContent;
      if (optionName === "isHorizontal") {
        content.options!.isHorizontal = !content.options?.isHorizontal;
      } else if (optionName === "sortAnswer") {
        content.options!.sortAnswer = !content.options?.sortAnswer;
      }
      setComponentList(copyComponentList);
    },
    [componentList, contentIndex, setComponentList]
  );

  const chooseText = useMemo(() => {
    return chooseTextData?.data.map((choiceData, choiceIndex) => {
      const choices = [
        choiceData.choices[0] ?? "",
        choiceData.choices[1] ?? "",
      ];
      return (
        <div key={choiceIndex}>
          <QuizAnswerContainer
            customCss={chooseTextContainerCss}
            isVertical={chooseTextData.options?.isHorizontal}
          >
            {choices.map((choice, index) => {
              return (
                <QuizAnswerStyle
                  className="quiz-answer-list"
                  color={
                    chooseTextData.data[0].answerIndex === index
                      ? "#000"
                      : colorPalette.borderGray
                  }
                  key={index}
                  onClick={() => {
                    handleClickCorrect(index);
                  }}
                >
                  <input
                    type="radio"
                    id={"id"}
                    name="quiz-answer"
                    className="inp-quiz-answer none"
                  />
                  <label htmlFor={"label"} className="label-quiz-answer">
                    <div className="word-wrap">
                      <div className="img-wrap">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}/images/icon/icon_check.svg`}
                          alt=""
                          className="icon"
                        />
                      </div>
                      <HtmlCreator
                        html={choice}
                        onSubmitHtml={handleSubmitText}
                        id={id + "text" + index}
                        index={index}
                        focusEditor={focusEditor}
                        keyName="text"
                        onClickHtml={() => {
                          if (!handleFocusHtml) return;
                          handleFocusHtml(id, "text", index);
                        }}
                        textMaxLength={20}
                      />
                    </div>
                  </label>
                </QuizAnswerStyle>
              );
            })}
          </QuizAnswerContainer>
          <TipWrapper>
            <HtmlCreator
              onSubmitHtml={handleSubmitTipText}
              html={choiceData.tip ?? ""}
              focusEditor={focusEditor}
              keyName="tip"
              onClickHtml={() => {
                if (!handleFocusHtml) return;
                handleFocusHtml(id, "tip", 0);
              }}
              id={id + "tip" + 0}
              textMaxLength={50}
            />
          </TipWrapper>
          <ExplanationCreator
            id={id}
            focusEditor={focusEditor}
            explanation={choiceData.explanation}
            submitExplanationText={submitExplanationText}
            handleFocusHtml={handleFocusHtml}
          />
          <button onClick={handleDeleteChooseText}>삭제</button>
        </div>
      );
    });
  }, [
    chooseTextData,
    handleSubmitText,
    handleDeleteChooseText,
    handleSubmitTipText,
    submitExplanationText,
    handleClickCorrect,
    focusEditor,
    handleFocusHtml,
    id,
  ]);

  return (
    <div>
      {chooseText}
      <OptionButtonWrapper>
        <button onClick={() => handleClickMode("isHorizontal")}>
          {chooseTextData?.options?.isHorizontal ? "가로모드" : "세로모드"}
        </button>
        <button onClick={() => handleClickMode("sortAnswer")}>
          {chooseTextData?.options?.sortAnswer
            ? "랜덤답안 비활성화"
            : "랜덤답안 활성화"}
        </button>
      </OptionButtonWrapper>
    </div>
  );
};

export default ChooseTextCreator;
