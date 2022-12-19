import { ID } from "../types/appData";

export const API_KEY = "15968aad-ff43-484f-b5b5-b741fda1f521";

// server url
export const TOKEN_URL = "/lcms/get-token";

export const LCMS_SUBJECT = "/lcms/subject";

export const LMS_SAVE_DATA = `${process.env.REACT_APP_LMS_SAVE_DATA_URL}`;

/**
 * NOTE 서버에서 사용하는 명칭과 클라이언트에서 사용하는 명칭이 다름
 * - 과목 : subject = course -> 빨강
 * - 레슨 : lesson -> lesson1
 * - 회차 : turn = corner -> 각 코너 - 복습, 회차1, ...
 */
export const getLcmsSubjectLessonAllUrl = (subjectId: ID) =>
  `/lcms/subject/lesson-all/${subjectId}`;

export const getLcmsSubjectLessonListUrl = (subjectId: ID) =>
  `/lcms/subject/lesson-list/${subjectId}`;

export const getLcmsSubjectTurnUrl = (turnId: ID) => `/lcms/subject/turn/${turnId}`;

export const getLcmsWordListUrl = (subjectId: ID) => `/lcms/subject/word-list/${subjectId}`;

export const getLcmsSubjectUrl = (subjectId: ID) => `/lcms/subject/${subjectId}`;

export const getLcmsLessonDataUrl = (lessonId: ID) =>
  `/lcms/subject/lesson-detail-list/${lessonId}`;
