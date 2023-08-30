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
  LRSAnswerData,
  LRSCornerProgress,
  Page,
  ProgressPageData,
  QuizData,
} from "../types";
import { LocalStorage, timeStamp } from "../util";
import usePageCompleted from "./usePageCompleted";

const useXapi = () => {
  const [xapiV1] = useRecoilState(xapiV1State);
  const [xapiActivity, setXapiActivity] = useRecoilState(xapiActivityState);
  const [currentPage] = useRecoilState(currentPageState);

  const { completedPageComponents } = usePageCompleted();

  /**
   * NOTE kjw 플레이어 실행시 initialize를 발생시켜주는 함수 xapi wrapper에서 activityState를 반환해 플레이어에서 Recoil로 관리할 수 있도록 해준다.
   */
  const xapiInitialize = useCallback(
    (courseId: ID, lessonId: ID, totalPages: ID[]) => {
      if (!xapiV1) return;
      const loadActivityState = xapiV1.sendInitialized(
        courseId,
        lessonId,
        totalPages,
      );
      setXapiActivity(loadActivityState);
      // NOTE kjw layout.tsx에서 getState시 값이 있는지 확인하기위해 return
      return loadActivityState;
    },
    [xapiV1, setXapiActivity],
  );

  /**
   * NOTE kjw activityState를 수정하는 함수.
   */
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

  /**
   * NOTE kjw activityState의 progress_data에서 현재 코너의 is_completed를 체크.
   */
  const isCompletedCurrentPage = useMemo(() => {
    return (
      completedPageComponents.find(
        (completedComponent) => completedComponent.isCompleted === false,
      ) === undefined
    );
  }, [completedPageComponents]);

  /**
   * NOTE kjw activityState의 incorrect_data, correct_data의 값을 넣어주는 함수.
   * 문제템플릿에서 채점하기 버튼을 클릭할때 실행이된다.
   */
  const updateIsCorrectDataCheck = useCallback(
    (totalPages: ID[]) => {
      if (!xapiActivity) return;
      if (
        xapiActivity.correct_data.length + xapiActivity.incorrect_data.length >=
        totalPages.length
      ) {
        return;
      }

      const quizDatas = LocalStorage.getItem<QuizData[]>("pageData");
      const correctDatas: LRSAnswerData[] = [];
      const incorrectDatas: LRSAnswerData[] = [];

      if (!quizDatas) return;
      quizDatas.forEach((quizData) => {
        if (quizData.isCorrect) {
          correctDatas.push({
            page_id: quizData.pageId,
            page_area_code: quizData.pageAreaCode,
            timestamp: quizData.timeStamp || timeStamp(),
          });
        } else {
          incorrectDatas.push({
            page_id: quizData.pageId,
            page_area_code: quizData.pageAreaCode,
            timestamp: quizData.timeStamp || timeStamp(),
          });
        }
      });

      const newActivityState = updateActivityState({
        correct_data: correctDatas,
        incorrect_data: incorrectDatas,
      });

      return newActivityState;
    },
    [xapiActivity, updateActivityState],
  );

  /**
   * NOTE kjw activityState의 progress_data에서 현재 페이지의 is_checked, is_completed를 체크해주는 함수.
   */
  const updateProgressDataPageCheck = useCallback(
    (
      prevCornerId: ID,
      nextCornerId: ID,
      currentPageId: ID,
      nextPageId: ID,
      totalPages: ID[],
    ) => {
      if (!xapiActivity) return;
      const newProgressData = cloneDeep(xapiActivity?.progress_data);
      const flatMapPages = newProgressData?.flatMap((corner) => corner.pages);
      if (flatMapPages?.length !== totalPages.length) return;
      const prevCornerIndex = newProgressData?.findIndex(
        (corner) => corner.corner_id.toString() === prevCornerId.toString(),
      );
      const nextCornerIndex = newProgressData?.findIndex(
        (corner) => corner.corner_id.toString() === nextCornerId.toString(),
      );
      if (prevCornerIndex === undefined || nextCornerIndex === undefined)
        return;
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

  /**
   * NOTE kjw activityState의 progress와 complete_progress를 체크해주는 함수.
   */
  const updateProgress = useCallback(
    (progressData: LRSCornerProgress[], totalPages: ID[]) => {
      const flatMapPages = progressData?.flatMap((corner) => corner.pages);
      if (flatMapPages?.length !== totalPages.length) return;
      const filteredCheckedPages = flatMapPages?.filter(
        (page) => page.is_checked === true,
      );
      const filteredCompletedPages = flatMapPages?.filter(
        (page) => page.is_completed === true,
      );
      return {
        progress: parseFloat(
          (filteredCheckedPages?.length / totalPages.length).toFixed(3),
        ),
        completed_progress: parseFloat(
          (filteredCompletedPages?.length / totalPages.length).toFixed(3),
        ),
      };
    },
    [],
  );

  /**
   * NOTE kjw 페이지 데이터를 최신화하여 xapi wrapper의 sendProgress 함수를 실행시키는 함수.
   * 페이지의 데이터값을 가져와 result 값을 최신화한다.
   */
  const xapiProgress = useCallback(
    (
      currentCorner: CornerListData,
      nextCorner: CornerListData,
      currentPage: Page,
      nextPageId: ID,
      totalPages: ID[],
    ) => {
      if (!xapiActivity) return;

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
        totalPages,
      );
      const newXapiActivityState = updateActivityState({
        part_id: currentCorner.id,
        part_name: currentCorner.name,
        page: currentPageIndex + 1,
        progress_data: newProgressData,
        progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        )?.progress,
        complete_progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        )?.completed_progress,
      });
      const progressPageData: ProgressPageData = {
        currentPage: currentPageIndex + 1,
        nextPage: nextPageIndex + 1,
        progress:
          updateProgress(
            newProgressData ?? xapiActivity.progress_data,
            totalPages,
          )?.progress || 0,
        partId: currentCorner.id,
        partName: currentCorner.name,
        pageId: currentPage.id,
        pageName: currentPage.name,
        pageType: currentPage.type,
        pageAreaCd: currentPage.pageAreaType,
        pageStyleCode: currentPage.pageStyleCode ?? null,
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

  /**
   * NOTE kjw 문제템플릿일때 sendComplete에서 score부분을 문제 풀이 점수로 넣어주는 함수
   */
  const getScore = useCallback(() => {
    const quizPageData = LocalStorage.getItem<QuizData[]>("pageData");

    if (quizPageData) {
      const correctQuizPages = quizPageData?.filter((quizPage) => {
        return quizPage.isCorrect;
      });
      return Math.round((100 / quizPageData?.length) * correctQuizPages?.length);
    } else {
      return undefined;
    }
  }, []);

  /**
   * NOTE kjw xapi wrapper의 sendComplete 함수를 실행시키는 함수.
   */
  const xapiComplete = useCallback(
    (
      currentCorner: CornerListData,
      nextCorner: CornerListData,
      currentPage: Page,
      nextPageId: ID,
      totalPages: ID[],
      lessonTypeCode: LessonMeta["lessonTpCd"],
      newXapiActivityStateToUpdateProgressData?: LRSActivityState,
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
        totalPages,
      );
      const newXapiActivityState = updateActivityState({
        ...newXapiActivityStateToUpdateProgressData,
        part_id: currentCorner.id,
        part_name: currentCorner.name,
        page: currentPageIndex + 1,
        progress_data: newProgressData,
        progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        )?.progress,
        complete_progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        )?.completed_progress,
      });
      const progressPageData: ProgressPageData = {
        currentPage: currentPageIndex + 1,
        nextPage: currentPageIndex + 1,
        progress:
          updateProgress(
            newProgressData ?? xapiActivity.progress_data,
            totalPages,
          )?.progress || 0,
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
        lessonTypeCode,
        getScore(),
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
      getScore,
    ],
  );
  /**
   * NOTE kjw 최초 실행시 activityState값을 초기화해주는함수.
   * initialize에서 getState를 하여 기존의 activityState값이 있어 반환을 받았다면 해당함수는 실행되지 않는다.
   */
  const initialActivityState = useCallback(
    (
      lessonMetaData: LessonMeta,
      cornerMetaData: CornerMeta,
      corners: CornerListData[],
      totalPages: ID[],
      pageId: ID,
    ) => {
      if (xapiActivity) return;
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
      // newActivityState.progress_data = [];
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

  /**
   * NOTE kjw video, audio 실행시마다 발생하는 함수. 
   * sendPlayed를 실행시켜준다.
   */
  const xapiPlayed = useCallback(
    (contentType: "video" | "audio", subContentId: ID, contentUrl: string) => {
      if (currentPage) {
        xapiV1?.sendPlayed(currentPage, contentType, subContentId, contentUrl);
      }
    },
    [xapiV1, currentPage],
  );

  /**
   * NOTE kjw 콘텐츠템플릿에서 문제콘텐츠를 풀 때 마다 발생하는 함수. 
   * sendAnswered를 실행시켜준다.
   */
  const xapiAnswered = useCallback(
    (subContentId: ID) => {
      if (currentPage) {
        xapiV1?.sendAnswered(subContentId, currentPage);
      }
    },
    [xapiV1, currentPage],
  );

  /**
   * NOTE kjw 콘텐츠템플릿에서 녹음을 완료할 때 마다 발생하는 함수. 
   * sendCreated를 실행시켜준다.
   */
  const xapiCreated = useCallback(
    (subContentId: ID) => {
      if (currentPage) {
        xapiV1?.sendCreated(subContentId, currentPage);
      }
    },
    [xapiV1, currentPage],
  );

  /**
   * NOTE kjw 플레이어에서 학습을 완료하지 않고 중간에 나갔을 때 발생하는 함수.
   * sendSuspend를 실행시켜준다.
   * 현재는 문제템플릿에서 도중에 나가는 프로세스가 없기 때문에 콘텐츠템플릿에서만 발생한다.
   */
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
        totalPages,
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
        )?.progress,
        complete_progress: updateProgress(
          newProgressData ?? xapiActivity.progress_data,
          totalPages,
        )?.completed_progress,
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
