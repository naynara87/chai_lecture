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
import { useEffect, useMemo, useState } from "react";
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
    const btnQuit = document.querySelector<HTMLDivElement>("#quit");
    window.parent.postMessage(
      {
        func: "progressRate",
        data: progressData,
      },
      "*",
    );
    btnQuit?.click();
  };

  const handleClickReport = async () => {
    if (courseId && lessonId && cornerId) {
      const contentIds = quizPageData.map((pageData) => pageData.contentId);
      try {
        await deleteQuestion(contentIds, initialDataFromPhp?.uid ?? "");
      } catch (error) {
        addToast("서버 통신에 실패했습니다. 다시 시도해주세요.", "error");
      }
    }
    window.parent.postMessage(
      {
        func: "report",
        data: progressData,
      },
      "*",
    );
  };

  useEffect(() => {
    // JavaScript를 사용하여 화면 가로 세로 비교 후 스타일 조정
    function adjustStyles() {
      const body = document.querySelector("main");

      if (!body) {
        return;
      }

      // if (window.innerWidth < window.innerHeight) {
      if (window.innerWidth < window.innerHeight) {
        // 가로가 세로보다 길 때
        body.classList.add("width_fit");
        body.classList.remove("height_fit");
      } else {
        // 세로가 가로보다 길 때는 다시 원래값으로
        body.classList.remove("width_fit");
        body.classList.add("height_fit");
      }
    }

    // 초기화 및 창 크기 변경 이벤트에 대한 리스너 등록
    adjustStyles();
    window.addEventListener("resize", adjustStyles);

    return () => {
      window.removeEventListener("resize", adjustStyles);
    };
  }, []);

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
              onClickReportBtn={handleClickReport}
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
            title={`평가 학습 결과에 재응시 결과가 반영됩니다. 
            재응시하시겠습니까?`}
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
