// 과정(course) > 레슨(lesson) > 코너(corner) > 페이지(page)
import { ID } from "chai-ui-v2";
import { v2CornerDataList, v2LessonData } from "./dummyData";

export const getLesson = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(v2LessonData);
    }, 1000);
  });
};

export const getCorner = async (cornerId: ID) => {
  return v2CornerDataList.find(
    (corner) => corner.meta.id.toString() === cornerId.toString(),
  );
};
