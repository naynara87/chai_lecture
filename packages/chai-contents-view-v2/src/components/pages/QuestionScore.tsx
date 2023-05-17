import {
  ComponentProblemCommentary,
  ComponentProblemGrade,
  ComponentProblemTopButtonArea,
  ComponentProblemUserInfo,
  LocalStorage,
  QuizData,
  ModalConfirmView,
  ComponentProblemDefault,
  deleteQuestion,
  useToast,
  useLmsInputValue,
} from "chai-ui-v2";
import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPageUrl } from "../../util/url";
import LayoutQuestionHeader from "../molecules/LayoutQuestionHeader";
import useProgressRate from "../../hooks/useProgressRate";
import useLesson from "../../hooks/useLesson";

const QuestionScore = () => {
  const [quizPageIdx, setQuizPageIdx] = useState(-1);
  const [isModalRestartConfirmOpen, setIsModalRestartConfirmOpen] =
    useState(false);
  const [isModalExitConfirmOpen, setIsModalExitConfirmOpen] = useState(false);
  const { addToast } = useToast();
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();

  const { state } = useLocation();
  const { courseId, cornerId, lessonId } = useParams();
  const navigate = useNavigate();

  const { lessonMetaData, totalPages } = useLesson(lessonId);

  const { progressData } = useProgressRate({
    lessonMetaData,
    totalPages,
    isCompleted: true,
  });

  const quizPageData = useMemo(() => {
    return LocalStorage.getItem("pageData") as QuizData[];
  }, []);

  const handleClickGradePageIdx = (pageIdx: number) => {
    setQuizPageIdx(pageIdx);
  };

  const handleClickRestartQuiz = async () => {
    if (courseId && lessonId && cornerId) {
      const contentIds = quizPageData.map((pageData) => pageData.contentId);
      try {
        await deleteQuestion(contentIds, initialDataFromPhp?.uid ?? "");
        navigate(
          getPageUrl(courseId, lessonId, cornerId, state.totalPages[0]),
          {
            state: {
              isRestartedQuiz: true,
            },
          },
        );
      } catch (error) {
        addToast("서버 통신에 실패했습니다. 다시 시도해주세요.", "error");
      }
    }
  };

  const handleClickClose = async () => {
    if (courseId && lessonId && cornerId) {
      const contentIds = quizPageData.map((pageData) => pageData.contentId);
      try {
        await deleteQuestion(contentIds, initialDataFromPhp?.uid ?? "");
      } catch (error) {
        addToast("서버 통신에 실패했습니다. 다시 시도해주세요.", "error");
      }
    }
    const btnQuit = document.querySelector<HTMLDivElement>("#quit");
    // await saveProgress();
    window.parent.postMessage(
      {
        func: "progressRate",
        data: progressData,
      },
      "*",
    );
    btnQuit?.click();
  };

  return (
    <div className="cai-view-yahei">
      <LayoutQuestionHeader
        headerText={`${state.lessonName} 채점 결과`}
        solvingTime={state.solvingTime}
        isShowSolvingTime={false}
      />
      <main className="cai-main problem-main">
        <ComponentProblemTopButtonArea
          quizPageData={quizPageData}
          solvingTime={state?.solvingTime}
          onClickRestartButton={() => setIsModalRestartConfirmOpen(true)}
          onClickExitButton={() => setIsModalExitConfirmOpen(true)}
        />
        <div className="layout-panel-wrap grid-h-3-7">
          <div className="layout-panel pd-40">
            <ComponentProblemUserInfo
              quizPageData={quizPageData}
              quizTypeText={state.lessonName}
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
                quizTemplateData={state?.pages[quizPageIdx].data}
                quizPageData={quizPageData}
              />
            )}
          </div>
        </div>
        <div className="cai-view-yahei">
          <ModalConfirmView
            isModalOpen={isModalRestartConfirmOpen}
            setIsModalOpen={setIsModalRestartConfirmOpen}
            description=""
            rightButtonText="다시 풀기"
            leftButtonText="취소"
            title={`학습 성취도에는 첫 번째 점수만 반영됩니다.
            그래도 다시 푸시겠어요?`}
            handleClickRightButton={handleClickRestartQuiz}
            handleClickLeftButton={() => setIsModalRestartConfirmOpen(false)}
          />
          <ModalConfirmView
            isModalOpen={isModalExitConfirmOpen}
            setIsModalOpen={setIsModalExitConfirmOpen}
            description=""
            rightButtonText="나가기"
            leftButtonText="취소"
            title={`이 페이지를 닫고 마이페이지로 이동할까요?
            채점결과 및 해설은 다시 볼 수 있습니다.`}
            handleClickRightButton={() => handleClickClose()}
            handleClickLeftButton={() => setIsModalExitConfirmOpen(false)}
          />
        </div>
      </main>
    </div>
  );
};

export default QuestionScore;
