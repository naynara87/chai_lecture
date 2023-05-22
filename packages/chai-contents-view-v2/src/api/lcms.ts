import {
  API_KEY,
  getLcmsLessonDataUrl,
  getLcmsSubjectTurnUrl,
  httpLcms,
  PageListDataResponse,
  CornerListDataResponse,
  ID,
  AppType,
  getLcmsIncorrectPageDataUrl,
} from "chai-ui-v2";
import { ContentsDataDetailListResponse } from "chai-ui-v2/dist/core/types/lcms";

export const getPageListData = async (
  cornerId: ID,
  lessonId: ID,
  lessonType?: AppType,
) => {
  const res = await httpLcms.get<PageListDataResponse>(
    getLcmsSubjectTurnUrl(cornerId),
    {
      params: {
        apiKey: API_KEY,
        turnUuid: cornerId,
        type: lessonType || "lesson",
        lesson_id: lessonId,
      },
    },
  );
  return res.data;
};

export const getCornerListData = async (lessonId: ID, lessonType?: AppType) => {
  const res = await httpLcms.get<CornerListDataResponse>(
    getLcmsLessonDataUrl(lessonId),
    {
      params: {
        apiKey: API_KEY,
        lesson_id: lessonId,
        type: lessonType || "lesson",
      },
    },
  );
  return res.data;
};

export const getIncorrectPageListData = async (pageId: string) => {
  const res = await httpLcms.get<ContentsDataDetailListResponse>(
    getLcmsIncorrectPageDataUrl(pageId),
    {
      params: {
        apiKey: API_KEY,
        page_id: pageId,
      },
    },
  );
  return res.data;
};
