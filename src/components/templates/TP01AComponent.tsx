import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { TP01A } from "../../types/pageTemplate";
import { ChooseTextByAudioContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP01Layout from "../Layouts/TP01Layout";
import ChooseTextByAudio from "../contents/ChooseTextByAudio";
import TitleContent from "../molecules/TitleContent";
import { colorPalette } from "../../styles/colorPalette";
import useAudio from "../../hooks/useAudio";

interface TP01AComponentProps extends TemplateProps {}

const CheckButton = styled.button`
  border-radius: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 1.3888888889vh 2.5vw 1.3888888889vh 2.5vw;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 12.4791666667vw;
  min-width: 12.4791666667vw;
  height: 5.5555555556vh;
  background-color: ${colorPalette.confirmBtn};
  border-radius: 2.5vw;
  font-weight: 600;
  font-size: 1.25vw;
  color: ${colorPalette.white};
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 2.5vh auto 0;
  cursor: pointer;

  &.hide {
    background-color: ${colorPalette.disableBackground};
  }
`;

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

  const handleCheckButton = useCallback(() => {
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
          className={userAnswers.length >= ChooseTextByAudioContentData!.data.length ? "" : "hide"}
          onClick={handleCheckButton}
        >
          채점하기
        </CheckButton>
        <audio ref={audioRef}>
          <source src={audioSrc} />
        </audio>
      </TP01Layout>
    </TemplateCommonLayout>
  );
};

export default TP01AComponent;
