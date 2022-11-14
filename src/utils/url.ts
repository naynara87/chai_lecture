import { ID } from "../types/appData";

// page
export const getPageUrl = (cornerId: ID, pageId: ID) => {
  return `/corner/${cornerId}/page/${pageId}`;
};
