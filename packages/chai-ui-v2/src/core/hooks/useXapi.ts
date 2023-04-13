import { cloneDeep } from "lodash";
import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { currentPageState, xapiActivityState, xapiV1State } from "../states";
import {
  CornerListData,
  CornerMeta,
  ID,
  LessonMeta,
  LRSActivityState,
  LRSCornerProgress,
  Page,
  ProgressPageData,
} from "../types";
import usePageCompleted from "./usePageCompleted";

const useXapi = () => {
  const [xapiV1] = useRecoilState(xapiV1State);
  const [xapiActivity, setXapiActivity] = useRecoilState(xapiActivityState);
  const [currentPage] = useRecoilState(currentPageState);

  const { completedPageComponents } = usePageCompleted();

  const xapiInitialize = useCallback(
    (courseId: ID, lessonId: ID, totalPages: ID[]) => {
      if (!xapiV1) return;
      const loadActivityState = xapiV1.sendInitialized(
        courseId,
        lessonId,
        totalPages,
      );
      setXapiActivity(loadActivityState);
    },
    [xapiV1, setXapiActivity],
  );

  const updateActivityState = useCallback(
    (activityValues: Partial<LRSActivityState>) => {
      if (!xapiActivity) return;
      const newActivityState = {
        ...xapiActivity,
        ...activityValues,
      };

      return newActivityState;
    },
    [xapiActivity],
  );

  const isCompletedCurrentPage = useMemo(() => {
    return (
      completedPageComponents.find(
        (completedComponent) => completedComponent.isCompleted === false,
      ) === undefined
    );
  }, [completedPageComponents]);

  const updateIsCorrectDataCheck = useCallback(
    (currentPage: Page, isCorrect: boolean) => {
      if (!xapiActivity) return;
      const currentTime = new Date();
      const currentTimeStamp = `${currentTime.getFullYear()}.${currentTime
        .getMonth()
        .toString()
        .padStart(2, "0")}.${currentTime
        .getDate()
        .toString()
        .padStart(
          2,
          "0",
        )} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
      if (isCorrect) {
        const newCorrectData = [...xapiActivity.correct_data];
        const findSamePage = newCorrectData.find(
          (quizPageData) => quizPageData.page_id === currentPage.id,
        );
        if (findSamePage) return;
        newCorrectData.push({
          page_id: currentPage.id,
          page_area_code: currentPage.pageAreaType,
          timestamp: currentTimeStamp,
        });
        const newXapiActivityState = updateActivityState({
          correct_data: newCorrectData,
        });
        setXapiActivity(newXapiActivityState);
      } else {
        const newInCorrectData = [...xapiActivity.incorrect_data];
        const findSamePage = newInCorrectData.find(
          (quizPageData) => quizPageData.page_id === currentPage.id,
        );
        if (findSamePage) return;
        newInCorrectData.push({
          page_id: currentPage.id,
          page_area_code: currentPage.pageAreaType,
          timestamp: currentTimeStamp,
        });
        const newXapiActivityState = updateActivityState({
          incorrect_data: newInCorrectData,
        });
        setXapiActivity(newXapiActivityState);
      }
    },
    [xapiActivity, setXapiActivity, updateActivityState],
  );

  const updateProgressDataPageCheck = useCallback(
    (prevCornerId: ID, nextCornerId: ID, currentPageId: ID, nextPageId: ID) => {
      if (!xapiActivity) return;
      const newProgressData = cloneDeep(xapiActivity.progress_data);
      const prevCornerIndex = newProgressData.findIndex(
        (corner) => corner.corner_id.toString() === prevCornerId.toString(),
      );
      const nextCornerIndex = newProgressData.findIndex(
        (corner) => corner.corner_id.toString() === nextCornerId.toString(),
      );
      newProgressData[prevCornerIndex].pages = newProgressData[
        prevCornerIndex
      ].pages.map((page) => {
        if (page.page_id.toString() === currentPageId.toString()) {
          return {
            ...page,
            is_completed: isCompletedCurrentPage ? true : false,
          };
        }
        return page;
      });
      const isCornerCompleted = newProgressData[
        prevCornerIndex
      ].pages.findIndex((page) => page.is_completed === false);
      if (isCornerCompleted === -1) {
        newProgressData[prevCornerIndex].is_completed = true;
      }
      newProgressData[nextCornerIndex].pages = newProgressData[
        nextCornerIndex
      ].pages.map((page) => {
        if (page.page_id.toString() === nextPageId.toString()) {
          return {
            ...page,
            is_checked: true,
          };
        }
        return page;
      });
      return newProgressData;
    },
    [xapiActivity, isCompletedCurrentPage],
  );

  const updateProgress = useCallback(
    (progressData: LRSCornerProgress[], totalPages: ID[]) => {
      const flatMapPages = progressData.flatMap((corner) => corner.pages);
      const filteredCheckedPages = flatMapPages.filter(
        (page) => page.is_checked === true,
      );
      const filteredCompletedPages = flatMapPages.filter(
        (page) => page.is_completed === true,
      );
      return {
        progress: parseFloat(
          (filteredCheckedPages.length / totalPages.length).toFixed(3),
        ),
        completed_progress: parseFloat(
          (filteredCompletedPages.length / totalPages.length).toFixed(3),
        ),
      };
    },
    [],
  );

  const xapiProgress = useCallback(
    (
      currentCorner: CornerListData,
      nextCorner: CornerListData,
      currentPage: Page,
      nextPageId: ID,
      totalPages: ID[],
    ) => {
      if (!xapiActivity) return;
      // TODO activity state 받아야함.
      const nextPageIndex = totalPages.findIndex(
        (page) => page.toString() === nextPageId?.toString(),
      );
      const currentPageIndex = totalPages.findIndex(
        (page) => page.toString() === currentPage.id?.toString(),
      );

      const newProgressData = updateProgressDataPageCheck(
        currentCorner.id,
        nextCorner.id,
        currentPage.id,
        nextPageId,
      );
      const newXapiActivityState = updateActivityState({
        part_id: currentCorner.id,
        part_name: currentCorner.name,
        page: currentPageIndex + 1,
        progress_data: newProgressData,
        progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        ).progress,
        complete_progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        ).completed_progress,
      });
      const progressPageData: ProgressPageData = {
        currentPage: currentPageIndex + 1,
        nextPage: nextPageIndex + 1,
        progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        ).progress,
        partId: currentCorner.id,
        partName: currentCorner.name,
        pageId: currentPage.id,
        pageName: currentPage.name,
        pageType: currentPage.type,
        pageAreaCd: currentPage.pageAreaType,
        pageStyleCode: currentPage.pageStyleCode,
        pageTemplateCode: currentPage.contentsType,
      };
      xapiV1?.sendProgress(
        progressPageData,
        newXapiActivityState ?? xapiActivity,
      );
      setXapiActivity(newXapiActivityState);
    },
    [
      xapiV1,
      xapiActivity,
      updateActivityState,
      setXapiActivity,
      updateProgressDataPageCheck,
      updateProgress,
    ],
  );

  const xapiComplete = useCallback(
    (
      currentCorner: CornerListData,
      nextCorner: CornerListData,
      currentPage: Page,
      nextPageId: ID,
      totalPages: ID[],
    ) => {
      if (!xapiActivity) return;
      const currentPageIndex = totalPages.findIndex(
        (page) => page.toString() === currentPage.id?.toString(),
      );

      const newProgressData = updateProgressDataPageCheck(
        currentCorner.id,
        nextCorner.id,
        currentPage.id,
        nextPageId,
      );
      const newXapiActivityState = updateActivityState({
        part_id: currentCorner.id,
        part_name: currentCorner.name,
        page: currentPageIndex + 1,
        progress_data: newProgressData,
        progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        ).progress,
        complete_progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        ).completed_progress,
      });
      const progressPageData: ProgressPageData = {
        currentPage: currentPageIndex + 1,
        nextPage: currentPageIndex + 1,
        progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        ).progress,
        partId: currentCorner.id,
        partName: currentCorner.name,
        pageId: currentPage.id,
        pageName: currentPage.name,
        pageType: currentPage.type,
        pageAreaCd: currentPage.pageAreaType,
        pageStyleCode: currentPage.pageStyleCode,
        pageTemplateCode: currentPage.contentsType,
      };
      xapiV1?.sendComplete(
        progressPageData,
        newXapiActivityState ?? xapiActivity,
      );
      setXapiActivity(newXapiActivityState);
    },
    [
      xapiV1,
      xapiActivity,
      updateActivityState,
      setXapiActivity,
      updateProgressDataPageCheck,
      updateProgress,
    ],
  );
  const initialActivityState = useCallback(
    (
      lessonMetaData: LessonMeta,
      cornerMetaData: CornerMeta,
      corners: CornerListData[],
      totalPages: ID[],
      pageId: ID,
    ) => {
      if (xapiActivity !== undefined) return;
      // NOTE kjw 처음 통합플레이어 로드시 state값이 있으면 기존 state값을 반영하여 실행
      const currentPageIdx = totalPages.findIndex(
        (page) => page.toString() === pageId.toString(),
      );
      const currentCorner = corners.find(
        (corner) => corner.id === cornerMetaData.id,
      );

      const newActivityState: LRSActivityState = {
        account_name: "",
        course_id: lessonMetaData.courseId,
        course_name: lessonMetaData.courseName,
        lesson_id: lessonMetaData.id,
        lesson_name: lessonMetaData.name,
        lesson_type_code: lessonMetaData.lessonTpCd,
        part_id: currentCorner?.id ?? 1,
        part_name: currentCorner?.name ?? "",
        page: currentPageIdx + 1,
        pages: totalPages.length,
        correct_data: [],
        incorrect_data: [],
        progress_data: [],
        complete_progress: 0,
        progress: 0,
        time: 0,
        progress_segments: "",
      };

      newActivityState.progress_data = corners.map((corner) => {
        return {
          corner_id: corner.id,
          is_completed: false,
          pages: corner.pages.map((page) => {
            return {
              is_checked: page.toString() === pageId.toString() ? true : false,
              is_completed: false,
              page_id: page,
            };
          }),
        };
      });

      setXapiActivity(newActivityState);
    },
    [setXapiActivity, xapiActivity],
  );

  const xapiPlayed = useCallback(
    (contentType: "video" | "audio", subContentId: ID, contentUrl: string) => {
      if (currentPage) {
        xapiV1?.sendPlayed(currentPage, contentType, subContentId, contentUrl);
      }
    },
    [xapiV1, currentPage],
  );

  const xapiAnswered = useCallback(
    (subContentId: ID) => {
      if (currentPage) {
        xapiV1?.sendAnswered(subContentId, currentPage);
      }
    },
    [xapiV1, currentPage],
  );

  const xapiCreated = useCallback(
    (subContentId: ID) => {
      if (currentPage) {
        xapiV1?.sendCreated(subContentId, currentPage);
      }
    },
    [xapiV1, currentPage],
  );

  const xapiSuspended = useCallback(
    (
      currentCorner: CornerListData,
      nextCorner: CornerListData,
      currentPage: Page,
      nextPageId: ID,
      totalPages: ID[],
    ) => {
      if (!xapiActivity) return;
      const currentPageIndex = totalPages.findIndex(
        (page) => page.toString() === currentPage.id?.toString(),
      );

      const newProgressData = updateProgressDataPageCheck(
        currentCorner.id,
        nextCorner.id,
        currentPage.id,
        nextPageId,
      );
      const progressPageData: Partial<ProgressPageData> = {
        partId: currentCorner.id,
        partName: currentCorner.name,
        pageId: currentPage.id,
        pageName: currentPage.name,
        pageType: currentPage.type,
        pageAreaCd: currentPage.pageAreaType,
        pageStyleCode: currentPage.pageStyleCode,
        currentPage: currentPageIndex + 1,
      };
      const newXapiActivityState = updateActivityState({
        part_id: currentCorner.id,
        part_name: currentCorner.name,
        page: currentPageIndex + 1,
        progress_data: newProgressData,
        progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        ).progress,
        complete_progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        ).completed_progress,
      });

      xapiV1?.suspend(newXapiActivityState ?? xapiActivity, progressPageData);
    },
    [
      updateActivityState,
      updateProgress,
      updateProgressDataPageCheck,
      xapiV1,
      xapiActivity,
    ],
  );

  return {
    xapiInitialize,
    xapiProgress,
    xapiComplete,
    initialActivityState,
    xapiActivity,
    updateActivityState,
    updateProgressDataPageCheck,
    xapiPlayed,
    xapiAnswered,
    xapiSuspended,
    xapiCreated,
    updateIsCorrectDataCheck,
  };
};

export default useXapi;
