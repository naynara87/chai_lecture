import { ID } from "../types";

// page
export const getPageUrl = (
  courseId: ID,
  lessonId: ID,
  cornerId: ID,
  pageId: ID
) => {
  return `/course/${courseId}/lesson/${lessonId}/corner/${cornerId}/page/${pageId}`;
};
