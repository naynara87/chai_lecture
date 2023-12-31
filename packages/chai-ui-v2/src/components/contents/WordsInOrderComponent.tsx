import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useGlobalAudio,
  usePageCompleted,
  useXapi,
  WordsInOrderContentData,
} from "../../core";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
} from "../atoms";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { LayoutModalSolution } from "../modal";
import ModalVideo from "../modal/ModalVideo";
import ComponentGrayLine from "../molecules/ComponentGrayLine";
import { v4 as uuidv4 } from "uuid";
import ImgProfileDefault from "../../assets/images/img/img_profile_default.png";
import { sortChoices } from "../../core/util/sortChoices";

type WordInOrderChoice = {
  text: string;
  answerIndex: number;
};

type choice = {
  text: string;
  isChoice: boolean;
  answerIndex: number;
};
export interface WordsInOrderComponentProps {
  contents: WordsInOrderContentData;
}

const WordsInOrderComponent = ({ contents }: WordsInOrderComponentProps) => {
  // TODO activity state 계산시 userChoices.length > 0 일때만 completeProgress 조건에 넣기
  const [selectedBlankBox, setSelectedBlankBox] = useState<
    undefined | number
  >();
  const [selectedChoiceBox, setSelectedChoiceBox] = useState<
    undefined | number
  >();
  const [userChoices, setUserChoices] = useState<WordInOrderChoice[]>([]);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [sortAnswers, setSortAnswers] = useState<choice[]>([]);

  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);

  const sentences = useMemo(() => {
    const newChoice: choice[] = [];
    contents.data.choice.forEach((_choice) => {
      if (_choice.isChoice) {
        newChoice.push(_choice);
      }
    });
    return newChoice;
  }, [contents]);

  useEffect(() => {
    sortChoices(sentences, setSortAnswers);
  }, [sentences]);

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
    let blankCount = -1;
    return contents.data.choice.map((content, contentIndex) => {
      if (content.isChoice) {
        if (userChoices.length < 1) return;
        blankCount++;
        const blankIndex = blankCount;
        return (
          <div
            className={`blank text cursor-pointer ${
              !isShowAnswer && selectedBlankBox === blankIndex ? "active" : ""
            } ${answerCheckColor(contentIndex, blankIndex)}`}
            key={contentIndex}
            onClick={() => {
              if (!!userChoices[blankIndex].text) return;
              setSelectedBlankBox(blankIndex);
              setSelectedChoiceBox(undefined);
            }}
          >
            {/* key설명 클릭하면 클래스 active 추가됨 */}
            <div className="text">
              {userChoices[blankIndex].text ? (
                <HtmlContentComponent html={userChoices[blankIndex].text} />
              ) : (
                "\u00A0"
              )}
            </div>
          </div>
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
    return sortAnswers.map((content, contentIndex) => {
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
    selectedBlankBox,
    userChoices,
    isShowAnswer,
    selectedChoiceBox,
    sortAnswers,
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
    setComponentCompleted(contents.id);
    handleClickAudioButton(
      "solutionModal",
      modalUuidRef.current,
      0,
      isCorrect === undefined
        ? contents.data.quizPopup.data.correct.soundEffect?.src ?? ""
        : contents.data.quizPopup.data.incorrect.soundEffect?.src ?? "",
    );
    xapiAnswered(contents.id);
  }, [
    contents,
    isCorrect,
    handleClickAudioButton,
    setComponentCompleted,
    xapiAnswered,
  ]);

  return (
    <>
      {contents.data.exampleContents && (
        <ComponentGrayLine contents={contents.data.exampleContents} />
      )}

      <div className="conversation-wrap">
        <div className="quiz-sentence-wrap">
          {contents.meta?.isUseCharacter && contents.data.character && (
            <div className="img-grp">
              <div className="img-wrap">
                {/* key설명 - 음성이 있을 경우, 누르면 단일 음성이 재생되며, conversation-wrap 에 active 추가 */}
                <div className="img-round">
                  <button className="btn-profile">
                    <img
                      src={contents.data.character.src || ImgProfileDefault}
                      alt=""
                      className="profile"
                    />
                  </button>
                </div>
              </div>
              <p className="name">{contents.data.character.name}</p>
            </div>
          )}

          {blankBoxes}
        </div>
      </div>
      {/* key설명 정답확인후 정답일 때 answer-right 추가 */}
      {/* key설명 정답확인후 오답일 때 answer-wrong 추가 */}
      <div className="quiz-answer-wrap hori-answer-wrap">{choiceBoxes}</div>
      {userChoices.length > 0 && (
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
      )}
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
