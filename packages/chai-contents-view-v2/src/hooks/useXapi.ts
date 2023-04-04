import {
  CornerListData,
  CornerMeta,
  ID,
  LessonMeta,
  LRSActivityState,
} from "chai-ui-v2";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { xapiElement } from "../constants/xapi";
import { xapiActivityState } from "../state/xapiActivityState";
import { xapiV1State } from "../state/xapiV1State";

const useXapi = () => {
  const [xapiV1] = useRecoilState(xapiV1State);
  const [xapiActivity, setXapiActivity] = useRecoilState(xapiActivityState);

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

  const xapiProgress = useCallback(
    (pageId: ID, totalPages: ID[]) => {
      if (!xapiActivity) return;
      // TODO activity state 받아야함.
      const pageIndex = totalPages.findIndex(
        (page) => page.toString() === pageId?.toString(),
      );
      const newXapiActivityState = updateActivityState({ page: pageIndex + 1 });
      xapiV1?.sendProgress(pageIndex + 1, newXapiActivityState ?? xapiActivity);
      setXapiActivity(newXapiActivityState);
    },
    [xapiV1, xapiActivity, updateActivityState, setXapiActivity],
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
    ) => {
      const newActivityState: LRSActivityState = {
        account_name: "",
        course_id: lessonMetaData.courseId,
        course_name: lessonMetaData.courseName,
        lesson_id: lessonMetaData.id,
        lesson_name: lessonMetaData.name,
        lesson_type_code: lessonMetaData.lessonTpCd,
        part_id: cornerMetaData.id,
        part_name: "",
        page: 1,
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
              is_checked: false,
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
  };
};

export default useXapi;
