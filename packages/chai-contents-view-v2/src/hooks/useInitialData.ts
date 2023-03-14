import { CornerListData } from "chai-ui-v2";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { completeCornersState } from "../state/completeCornersState";
import useCorner from "./useCorner";
import useLesson from "./useLesson";

const useInitialData = () => {
  const [initialCorner, setInitialCorner] = useState<CornerListData>();
  const [completedCorners, setCompletedCorners] =
    useRecoilState(completeCornersState);

  const { corners, lessonMetaData } = useLesson(1);
  const { cornerMetaData } = useCorner(initialCorner?.id);

  const setInitialData = useCallback(() => {
    const currentCornerIndex = completedCorners.findIndex((corner) => {
      return corner.isCompleted === false;
    }, []);
    setInitialCorner(corners[currentCornerIndex]);
  }, [corners, completedCorners]);

  const isBlockedChangeCurrentCorner = useMemo(() => {
    if (completedCorners.length !== 0) {
      return true;
    }
    return false;
  }, [completedCorners]);

  const initCompletedCorner = useCallback(() => {
    // 최초 진입시 completedCorners 초기화
    if (isBlockedChangeCurrentCorner) return;
    setCompletedCorners(
      corners.map((corner) => ({
        id: corner.id,
        isCompleted: false,
      })),
    );
  }, [corners, setCompletedCorners, isBlockedChangeCurrentCorner]);

  useEffect(() => {
    initCompletedCorner();
  }, [initCompletedCorner]);

  useEffect(() => {
    setInitialData();
  }, [setInitialData]);

  return {
    corners,
    lessonMetaData,
    cornerMetaData,
  };
};

export default useInitialData;
