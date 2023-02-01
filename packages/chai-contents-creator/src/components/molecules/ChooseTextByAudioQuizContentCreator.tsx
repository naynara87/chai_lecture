import {
  QuestionList,
  QuizAnswerWrap,
  QuizIndex,
  AudioQuizAnswer,
  QuizWord,
  ChooseTextByAudioData,
  AudioButton,
} from "chai-ui";
import { useMemo } from "react";
import FileUploader from "./FileUploader";
import TextCreator from "./TextCreator";

interface ChooseTextByAudioQuizContentCreatorProps {
  answerData: ChooseTextByAudioData;
  id: string;
  handleFocusHtml:
    | ((
        id?: string | undefined,
        type?: string | undefined,
        index?: number | undefined
      ) => void)
    | undefined;
  focusEditor: string | undefined;
  quizIndex: number;
  handleSubmitText: (
    text: string,
    keyName?: string,
    index?: number | string
  ) => void;
  handleDeleteAudioAnswer: (index: number) => void;
  encodeFileToBase64: (fileBlob: Blob, contentIndex: number) => void;
  handleSubmitAnswerIndex: (
    answerIndex: number,
    index?: number | string
  ) => void;
}

const ChooseTextByAudioQuizContentCreator = ({
  id,
  answerData,
  handleFocusHtml,
  focusEditor,
  quizIndex,
  handleSubmitText,
  handleDeleteAudioAnswer,
  encodeFileToBase64,
  handleSubmitAnswerIndex,
}: ChooseTextByAudioQuizContentCreatorProps) => {
  const QuizAnswerContents = useMemo(() => {
    return Array(2)
      .fill("")
      .map((value, index) => {
        return (
          <AudioQuizAnswer key={index}>
            <input
              type="radio"
              name={id + `AudioQuizAnswer` + quizIndex}
              onClick={() => {
                handleSubmitAnswerIndex(index, quizIndex);
              }}
            />
            <QuizWord>
              <TextCreator
                id={id + `AudioQuizAnswer${index}` + quizIndex}
                html={answerData.choices[index]}
                keyName={"AudioQuizAnswer" + index}
                index={quizIndex}
                onSubmitHtml={handleSubmitText}
                focusEditor={focusEditor}
                onClickHtml={() => {
                  if (!handleFocusHtml) return;
                  handleFocusHtml(id, `AudioQuizAnswer${index}`, quizIndex);
                }}
                textMaxLength={5}
              />
            </QuizWord>
          </AudioQuizAnswer>
        );
      });
  }, [
    quizIndex,
    focusEditor,
    handleFocusHtml,
    id,
    handleSubmitText,
    answerData,
    handleSubmitAnswerIndex,
  ]);

  const audioContent = useMemo(() => {
    if (answerData.audio.src.length > 5) {
      return <AudioButton isAudio={false} />;
    } else {
      return (
        <FileUploader
          contentIndex={quizIndex}
          encodeFileToBase64={encodeFileToBase64}
        />
      );
    }
  }, [answerData, quizIndex, encodeFileToBase64]);

  return (
    <QuestionList>
      <QuizIndex>{`${quizIndex + 1}.`}</QuizIndex>
      <QuizAnswerWrap>{QuizAnswerContents}</QuizAnswerWrap>
      <>{audioContent}</>
      <button
        onClick={() => {
          handleDeleteAudioAnswer(quizIndex);
        }}
      >
        삭제
      </button>
    </QuestionList>
  );
};

export default ChooseTextByAudioQuizContentCreator;
