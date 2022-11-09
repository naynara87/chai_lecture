import { atom } from "recoil";

export const courseAndLessonTitlesState = atom({
  key: "courseAndLessonTitlesState",
  default: {
    courseTitle: "",
    lessonTitle: "",
  },
});
