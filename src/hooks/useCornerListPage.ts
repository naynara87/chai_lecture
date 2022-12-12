import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cornersState } from "../state/corners";
import { eduModeState } from "../state/eduModeState";
import { reviewCornerIndexState } from "../state/reviewCornerIndexState";
import { Corner2 } from "../types/appData";
import useInitialData from "./useInitialData";

const useCornerListPage = () => {
  const { initialCorner, corners, initialCornerIndex, appMetaData, continueLastLearningData } =
    useInitialData();
  // NOTE: 처음을 제외하고 currentCorner 변경은 completedCorner 변경에 의해서만 변경되어야 함
  const [currentCorner, setCurrentCorner] = useState<Corner2>();
  const [completedCorners, setCompletedCorners] = useRecoilState(cornersState);
  // 코너 리스트에 현재 진행할 코너가 어떤 것인지 알 수 있어야 함

  const [eduMode, setEduMode] = useRecoilState(eduModeState);
  const [reviewCornerIndex, setReviewCornerIndex] = useRecoilState(reviewCornerIndexState);

  // 시작 코너 - initial
  useEffect(() => {
    if (!currentCorner && initialCorner) {
      setCurrentCorner(initialCorner);
    }
  }, [currentCorner, initialCorner]);

  // 진도체크용 recoil 초기값 설정
  useEffect(() => {
    if (completedCorners.length !== 0) {
      return;
    }
    setCompletedCorners(
      corners.map((corner, index) => ({
        id: corner.id,
        isCompleted: index < initialCornerIndex,
      })),
    );
  }, [corners, initialCornerIndex, setCompletedCorners, completedCorners.length]);

  // 현재코너 - 최초: initial, 이후: current
  useEffect(() => {
    if (
      completedCorners.filter((corner) => {
        return corner.isCompleted === true;
      }).length >= corners.length
    ) {
      setEduMode("review");
    } else {
      setEduMode("edu");
    }
    if (eduMode === "edu") {
      const currentCompletedCorner = completedCorners.find(
        (corner) => corner.isCompleted === false,
      );
      if (currentCompletedCorner) {
        const _currentCorner = corners.find((corner) => corner.id === currentCompletedCorner.id);
        setCurrentCorner(_currentCorner);
      }
    } else if (eduMode === "review") {
      if (reviewCornerIndex >= completedCorners.length) {
        setReviewCornerIndex(0);
      } else {
        setCurrentCorner(corners[reviewCornerIndex]);
      }
    }
  }, [completedCorners, corners, eduMode, reviewCornerIndex, setEduMode, setReviewCornerIndex]);

  return { currentCorner, corners, appMetaData, continueLastLearningData };
};

export default useCornerListPage;
