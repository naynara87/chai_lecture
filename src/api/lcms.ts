import {
  API_KEY,
  getLcmsLessonDataUrl,
  getLcmsSubjectTurnUrl,
  LCMS_SUBJECT,
} from "../constants/api";
import httpLcms from "../lib/axios/httpLcms";
import { GetSubjectParams, OrderByCode } from "../types/api/auth";
import { CornerListData, PageListData } from "../types/api/lcms";
import { ID } from "../types/appData";

export const getSubject = async (orderByCode: OrderByCode = "01") => {
  const res = await httpLcms.get(LCMS_SUBJECT, {
    params: {
      apiKey: API_KEY,
      orderByCode,
    } as GetSubjectParams,
  });
  return res.data;
};

export const getPageListData = async (cornerId: ID) => {
  const res = await httpLcms.get<PageListData>(getLcmsSubjectTurnUrl(cornerId), {
    params: {
      apiKey: API_KEY,
      turn_id: cornerId,
    },
  });
  return res.data;
};

export const getCornerListData = async (lessonId: ID) => {
  const res = await httpLcms.get<CornerListData>(getLcmsLessonDataUrl(lessonId), {
    params: {
      apiKey: API_KEY,
      lesson_id: lessonId,
    },
  });
  return res.data;
};
