import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { LayoutModalSolution } from "../modal";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
} from "../atoms";
import LineCheckBoxes from "../molecules/LineCheckBoxes";
import {
  TemplateProps,
  TemplateQuizSentencesInOrderData,
  useContentMapper,
  useGlobalAudio,
  usePageCompleted,
  useXapi,
} from "../../core";
import ModalVideo from "../modal/ModalVideo";
import { v4 as uuidv4 } from "uuid";
import DialogueSentenceBlank from "../contents/DialogueSentenceBlank";

export type SentenceInOrderChoice = {
  text: string;
  answerIndex: number;
};

interface TemplateQuizSentenceBlankProps extends TemplateProps {}

const TemplateQuizSentenceBlank = ({
  template,
}: TemplateQuizSentenceBlankProps) => {
  const thisPage = template as TemplateQuizSentencesInOrderData;

  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
  const [userChoices, setUserChoices] = useState<SentenceInOrderChoice[]>([]);
  const [selectedBlankBox, setSelectedBlankBox] = useState<
    undefined | number
  >();
  const [selectedChoiceBox, setSelectedChoiceBox] = useState<
    undefined | number
  >();
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const modalUuidRef = useRef(uuidv4());

  const {
    globalAudioRef,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  } = useGlobalAudio();
  const { setPushCompletedPageComponents } = usePageCompleted();
  const { xapiAnswered } = useXapi();

  useEffect(() => {
    setPushCompletedPageComponents("quiz", template.id);
  }, [setPushCompletedPageComponents, template.id]);

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
    if (!thisPage.mainContents) return;
    const copyUserChoices: SentenceInOrderChoice[] = [];
    thisPage.mainContents.data.characters.forEach((content) => {
      content.sentences.forEach((sentence) => {
        if (sentence.isChoice) {
          copyUserChoices.push({ text: "", answerIndex: -1 });
        }
      });
    });
    setUserChoices(copyUserChoices);
    setIsShowAnswer(false);
    setSelectedBlankBox(undefined);
    setSelectedChoiceBox(undefined);
  }, [thisPage.mainContents]);

  useEffect(() => {
    handleClickResetAnswer();
  }, [handleClickResetAnswer]);

  const isCorrect = useMemo(() => {
    return userChoices.find((userChoice, userChoiceIndex) => {
      return userChoice.answerIndex !== userChoiceIndex;
    });
  }, [userChoices]);

  const handleClickShowAnswer = useCallback(() => {
    if (!thisPage.mainContents) return;
    setSelectedBlankBox(undefined);
    setSelectedChoiceBox(undefined);
    setIsShowAnswer(true);
    setIsModalSolutionOpen(true);
    handleClickAudioButton(
      "solutionModal",
      modalUuidRef.current,
      0,
      isCorrect === undefined
        ? thisPage.mainContents.data.quizPopup.data.correct.soundEffect?.src ??
            ""
        : thisPage.mainContents.data.quizPopup.data.incorrect.soundEffect
            ?.src ?? "",
    );
    xapiAnswered(thisPage.mainContents.id);
  }, [handleClickAudioButton, isCorrect, thisPage.mainContents, xapiAnswered]);

  const handleClickModalClose = () => {
    handleAudioReset();
  };

  const handleClickModalVideoBtn = () => {
    handleAudioReset();
    setIsModalSolutionOpen(false);
    setIsModalVideoOpen(true);
  };

  const { getContentComponent } = useContentMapper();

  const titleContents = useMemo(() => {
    if (!thisPage.titleContents) return;
    return thisPage.titleContents.map((titleContent, contentIndex) => {
      return getContentComponent(titleContent, contentIndex);
    });
  }, [getContentComponent, thisPage]);

  return (
    <div className="layout-panel-wrap grid-h-5-5 dialogue-container dialogue-container-quiz-sentence-blank">
      <div className="layout-panel side-panel conversation-panel-wrap">
        {thisPage.titleContents && titleContents}
        {/* 230217 회화영역 */}
        <div>
          <ul className="conversation-wrapper">
            {/* speech bubble */}
            {thisPage.mainContents && (
              <DialogueSentenceBlank
                contents={thisPage.mainContents.data.characters}
                selectedBlankBox={selectedBlankBox}
                userChoices={userChoices}
                setSelectedBlankBox={setSelectedBlankBox}
                setSelectedChoiceBox={setSelectedChoiceBox}
                isShowAnswer={isShowAnswer}
              />
            )}
            {/* end speech bubble */}
          </ul>
        </div>
      </div>
      <div className="layout-panel wide-panel">
        <form method="post" className="quiz-container">
          <div className="quiz-answer-wrap hori-answer-wrap flex-direction-column">
            {thisPage.mainContents && (
              <LineCheckBoxes
                contents={thisPage.mainContents.data.characters}
                userChoices={userChoices}
                selectedChoiceBox={selectedChoiceBox}
                selectedBlankBox={selectedBlankBox}
                setSelectedChoiceBox={setSelectedChoiceBox}
                setUserChoices={setUserChoices}
                isShowAnswer={isShowAnswer}
              />
            )}
          </div>
        </form>
        <div className="btns-wrap">
          <ComponentButtonRadiBorderMain
            text="다시하기"
            onClickBtn={handleClickResetAnswer}
          />
          <ComponentButtonRadiFillMain
            text="정답확인"
            onClickBtn={handleClickShowAnswer}
            isDisabled={
              !!userChoices.find((userChoice) => userChoice.text.length < 1)
            }
          />
        </div>
      </div>
      {thisPage.mainContents && (
        <>
          <LayoutModalSolution
            isModalOpen={isModalSolutionOpen}
            setIsModalOpen={setIsModalSolutionOpen}
            isCorrect={isCorrect === undefined ? true : false}
            contents={thisPage.mainContents.data.quizPopup}
            handleClickModalCloseBtnCallback={handleClickModalClose}
            handleClickModalVideoBtnCallback={handleClickModalVideoBtn}
          />
          <ModalVideo
            isModalOpen={isModalVideoOpen}
            setIsModalOpen={setIsModalVideoOpen}
            videoSrc={
              isCorrect === undefined
                ? thisPage.mainContents.data.quizPopup.data.correct.video
                    ?.src ?? ""
                : thisPage.mainContents.data.quizPopup.data.incorrect.video
                    ?.src ?? ""
            }
          />
        </>
      )}
    </div>
  );
};

export default TemplateQuizSentenceBlank;
