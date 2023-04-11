import { cloneDeep } from "lodash";
import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { xapiElement } from "../../constants";
import { xapiActivityState, xapiV1State } from "../states";
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

  const { completedPageComponents } = usePageCompleted();

  const xapiInitialize = useCallback(() => {
    if (!xapiV1) return;
    xapiElement.dispatchEvent(xapiV1.playerInitEvent);
  }, [xapiV1]);

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
      const isCornerCompleted = newProgressData[prevCornerIndex].pages.find(
        (page) => page.is_completed !== false,
      )
        ? true
        : false;
      newProgressData[prevCornerIndex].is_completed = isCornerCompleted;
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
  // NOTE 처음 통합플레이어 로드시 state값이 없을때 실행
  const initialActivityState = useCallback(
    (
      lessonMetaData: LessonMeta,
      cornerMetaData: CornerMeta,
      corners: CornerListData[],
      totalPages: ID[],
      pageId: ID,
    ) => {
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
    [setXapiActivity],
  );

  const xapiPlayed = useCallback(
    (contentType: "video" | "audio") => {
      xapiV1?.sendPlayed(contentType);
    },
    [xapiV1],
  );

  const xapiAnswered = useCallback(() => {
    xapiV1?.sendAnswered();
  }, [xapiV1]);

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

      xapiV1?.suspend(newXapiActivityState ?? xapiActivity);
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
  };
};

export default useXapi;
