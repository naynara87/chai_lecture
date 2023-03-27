import {
  ComponentProblemCommentary,
  ComponentProblemGrade,
  ComponentProblemTopButtonArea,
  ComponentProblemUserInfo,
  LocalStorage,
  QuizData,
  ModalConfirm,
} from "chai-ui-v2";
import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPageUrl } from "../../util/url";
import LayoutQuestionHeader from "../molecules/LayoutQuestionHeader";

const QuestionScore = () => {
  const [quizPageIdx, setQuizPageIdx] = useState(0);
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);

  const { state } = useLocation();
  const { courseId, cornerId, lessonId } = useParams();
  const navigate = useNavigate();

  const quizPageData = useMemo(() => {
    return LocalStorage.getItem("pageData") as QuizData[];
  }, []);

  const handleClickGradePageIdx = (pageIdx: number) => {
    setQuizPageIdx(pageIdx);
  };

  const handleClickRestartQuiz = () => {
    if (courseId && lessonId && cornerId) {
      navigate(getPageUrl(courseId, lessonId, cornerId, 1));
    }
  };

  console.log(state.pages);

  return (
    <>
      <LayoutQuestionHeader
        headerText={`${state.lessonName} ${state.lessonType} 채점 결과`}
        solvingTime={state.solvingTime}
        isShowSolvingTime={false}
      />
      <main className="cai-main problem-main">
        <ComponentProblemTopButtonArea
          quizPageData={quizPageData}
          solvingTime={state.solvingTime}
          onClickRestartButton={() => setIsModalConfirmOpen(true)}
        />
        <div className="layout-panel-wrap grid-h-3-7">
          <div className="layout-panel pd-40">
            <ComponentProblemUserInfo
              quizPageData={quizPageData}
              quizTypeText={`${state.lessonName} ${state.lessonType} 채점 결과`}
            />
            <ComponentProblemGrade
              quizPageData={quizPageData}
              quizPageIdx={quizPageIdx}
              onClickGradePageIdx={handleClickGradePageIdx}
            />
          </div>
          <div className="layout-panel">
            <ComponentProblemCommentary
              quizPageIdx={quizPageIdx}
              quizPageData={state.pages[quizPageIdx].data}
            />
          </div>
        </div>
        <ModalConfirm
          isModalOpen={isModalConfirmOpen}
          setIsModalOpen={setIsModalConfirmOpen}
          description="학습 성취도에는 첫 번째 점수만 반영됩니다. 그래도 다시 푸시겠어요?"
          rightButtonText="다시 풀기"
          leftButtonText="취소"
          title=""
          handleClickRightButton={handleClickRestartQuiz}
          handleClickLeftButton={() => setIsModalConfirmOpen(false)}
        />
      </main>
    </>
  );
};

export default QuestionScore;
