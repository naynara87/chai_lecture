import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TP01A } from "../../types/pageTemplate";
import { ChooseTextByAudioContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP01Layout from "../Layouts/TP01Layout";
import ChooseTextByAudio from "../contents/ChooseTextByAudio";
import TitleContent from "../molecules/TitleContent";
import useAudio from "../../hooks/useAudio";
import CheckButton from "../atoms/CheckButton";

interface TP01AComponentProps extends TemplateProps {}

const TP01AComponent = ({ setPageCompleted, page }: TP01AComponentProps) => {
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [checkAnswers, setCheckAnswers] = useState<boolean[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { handleClickAudioButton, audioIndex, audioSrc } = useAudio(audioRef);

  const thisPage = page as TP01A;
  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const ChooseTextByAudioContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "chooseTextByAudio") as
      | ChooseTextByAudioContent
      | undefined;
  }, [thisPage.template.contents]);

  const handleCheckAnswer = useCallback(
    (answer: number, index: number) => {
      if (userAnswers.length >= ChooseTextByAudioContentData!.data.length) {
        return;
      }
      if (userAnswers[index - 1] !== undefined) {
        setUserAnswers((prev) => [
          ...prev.slice(0, index - 1),
          answer,
          ...prev.slice(index, userAnswers.length),
        ]);
      } else {
        setUserAnswers((prev) => [...prev, answer]);
      }
    },
    [ChooseTextByAudioContentData, userAnswers],
  );

  const handleClickCheckButton = useCallback(() => {
    if (userAnswers.length !== ChooseTextByAudioContentData!.data.length) {
      return;
    }
    const correctAnswers: number[] =
      ChooseTextByAudioContentData?.data.map((item) => {
        return item.answerIndex;
      }) ?? [];
    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        setCheckAnswers((prev) => [...prev, true]);
      } else {
        setCheckAnswers((prev) => [...prev, false]);
      }
    });
  }, [ChooseTextByAudioContentData, userAnswers]);

  const ChooseTextByAudioContents = useCallback(() => {
    if (!ChooseTextByAudioContentData?.data) {
      return [];
    }

    const { data } = ChooseTextByAudioContentData;

    return data?.map((item, index) => {
      const { choices, audio } = item;
      return (
        <ChooseTextByAudio
          key={index}
          isHide={userAnswers.length < index}
          contentIndex={index + 1}
          choices={choices}
          isCheck={checkAnswers[index]}
          checkAnswer={handleCheckAnswer}
          handleClickAudio={handleClickAudioButton}
          audioUrl={audio.src}
          currentAudioIndex={audioIndex}
        />
      );
    });
  }, [
    ChooseTextByAudioContentData,
    userAnswers,
    checkAnswers,
    handleClickAudioButton,
    audioIndex,
    handleCheckAnswer,
  ]);
  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP01Layout>
        {ChooseTextByAudioContentData ? ChooseTextByAudioContents() : <></>}
        <CheckButton
          text="채점하기"
          handleClickCheckButton={handleClickCheckButton}
          isHide={userAnswers.length >= ChooseTextByAudioContentData!.data.length}
        />
        <audio ref={audioRef}>
          <source src={audioSrc} />
        </audio>
      </TP01Layout>
    </TemplateCommonLayout>
  );
};

export default TP01AComponent;
