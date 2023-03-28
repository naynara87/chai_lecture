import { LessonMeta } from "../types";

const useLessonNameMapper = () => {
  const getLessonName = (colorCode: LessonMeta["colorTypeCd"]) => {
    const lessonNameMapper = {
      10: "빨강",
      20: "주황",
      30: "노랑",
      40: "초록",
      50: "파랑",
      60: "남색",
      70: "보라",
    };

    return lessonNameMapper[colorCode];
  };

  return {
    getLessonName,
  };
};

export default useLessonNameMapper;
