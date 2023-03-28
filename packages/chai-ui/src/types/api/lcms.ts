import { ID, Introduction, Page } from "../appData";

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
  page_id: ID;
  contents_data: Omit<Page, "id">;
}

/**
 * 코너리스트 API 응답 데이터
 * 아직 API 나오지 않음
 */
export interface CornerListData {
  body: CornerListDataBody;
  code: number;
  message: string;
}

export interface CornerListDataBody {
  meta: CornerListDataMeta;
  data: CornerData[];
}

export interface CornerListDataMeta {
  subjectId: number;
  subjectName: string;
  // courseId: number;
  // courseName: string;
  lessonId: number;
  lessonName: string;
  lessonTpCd: "10" | "20" | "30";
}

export interface CornerData {
  turnId: number;
  turnName: string;
  introduction: Introduction;
  pages: number[];
}
