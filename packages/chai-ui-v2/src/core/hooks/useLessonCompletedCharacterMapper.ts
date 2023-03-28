import { LessonMeta } from "../types";

const useLessonCompletedCharacterMapper = () => {
  const getLessonCompletedCharacterCode = (
    colorCode?: LessonMeta["colorTypeCd"],
  ) => {
    const lessonColorMapper = {
      // TODO: key설명 - 레벨별 컬러는 헤더에서만 사용
      10: "allFinish1",
      20: "allFinish2",
      30: "allFinish3",
      40: "allFinish4",
      50: "allFinish5",
      60: "allFinish6",
      70: "allFinish7",
    };

    return lessonColorMapper[colorCode ?? 10];
  };

  return { getLessonCompletedCharacterCode };
};

export default useLessonCompletedCharacterMapper;
