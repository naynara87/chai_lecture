// react-query key constants
export const QUERY_KEY = Object.freeze({
  // temp api
  APP_DATA: "appData", // getAppData
  CORNER: "corner", // getCorner
  PAGES: "pages", // getPages
  PAGE: "page", // getPage

  // api - lcms
  PAGE_LIST: "pageListByCornerId",
  CORNER_LIST: "cornerListByLessonId",

  // api - lms
  LEARNING_LOG: "learningLogByLessonId",
});
