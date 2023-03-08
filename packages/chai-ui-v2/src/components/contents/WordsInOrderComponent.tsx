import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { QuizWordsInOrderContentData, useGlobalAudio } from "../../core";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  ImgProfileDefaultComponent,
} from "../atoms";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { LayoutModalSolution } from "../modal";
import ModalVideo from "../modal/ModalVideo";
import ComponentGrayLine from "../molecules/ComponentGrayLine";
import { v4 as uuidv4 } from "uuid";

const BlankBox = styled.div``;

type WordInOrderChoice = {
  text: string;
  answerIndex: number;
};

interface WordsInOrderComponentProps {
  contents: QuizWordsInOrderContentData;
}

const WordsInOrderComponent = ({ contents }: WordsInOrderComponentProps) => {
  const [selectedBlankBox, setSelectedBlankBox] = useState<
    undefined | number
  >();
  const [selectedChoiceBox, setSelectedChoiceBox] = useState<
    undefined | number
  >();
  const [userChoices, setUserChoices] = useState<WordInOrderChoice[]>([]);
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);

  const modalIdRef = useRef(`solutionModal${uuidv4()}`);

  const {
    globalAudioRef,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  } = useGlobalAudio();

  const audioEnded = useCallback(() => {
    if (globalAudioId.toString().includes("solutionModal")) {
      handleAudioReset();
    }
  }, [handleAudioReset, globalAudioId]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) globalAudioRefValue = globalAudioRef.current;
    globalAudioRef?.current?.addEventListener("ended", audioEnded);
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [globalAudioRef, audioEnded]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  const handleClickResetAnswer = useCallback(() => {
    const copyUserChoices: WordInOrderChoice[] = [];
    contents.data.choice.forEach((content) => {
      if (content.isChoice) {
        copyUserChoices.push({ text: "", answerIndex: -1 });
      }
    });

    setUserChoices(copyUserChoices);
    setIsShowAnswer(false);
    setSelectedBlankBox(undefined);
    setSelectedChoiceBox(undefined);
  }, [contents.data.choice]);

  useEffect(() => {
    handleClickResetAnswer();
  }, [handleClickResetAnswer]);

  const answerCheckColor = useCallback(
    (contentIndex: number, blankIndex: number) => {
      if (isShowAnswer) {
        if (
          userChoices[blankIndex].answerIndex ===
          contents.data.choice[contentIndex].answerIndex
        ) {
          return "answer-right";
        } else {
          return "answer-wrong";
        }
      }
      return "";
    },
    [isShowAnswer, userChoices, contents.data.choice],
  );

  const blankBoxes = useMemo(() => {
    if (userChoices.length < 1) return;
    let blankCount = -1;
    return contents.data.choice.map((content, contentIndex) => {
      if (content.isChoice) {
        blankCount++;
        const blankIndex = blankCount;
        return (
          <BlankBox
            className={`blank text ${
              !isShowAnswer && selectedBlankBox === blankIndex ? "active" : ""
            } ${answerCheckColor(contentIndex, blankIndex)}`}
            key={contentIndex}
            onClick={() => {
              if (!!userChoices[blankIndex].text) return;
              setSelectedBlankBox(blankIndex);
              setSelectedChoiceBox(undefined);
            }}
          >
            {/* TODO: key설명 클릭하면 클래스 active 추가됨 */}
            <div className="text">
              <HtmlContentComponent html={userChoices[blankIndex].text ?? ""} />
            </div>
          </BlankBox>
        );
      } else {
        return (
          <div className="text" key={contentIndex}>
            <HtmlContentComponent html={content.text} />
          </div>
        );
      }
    });
  }, [
    contents.data.choice,
    selectedBlankBox,
    userChoices,
    answerCheckColor,
    isShowAnswer,
  ]);

  const choiceBoxes = useMemo(() => {
    if (userChoices.length < 1) return;
    return contents.data.choice.map((content, contentIndex) => {
      if (!content.isChoice) return;
      const isChecked = userChoices.find((userChoice) => {
        return userChoice.text === content.text;
      });
      return (
        <div className="inp-grp" key={contentIndex}>
          <input
            type="checkbox"
            name={`answer${contentIndex}`}
            id={`answer${contentIndex}`}
            className="inp-chck-line none"
            checked={selectedChoiceBox === contentIndex}
            disabled={isChecked !== undefined}
          />
          <label
            htmlFor={`answer${contentIndex}`}
            className="label-chck-line"
            onClick={() => {
              if (
                isShowAnswer ||
                selectedBlankBox === undefined ||
                userChoices[selectedBlankBox].text.length > 0 ||
                isChecked !== undefined
              )
                return;
              const copyUserChoices = [...userChoices];
              copyUserChoices[selectedBlankBox] = {
                text: content.text,
                answerIndex: content.answerIndex,
              };
              setSelectedChoiceBox(contentIndex);
              setUserChoices(copyUserChoices);
            }}
          >
            <div className="text">
              <HtmlContentComponent html={content.text} />
            </div>
          </label>
        </div>
      );
    });
  }, [
    contents.data.choice,
    selectedBlankBox,
    userChoices,
    isShowAnswer,
    selectedChoiceBox,
  ]);

  const isShowAnswerButton = useMemo(() => {
    if (userChoices.find((userChoice) => userChoice.text.length === 0)) {
      return true;
    }
    return false;
  }, [userChoices]);

  const handleClickModalClose = () => {
    handleAudioReset();
  };

  const handleClickModalVideoBtn = () => {
    handleAudioReset();
    setIsModalSolutionOpen(false);
    setIsModalVideoOpen(true);
  };

  const isCorrect = useMemo(() => {
    return userChoices.find((userChoice, userChoiceIndex) => {
      return userChoice.answerIndex !== userChoiceIndex;
    });
  }, [userChoices]);

  const handleClickShowAnswer = useCallback(() => {
    setSelectedBlankBox(undefined);
    setSelectedChoiceBox(undefined);
    setIsShowAnswer(true);
    setIsModalSolutionOpen(true);
    handleClickAudioButton(
      modalIdRef.current,
      isCorrect === undefined
        ? contents.data.quizPopup.data.correct.soundEffect?.src ?? ""
        : contents.data.quizPopup.data.incorrect.soundEffect?.src ?? "",
    );
  }, [contents.data.quizPopup.data, isCorrect, handleClickAudioButton]);

  return (
    <>
      {contents.data.exampleContents && (
        <ComponentGrayLine contents={contents.data.exampleContents} />
      )}

      <div className="conversation-wrap">
        <div className="quiz-sentence-wrap">
          {contents.data.character && (
            <div className="img-grp">
              <div className="img-wrap">
                {/* TODO: key설명 - 음성이 있을 경우, 누르면 단일 음성이 재생되며, conversation-wrap 에 active 추가 */}
                <div className="img-round">
                  <button className="btn-profile">
                    <ImgProfileDefaultComponent />
                  </button>
                </div>
              </div>
              <p className="name">{contents.data.character.name}</p>
            </div>
          )}

          {blankBoxes}
        </div>
      </div>
      {/* TODO: key설명 정답확인후 정답일 때 answer-right 추가 */}
      {/* TODO: key설명 정답확인후 오답일 때 answer-wrong 추가 */}
      <div className="quiz-answer-wrap hori-answer-wrap">{choiceBoxes}</div>
      <div className="btns-wrap">
        <ComponentButtonRadiBorderMain
          text="다시하기"
          onClickBtn={handleClickResetAnswer}
        />
        <ComponentButtonRadiFillMain
          text="정답확인"
          onClickBtn={handleClickShowAnswer}
          isDisabled={isShowAnswerButton}
        />
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
        isCorrect={isCorrect === undefined ? true : false}
        contents={contents.data.quizPopup}
        handleClickModalCloseBtnCallback={handleClickModalClose}
        handleClickModalVideoBtnCallback={handleClickModalVideoBtn}
      />
      <ModalVideo
        isModalOpen={isModalVideoOpen}
        setIsModalOpen={setIsModalVideoOpen}
        videoSrc={
          isCorrect === undefined
            ? contents.data.quizPopup.data.correct.video?.src ?? ""
            : contents.data.quizPopup.data.incorrect.video?.src ?? ""
        }
      />
    </>
  );
};

export default WordsInOrderComponent;
