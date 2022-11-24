export interface PostAccessTokenData {
  head: PostAccessTokenDataHead;
  body: PostAccessTokenDataBody;
}

interface PostAccessTokenDataHead {
  code: number; // 상태코드
  message: string; // "OK"
  detail: string; // "정상"
}

interface PostAccessTokenDataBody {
  userId: string; // "manager"
  accessToken: string; // JWT
}

/**
 * GET /lcms/subject
 * parameters
 */
export interface GetSubjectParams {
  apiKey: string;
  orderByCode: OrderByCode; // 정렬코드
  startPageCount?: number;
  count?: number; // 페이지당 개수
  page?: number; // 페이지 번호
  keyword?: string; // 검색어
  srchStatusCd?: string; // 과목상태
}

/**
 * 정렬코드 : 01 - 과목명 오름차순, 02 - 과목명 내림차순, 03 - 등록일 오름차순, 04 - 등록일 내림차순
 */
export type OrderByCode = "01" | "02" | "03" | "04";
