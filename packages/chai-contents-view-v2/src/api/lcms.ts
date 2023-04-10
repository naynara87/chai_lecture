import {
  API_KEY,
  getLcmsLessonDataUrl,
  getLcmsSubjectTurnUrl,
  httpLcms,
  PageListDataResponse,
  CornerListDataResponse,
  ID,
} from "chai-ui-v2";

export const getPageListData = async (cornerId: ID) => {
  const res = await httpLcms.get<PageListDataResponse>(
    getLcmsSubjectTurnUrl(cornerId),
    {
      params: {
        apiKey: API_KEY,
        turnUuid: cornerId,
        type: "lesson",
      },
    },
  );
  return res.data;
};

export const getCornerListData = async (lessonId: ID) => {
  const res = await httpLcms.get<CornerListDataResponse>(
    getLcmsLessonDataUrl(lessonId),
    {
      params: {
        apiKey: API_KEY,
        lesson_id: lessonId,
        type: "lesson",
      },
    },
  );
  return res.data;
};
