import {
  API_KEY,
  getLcmsLessonDataUrl,
  getLcmsSubjectTurnUrl,
  httpLcms,
  PageListDataResponse,
  CornerListDataResponse,
  ID,
  getCookie,
  InitialAppData,
} from "chai-ui-v2";

export const getPageListData = async (cornerId: ID) => {
  const learningLogCookieData = getCookie<InitialAppData>("bubble-player");
  const res = await httpLcms.get<PageListDataResponse>(
    getLcmsSubjectTurnUrl(cornerId),
    {
      params: {
        apiKey: API_KEY,
        turnUuid: cornerId,
        type: learningLogCookieData?.type || "lesson",
      },
    },
  );
  return res.data;
};

export const getCornerListData = async (lessonId: ID) => {
  const learningLogCookieData = getCookie<InitialAppData>("bubble-player");
  const res = await httpLcms.get<CornerListDataResponse>(
    getLcmsLessonDataUrl(lessonId),
    {
      params: {
        apiKey: API_KEY,
        lesson_id: lessonId,
        type: learningLogCookieData?.type || "lesson",
      },
    },
  );
  return res.data;
};
