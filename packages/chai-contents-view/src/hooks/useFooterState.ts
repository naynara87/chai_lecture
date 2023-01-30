import { Corner2, CornerStateType, ID, QuizStateType } from "chai-ui";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CornerCompleteState, cornersState } from "../state/corners";

export interface FooterCornerState {
  id: ID;
  state: CornerStateType;
}

export interface QuizState {
  id: ID;
  isCorrect: QuizStateType;
}

interface UseFooterStateProps {
  currentCorner: Corner2 | undefined;
}
const useFooterState = ({ currentCorner }: UseFooterStateProps) => {
  const [cornerStateList, setCornerStateList] = useState<FooterCornerState[]>([]);
  // const [quizStateList, setQuizStateList] = useState<QuizState[]>([]);
  const [completedCorners] = useRecoilState(cornersState);

  const getCornerState = useCallback(
    (currentCorner: Corner2, comparingCorner: CornerCompleteState) => {
      if (currentCorner.id === comparingCorner.id) {
        return "current";
      } else if (comparingCorner.isCompleted) {
        return "completed";
      } else {
        return "inCompleted";
      }
    },
    [],
  );

  useEffect(() => {
    if (!currentCorner) return;
    const cornerStateList = completedCorners.map(
      (corner) =>
        ({
          id: corner.id,
          state: getCornerState(currentCorner, corner),
        } as FooterCornerState),
    );
    setCornerStateList(cornerStateList);
  }, [completedCorners, currentCorner, getCornerState]);

  // useEffect(() => {
  //   const quizStateList = getCookie("quiz-data").result.map((data: QuizState) => ({
  //     id: data.id,
  //     isCorrect: data.isCorrect,
  //   }));
  //   setQuizStateList(quizStateList);
  // }, []);

  return {
    cornerStateList,
    // quizStateList,
  };
};

export default useFooterState;
