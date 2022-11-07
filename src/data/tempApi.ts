// 과정(course) > 레슨(lesson) > 코너(corner) > 페이지(page)
import { AppData, ID } from "../types/appData";
import { dummyData } from "./dummyData";

export const getAppData = async (): Promise<AppData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 1000);
  });
};

// export const getLessonData = (lessonId: ID) => {

export const getCorner = async (cornerId: ID) => {
  return dummyData.corners.find((corner) => corner.id === cornerId);
};

export const getPages = async (cornerId: ID) => {
  const corner = await getCorner(cornerId);
  return corner?.pages ?? [];
};
