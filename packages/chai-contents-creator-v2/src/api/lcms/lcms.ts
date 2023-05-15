import {
  API_KEY,
  getLcmsSubjectTurnUrl,
  PageListDataResponse,
  ID,
  Page,
} from "chai-ui-v2";
import { LCMS_API_PATH } from "../../constants/apiPath";
import { SaveContentRequest } from "../../types/api/lcms";
import httpLcms from "./httpLcms";

export const getPageListData = async (cornerId: ID, lessonId: ID) => {
  const res = await httpLcms.get<PageListDataResponse>(
    getLcmsSubjectTurnUrl(cornerId),
    {
      params: {
        apiKey: API_KEY,
        turnUuid: cornerId,
        type: "lesson", // 콘텐트 : "lesson"
        lesson_id: lessonId,
      },
    },
  );
  return res;
};

const convertSaveDataPayload = (
  page: Page,
  cornerId: ID,
  contentsUuid: ID,
): SaveContentRequest => {
  return {
    content_data: JSON.stringify(page),
    content_id: contentsUuid,
    page_id: page.id,
    turn_id: cornerId,
  } as SaveContentRequest;
};

export type savePageDataParams = {
  page: Page;
  cornerId: ID;
  contentsUuid: ID;
};

export const savePageData = async ({
  page,
  cornerId,
  contentsUuid,
}: savePageDataParams) => {
  const res = await httpLcms.post<PageListDataResponse>(
    LCMS_API_PATH.SAVE_PAGE,
    convertSaveDataPayload(page, cornerId, contentsUuid),
    {
      params: {
        apiKey: API_KEY,
      },
    },
  );
  return res;
};
