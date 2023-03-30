import {
  ComponentProblemCommentary,
  ComponentProblemGrade,
  ComponentProblemTopButtonArea,
  ComponentProblemUserInfo,
  LocalStorage,
  QuizData,
  ModalConfirm,
  ComponentProblemDefault,
} from "chai-ui-v2";
import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPageUrl } from "../../util/url";
import LayoutQuestionHeader from "../molecules/LayoutQuestionHeader";

const QuestionScore = () => {
  const [quizPageIdx, setQuizPageIdx] = useState(-1);
  const [isModalRestartConfirmOpen, setIsModalRestartConfirmOpen] =
    useState(false);
  const [isModalExitConfirmOpen, setIsModalExitConfirmOpen] = useState(false);

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
          onClickRestartButton={() => setIsModalRestartConfirmOpen(true)}
          onClickExitButton={() => setIsModalExitConfirmOpen(true)}
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
            {quizPageIdx < 0 ? (
              <ComponentProblemDefault />
            ) : (
              <ComponentProblemCommentary
                quizPageIdx={quizPageIdx}
                quizTemplateData={state.pages[quizPageIdx].data}
                quizPageData={quizPageData}
              />
            )}
          </div>
        </div>
        <ModalConfirm
          isModalOpen={isModalRestartConfirmOpen}
          setIsModalOpen={setIsModalRestartConfirmOpen}
          description="학습 성취도에는 첫 번째 점수만 반영됩니다. 그래도 다시 푸시겠어요?"
          rightButtonText="다시 풀기"
          leftButtonText="취소"
          title=""
          handleClickRightButton={handleClickRestartQuiz}
          handleClickLeftButton={() => setIsModalRestartConfirmOpen(false)}
        />
        <ModalConfirm
          isModalOpen={isModalExitConfirmOpen}
          setIsModalOpen={setIsModalExitConfirmOpen}
          description="이 페이지를 닫고 마이페이지로 이동할까요? 채점결과 및 해설은 다시 볼 수 있습니다."
          rightButtonText="나가기"
          leftButtonText="취소"
          title=""
          handleClickRightButton={() =>
            console.log("lms 내 마이페이지로 이동해야합니다.")
          }
          handleClickLeftButton={() => setIsModalExitConfirmOpen(false)}
        />
      </main>
    </>
  );
};

export default QuestionScore;
