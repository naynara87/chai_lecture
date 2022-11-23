import { API_KEY, getLcmsSubjectTurnUrl, LCMS_SUBJECT } from "../constants/api";
import httpLcms from "../lib/axios/httpLcms";
import { GetSubjectParams, OrderByCode } from "../types/api/auth";
import { PageListData } from "../types/api/lcms";

export const getSubject = async (orderByCode: OrderByCode = "01") => {
  const res = await httpLcms.get(LCMS_SUBJECT, {
    params: {
      apiKey: API_KEY,
      orderByCode,
    } as GetSubjectParams,
  });
  return res.data;
};

export const getPageListData = async (cornerId: string) => {
  const res = await httpLcms.get<PageListData>(getLcmsSubjectTurnUrl(cornerId), {
    params: {
      apiKey: API_KEY,
      turn_id: cornerId,
    },
  });
  return res?.data?.body?.data;
};
