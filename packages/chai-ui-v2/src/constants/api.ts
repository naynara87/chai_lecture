import { ID } from "../core";

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

export const getLcmsSubjectTurnUrl = (turnId: ID) =>
  `/lcms/subject/turn/${turnId}`;

export const getLcmsWordListUrl = (subjectId: ID) =>
  `/lcms/subject/word-list/${subjectId}`;

export const getLcmsSubjectUrl = (subjectId: ID) =>
  `/lcms/subject/${subjectId}`;

export const getLcmsLessonDataUrl = (lessonId: ID) =>
  `/lcms/subject/lesson-detail-list/${lessonId}`;

export const getLcmsIncorrectPageDataUrl = (pageId: string) =>
  `/lcms/subject/contents-data-detail/${pageId}`;
