import { useCallback, useEffect, useMemo, useState } from "react";
import { Corner2, ID, Page } from "../types/appData";
import useCorner from "./useCorner";
import useLearningLog from "./useLearningLog";
import useLesson from "./useLesson";

const useInitialData = () => {
  const [initialCorner, setInitialCorner] = useState<Corner2>();
  const [initialPage, setCurrentPageOfCorner] = useState<Page>();

  const lessonIdMemo: ID | undefined = useMemo(() => {
    if (process.env.NODE_ENV === "development") {
      return 1;
    }
    // TODO: 쿠키에서 lessonId를 가져오는 로직을 추가해야한다. => BBC-657
    return 1;
  }, []);

  // 코너 리스트 조회
  const { corners, appMetaData } = useLesson(lessonIdMemo);

  // 학습 이력 조회
  const { learningLogData } = useLearningLog(lessonIdMemo);

  // 현재 코너에 해당되는 페이지 리스트 조회
  const { pages: initialPages } = useCorner(initialCorner?.id);

  const setInitialData = useCallback(() => {
    // 학습 이력 기반으로 현재 코너 결정
    const lastLearningCorner = corners.find((corner) => corner.id === learningLogData?.turnId);

    // 학습 이력 조회 데이터와 매칭되는 코너가 없는 경우
    if (!lastLearningCorner) {
      setInitialCorner(corners?.[0]); // 첫 번째 코너
      setCurrentPageOfCorner(initialPages?.[0]); // 첫 번째 페이지
      return;
    }

    // 학습 이력 조회 데이터와 매칭되는 코너가 있는 경우
    if (lastLearningCorner) {
      // 지정된 페이지가 마지막 페이지 인 경우
      if (
        lastLearningCorner?.pages?.[lastLearningCorner?.pages?.length - 1] ===
        learningLogData?.pageId
      ) {
        // 다음 코너가 있는 경우
        if (corners?.[corners?.findIndex((corner) => corner.id === lastLearningCorner?.id) + 1]) {
          setInitialCorner(corners?.[corners?.indexOf(lastLearningCorner) + 1]); // 다음 코너
          setCurrentPageOfCorner(initialPages?.[0]); // 첫 번째 페이지
          return;
        }
        // 다음 코너가 없는 경우 - 해당 레슨을 완강 한 경우(복습 시)
        setInitialCorner(corners?.[0]); // 첫 번째 코너
        setCurrentPageOfCorner(initialPages?.[0]); // 첫 번째 페이지
        return;
      }

      // 지정된 페이지가 마지막 페이지가 아닌 경우
      setInitialCorner(lastLearningCorner); // 지난 학습 이력에 해당하는 코너
      if (!learningLogData?.pageId) {
        // 지난 학습 이력에 페이지가 없는 경우
        setCurrentPageOfCorner(initialPages?.[0]); // 첫 번째 페이지
        return;
      }
      // 지정된 페이지가 현재 코너에 포함되어 있지 않은 경우
      const lastLearningPageId = lastLearningCorner?.pages?.find(
        (pageId) => pageId.toString() === learningLogData.pageId.toString(),
      );
      if (!lastLearningPageId) {
        setCurrentPageOfCorner(initialPages?.[0]); // 첫 번째 페이지
        return;
      }
      setCurrentPageOfCorner(
        initialPages?.[
          initialPages?.findIndex((page) => page.id.toString() === lastLearningPageId.toString()) +
            1
        ],
      ); // 다음 페이지
    }
  }, [corners, learningLogData, initialPages]);

  const initialCornerIndex = useMemo(() => {
    return corners?.findIndex((corner) => corner.id === initialCorner?.id);
  }, [corners, initialCorner]);

  useEffect(() => {
    setInitialData();
  }, [setInitialData]);

  return {
    corners,
    initialPages,
    initialCorner,
    initialCornerIndex,
    initialPage,
    appMetaData,
  };
};

export default useInitialData;
