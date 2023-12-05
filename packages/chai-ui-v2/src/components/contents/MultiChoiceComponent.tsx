import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  MultiChoiceContentData,
  useGlobalAudio,
  usePageCompleted,
  useXapi,
} from "../../core";
import { LayoutModalSolution } from "../modal";
import ComponentGrayLine from "../molecules/ComponentGrayLine";
import { v4 as uuidv4 } from "uuid";
import ModalVideo from "../modal/ModalVideo";
import { HtmlContentComponent } from "../atoms";
import styled from "@emotion/styled";
export interface MultiChoiceComponentProps {
  contents: MultiChoiceContentData;
}

const MultiChoiceCompContainer = styled.div`
  > div {
    margin-top: 6vmin;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const MultiChoiceComponent = ({ contents }: MultiChoiceComponentProps) => {
  const [userChoice, setUserChoice] = useState<number | undefined>();
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);

  const modalUuidRef = useRef(uuidv4());

  const {
    globalAudioRef,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  } = useGlobalAudio();
  const { setPushCompletedPageComponents, setComponentCompleted } =
    usePageCompleted();
  const { xapiAnswered } = useXapi();

  useEffect(() => {
    setPushCompletedPageComponents("quiz", contents.id);
  }, [setPushCompletedPageComponents, contents.id]);

  const audioEnded = useCallback(() => {
    if (globalAudioId.toString().includes("solutionModal")) {
      handleAudioReset();
    }
  }, [handleAudioReset, globalAudioId]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", audioEnded);
    }
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [globalAudioRef, audioEnded, isModalSolutionOpen]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  const choiceBoxes = useMemo(() => {
    return contents.data.choice.map((choice, choiceIndex) => {
      return (
        <div className="inp-grp" key={choiceIndex}>
          <input
            type="radio"
            name={`answer${contents.id}`}
            id={`${contents.id}-answer-${choiceIndex}`}
            className="inp-chck-gray none"
            checked={userChoice === choiceIndex}
          />
          <label
            htmlFor={`${contents.id}-answer-${choiceIndex}`}
            className="label-chck-gray"
            onClick={() => {
              if (userChoice !== undefined) return;
              setUserChoice(choiceIndex);
              setComponentCompleted(contents.id);
              setIsModalSolutionOpen(true);
              handleClickAudioButton(
                "solutionModal",
                modalUuidRef.current,
                0,
                choiceIndex === contents.data.answerIndex
                  ? contents.data.quizPopup.data.correct.soundEffect?.src ?? ""
                  : contents.data.quizPopup.data.incorrect.soundEffect?.src ??
                      "",
              );
              xapiAnswered(contents.id);
            }}
          >
            <span className="text">
              <HtmlContentComponent html={choice} />
            </span>
          </label>
        </div>
      );
    });
  }, [
    contents,
    userChoice,
    handleClickAudioButton,
    setComponentCompleted,
    xapiAnswered,
  ]);

  const answerCheckColor = useMemo(() => {
    if (userChoice !== undefined) {
      if (userChoice === contents.data.answerIndex) {
        return "answer-right";
      } else {
        return "answer-wrong";
      }
    }
    return "";
  }, [contents.data.answerIndex, userChoice]);

  const handleClickModalClose = () => {
    handleAudioReset();
  };

  const handleClickModalVideoBtn = () => {
    handleAudioReset();
    setIsModalSolutionOpen(false);
    setIsModalVideoOpen(true);
  };

  return (
    <MultiChoiceCompContainer>
      {contents.data.exampleContents && (
        <ComponentGrayLine contents={contents.data.exampleContents} />
      )}
      <div className={`quiz-answer-wrap hori-answer-wrap ${answerCheckColor}`}>
        {choiceBoxes}
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
        isCorrect={userChoice === contents.data.answerIndex}
        contents={contents.data.quizPopup}
        handleClickModalCloseBtnCallback={handleClickModalClose}
        handleClickModalVideoBtnCallback={handleClickModalVideoBtn}
      />
      <ModalVideo
        isModalOpen={isModalVideoOpen}
        setIsModalOpen={setIsModalVideoOpen}
        videoSrc={
          userChoice === contents.data.answerIndex
            ? contents.data.quizPopup.data.correct.video?.src ?? ""
            : contents.data.quizPopup.data.incorrect.video?.src ?? ""
        }
      />
    </MultiChoiceCompContainer>
  );
};

export default MultiChoiceComponent;
