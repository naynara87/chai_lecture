import { useCallback, useEffect, useMemo, useState } from "react";
import { CORNER_LIST_URL } from "../constants/url";
import { Corner2, ID, InitialAppData, Page } from "../types/appData";
import { getCookie } from "../utils/cookie";
import useCorner from "./useCorner";
import useLesson from "./useLesson";

interface ContinueLastLearningData {
  isContinue: boolean;
  courseId: ID;
  lessonId: ID;
  cornerId: ID;
  pageId: ID;
}

const useInitialData = () => {
  const [initialCorner, setInitialCorner] = useState<Corner2>();
  const [initialPage, setCurrentPageOfCorner] = useState<Page>();
  // const [isContinue, setHasLastLearningPageData] = useState(false); // 이어보기 전행 여부
  const [continueLastLearningData, setContinueLastLearningData] =
    useState<ContinueLastLearningData>(); // 이어보기 여부

  const learningLogCookieData = getCookie<InitialAppData>("bubble-player");

  const lessonIdMemo: ID | undefined = useMemo(() => {
    return learningLogCookieData?.lessonId ?? 1;
  }, [learningLogCookieData?.lessonId]);

  // 코너 리스트 조회
  const { corners, appMetaData } = useLesson(lessonIdMemo);

  // 현재 코너에 해당되는 페이지 리스트 조회
  const { pages: initialPages } = useCorner(initialCorner?.id);

  const isPageListPage = useMemo(() => {
    const url = window.location.href;
    return url.includes(CORNER_LIST_URL);
  }, []);

  const setInitialData = useCallback(() => {
    // 학습 이력 기반으로 현재 코너 결정
    const lastLearningCorner = corners.find(
      (corner) => corner.id.toString() === learningLogCookieData?.turnId?.toString(),
    );

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
        lastLearningCorner?.pages?.[lastLearningCorner?.pages?.length - 1] &&
        learningLogCookieData?.pageId &&
        lastLearningCorner?.pages?.[lastLearningCorner?.pages?.length - 1]?.toString() ===
          learningLogCookieData?.pageId?.toString()
      ) {
        // 다음 코너가 있는 경우
        if (
          corners?.[
            corners?.findIndex(
              (corner) => corner?.id?.toString() === lastLearningCorner?.id?.toString(),
            ) + 1
          ]
        ) {
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
      if (!learningLogCookieData?.pageId) {
        // 지난 학습 이력에 페이지가 없는 경우
        setCurrentPageOfCorner(initialPages?.[0]); // 첫 번째 페이지
        return;
      }
      // 지정된 페이지가 현재 코너에 포함되어 있지 않은 경우
      const lastLearningPageId = lastLearningCorner?.pages?.find(
        (pageId) => pageId.toString() === learningLogCookieData?.pageId?.toString(),
      );
      if (!lastLearningPageId) {
        setCurrentPageOfCorner(initialPages?.[0]); // 첫 번째 페이지
        return;
      }
      const nextPage =
        initialPages?.[
          initialPages?.findIndex(
            (page) => page?.id?.toString() === lastLearningPageId?.toString(),
          ) + 1
        ];
      setCurrentPageOfCorner(nextPage); // 다음 페이지
      if (
        appMetaData &&
        isPageListPage &&
        nextPage !== undefined &&
        continueLastLearningData === undefined
      ) {
        setContinueLastLearningData({
          isContinue: true,
          courseId: appMetaData?.courseId,
          lessonId: appMetaData?.lessonId,
          cornerId: lastLearningCorner?.id,
          pageId: nextPage?.id,
        });
      }
    }
  }, [
    corners,
    learningLogCookieData,
    initialPages,
    setInitialCorner,
    setCurrentPageOfCorner,
    isPageListPage,
    appMetaData,
    continueLastLearningData,
  ]);

  const initialCornerIndex = useMemo(() => {
    return corners?.findIndex((corner) => corner.id?.toString() === initialCorner?.id?.toString());
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
    continueLastLearningData,
  };
};

export default useInitialData;
