import {
  CornerListData,
  CornerMeta,
  ID,
  LessonMeta,
  LRSActivityState,
  LRSCornerProgress,
  usePageCompleted,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { xapiElement } from "../constants/xapi";
import { xapiActivityState } from "../state/xapiActivityState";
import { xapiV1State } from "../state/xapiV1State";

const useXapi = () => {
  const [xapiV1] = useRecoilState(xapiV1State);
  const [xapiActivity, setXapiActivity] = useRecoilState(xapiActivityState);

  const { completedPageComponents } = usePageCompleted();

  const xapiInitialize = useCallback(() => {
    if (!xapiV1) return;
    xapiElement.dispatchEvent(xapiV1.playerLoadedEvent);
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
    (cornerId: ID, currentPageId: ID, nextPageId: ID) => {
      if (!xapiActivity) return;
      console.log(
        "cornerId",
        cornerId,
        "currentPageId",
        currentPageId,
        "nextPageId",
        nextPageId,
      );

      const newProgressData = cloneDeep(xapiActivity.progress_data);
      const cornerIndex = newProgressData.findIndex(
        (corner) => corner.corner_id.toString() === cornerId.toString(),
      );
      newProgressData[cornerIndex].pages = newProgressData[
        cornerIndex
      ].pages.map((page) => {
        if (page.page_id.toString() === currentPageId.toString()) {
          return {
            ...page,
            is_completed: isCompletedCurrentPage ? true : false,
          };
        }
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
      corner: CornerListData,
      currentPageId: ID,
      nextPageId: ID,
      totalPages: ID[],
    ) => {
      if (!xapiActivity) return;
      // TODO activity state 받아야함.
      const pageIndex = totalPages.findIndex(
        (page) => page.toString() === nextPageId?.toString(),
      );
      const newProgressData = updateProgressDataPageCheck(
        corner.id,
        currentPageId,
        nextPageId,
      );
      const newXapiActivityState = updateActivityState({
        part_id: corner.id,
        part_name: corner.name,
        page: pageIndex + 1,
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
      xapiV1?.sendProgress(pageIndex + 1, newXapiActivityState ?? xapiActivity);
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
    (pageId: ID, totalPages: ID[]) => {
      const pageIndex = totalPages.findIndex(
        (page) => page.toString() === pageId?.toString(),
      );
      xapiV1?.sendComplete(pageIndex + 1);
    },
    [xapiV1],
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

  return {
    xapiInitialize,
    xapiProgress,
    xapiComplete,
    initialActivityState,
    xapiActivity,
    updateActivityState,
    updateProgressDataPageCheck,
  };
};

export default useXapi;
