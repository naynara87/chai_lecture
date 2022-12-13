import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { cornersState } from "../state/corners";
import { currentCornerState } from "../state/currentCornerState";
import { eduModeState } from "../state/eduModeState";
import { reviewCornerIndexState } from "../state/reviewCornerIndexState";
import useInitialData from "./useInitialData";

const useCornerListPage = () => {
  const { initialCorner, corners, initialCornerIndex, appMetaData, continueLastLearningData } =
    useInitialData();
  // NOTE: 처음을 제외하고 currentCorner 변경은 completedCorner 변경에 의해서만 변경되어야 함
  const [currentCorner, setCurrentCorner] = useRecoilState(currentCornerState);
  const [completedCorners, setCompletedCorners] = useRecoilState(cornersState);
  // 코너 리스트에 현재 진행할 코너가 어떤 것인지 알 수 있어야 함

  const [eduMode, setEduMode] = useRecoilState(eduModeState);
  const [reviewCornerIndex, setReviewCornerIndex] = useRecoilState(reviewCornerIndexState);

  const isBlockedChangeCurrentCorner = useMemo(() => {
    if (completedCorners.length !== 0) {
      return true;
    }
    if (initialCornerIndex === -1) {
      return true;
    }
    return false;
  }, [completedCorners, initialCornerIndex]);

  const initCompletedCorner = useCallback(() => {
    // 최초 진입시 completedCorners 초기화
    if (isBlockedChangeCurrentCorner) {
      return;
    }
    setCompletedCorners(
      corners.map((corner, index) => ({
        id: corner.id,
        isCompleted: index < initialCornerIndex,
      })),
    );
  }, [corners, initialCornerIndex, setCompletedCorners, isBlockedChangeCurrentCorner]);

  // 진도체크용 recoil 초기값 설정
  useEffect(() => {
    initCompletedCorner();
  }, [initCompletedCorner]);

  // 최초 진입시 currentCorner 설정
  useEffect(() => {
    if (completedCorners.length === 0) {
      setCurrentCorner(initialCorner);
      return;
    }
  }, [completedCorners, initialCorner, setCurrentCorner]);

  // eduMode에 따라 currentCorner 변경
  useEffect(() => {
    if (completedCorners.length === 0) {
      return;
    }
    if (
      completedCorners.every((corner) => {
        return corner.isCompleted === true;
      })
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
        const _currentCorner = corners.find(
          (corner) => corner.id?.toString() === currentCompletedCorner.id?.toString(),
        );
        setCurrentCorner(_currentCorner);
      }
    } else if (eduMode === "review") {
      if (reviewCornerIndex >= completedCorners.length) {
        setReviewCornerIndex(0);
      } else {
        setCurrentCorner(corners[reviewCornerIndex]);
      }
    }
  }, [
    completedCorners,
    corners,
    eduMode,
    reviewCornerIndex,
    setEduMode,
    setReviewCornerIndex,
    currentCorner,
    setCurrentCorner,
    initialCorner,
  ]);

  return { currentCorner, corners, appMetaData, continueLastLearningData };
};

export default useCornerListPage;
