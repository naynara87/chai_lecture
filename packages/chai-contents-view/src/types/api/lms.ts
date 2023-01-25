import { ID } from "../appData";

/**
 * 학습 이력 조회
 */
export type LearningLogData = {
  uno: ID;
  progressRate: ID;
  applId: ID;
  subjectId: ID;
  courseId: ID;
  lessonId: ID;
  turnId: ID;
  pageId: ID;
};
