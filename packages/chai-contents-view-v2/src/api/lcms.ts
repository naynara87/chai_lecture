import {
  API_KEY,
  getLcmsLessonDataUrl,
  getLcmsSubjectTurnUrl,
  httpLcms,
  PageListDataResponse,
  CornerListDataResponse,
  ID,
  AppType,
} from "chai-ui-v2";

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
