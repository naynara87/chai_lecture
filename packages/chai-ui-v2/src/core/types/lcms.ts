import { CornerListData, CornerMeta, ID, LessonMeta } from "./appData";

/**
 * /lcms/subject/turn/${turnId}
 * LCMS pageList data
 */
export interface PageListDataResponse {
  body: PageListDataBody;
  code: string;
  message: number;
}

export interface PageListDataBody {
  meta: CornerMeta;
  data: ContentData[];
}

// export interface PageListDataMeta {
//   courseId: number;
//   lessonId: number;
//   turnUuid: number;
// }

export interface ContentData {
  page_id: ID;
  contents_type: string; // 10 : 학습, 20 : 퀴즈, 30 : 테스트
  contents_uuid: string; // contents_data에 대한 uuid
  contents_data: string; // JSON.parse 필요
  /**
   * a1:중국어 개요,
   * a2:발음,
   * a3:발음 및 문자,
   * a4:어휘,
   * a5:문법,
   * a6:의사소통 표현,
   * a7:문화,
   */
  pageArea_type: "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "a7";
}

/**
 * 코너리스트 API 응답 데이터
 * 아직 API 나오지 않음
 */
export interface CornerListDataResponse {
  body: CornerListDataBody;
  code: number;
  message: string;
}

export interface CornerListDataBody {
  meta: LessonMeta;
  data: CornerListData[];
}

// export interface CornerListDataMeta {
//   // subjectId: number; // TODO: 백엔드에 요청 후 데이터를 받아와야 한다
//   // subjectName: string; // TODO: 백엔드에 요청 후 데이터를 받아와야 한다
//   courseId: number; // TODO: 백엔드에 요청 후 데이터를 받아와야 한다
//   courseName: string; // TODO: 백엔드에 요청 후 데이터를 받아와야 한다
//   id: number;
//   name: string;
//   lessonTpCd: "10" | "20" | "30";
//   colorTypeCd: "10" | "20" | "30" | "40" | "50" | "60" | "70";
// }

// export interface TurnData {
//   id: number;
//   name: string;
//   pages: number[];
// }
