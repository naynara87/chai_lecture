import { ID } from "../appData";

/**
 * /lcms/subject/turn/${turnId}
 * LCMS pageList data
 */
export interface PageListData {
  body: PageListDataBody;
  code: string;
  message: number;
}

export interface PageListDataBody {
  meta: PageListDataMeta;
  data: PageData[];
}

export interface PageListDataMeta {
  courseId: number;
  lessonId: number;
  cornerId: number;
}

export interface PageData {
  page_id: number;
  // TODO: LCMS mock API 또는 데이터가 정상적으로 나올 때 타입 변경하기 -> Page
  contents_data: {
    id: ID;
  }; // Page
}
