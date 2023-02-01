import React, { useCallback, useRef, useState } from "react";
import { useAudio } from "../../hooks";
import { ChooseTextByAudioContent } from "../../types";
import { CheckButton } from "../atoms";
import ChooseTextByAudioAnswerContent from "./ChooseTextByAudioAnswerContent";

interface ChooseTextByAudioProps {
  chooseTextByAudioContentData: ChooseTextByAudioContent | undefined;
}

const ChooseTextByAudio = ({
  chooseTextByAudioContentData,
}: ChooseTextByAudioProps) => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [checkAnswers, setCheckAnswers] = useState<boolean[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { handleClickAudioButton, audioIndex, audioSrc, audioState } =
    useAudio(audioRef);

  const handleCheckAnswer = useCallback(
    (answer: string, index: number) => {
      if (userAnswers.length >= chooseTextByAudioContentData!.data.length) {
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
    [chooseTextByAudioContentData, userAnswers]
  );

  const handleClickCheckButton = useCallback(() => {
    if (userAnswers.length !== chooseTextByAudioContentData!.data.length) {
      return;
    }
    const correctAnswers: string[] =
      chooseTextByAudioContentData?.data.map((item) => {
        return item.choices[item.answerIndex];
      }) ?? [];
    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        setCheckAnswers((prev) => [...prev, true]);
      } else {
        setCheckAnswers((prev) => [...prev, false]);
      }
    });
  }, [chooseTextByAudioContentData, userAnswers]);

  const ChooseTextByAudioContents = useCallback(() => {
    if (!chooseTextByAudioContentData?.data) {
      return [];
    }

    const { data, options } = chooseTextByAudioContentData;

    return data?.map((item, index) => {
      const { choices, audio } = item;
      console.log(options);
      return (
        <ChooseTextByAudioAnswerContent
          key={index}
          isHide={userAnswers.length < index}
          contentIndex={index + 1}
          choices={choices}
          isCheck={checkAnswers[index]}
          checkAnswer={handleCheckAnswer}
          handleClickAudio={handleClickAudioButton}
          audioUrl={audio.src}
          currentAudioIndex={audioIndex ?? 0}
          audioState={audioState}
          options={options}
        />
      );
    });
  }, [
    chooseTextByAudioContentData,
    userAnswers,
    checkAnswers,
    handleClickAudioButton,
    audioIndex,
    handleCheckAnswer,
    audioState,
  ]);

  return (
    <div>
      <>{chooseTextByAudioContentData ? ChooseTextByAudioContents() : <></>}</>
      {checkAnswers.length < 1 ? (
        <CheckButton
          text="채점하기"
          handleClickCheckButton={handleClickCheckButton}
          isHide={
            userAnswers.length < chooseTextByAudioContentData!.data.length
          }
        />
      ) : (
        <></>
      )}
      <audio ref={audioRef}>
        <source src={audioSrc} />
      </audio>
    </div>
  );
};

export default ChooseTextByAudio;
