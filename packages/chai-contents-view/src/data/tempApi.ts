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

export const getCorner = async (cornerId: ID) => {
  return dummyData.corners.find((corner) => corner.id.toString() === cornerId.toString());
};

export const getPages = async (cornerId: ID) => {
  const corner = await getCorner(cornerId);
  return corner?.pages ?? [];
};

export const getPage = async (cornerId: ID, pageId: ID) => {
  const pages = await getPages(cornerId);
  return pages.find((page) => page.id!.toString() === pageId.toString());
};
