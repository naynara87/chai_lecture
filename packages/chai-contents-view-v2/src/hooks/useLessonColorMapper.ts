import { LessonMeta } from "chai-ui-v2";

const useLessonColorMapper = () => {
  const getLessonColors = (colorCode?: LessonMeta["colorTypeCd"]) => {
    const lessonColorMapper = {
      // key설명 - 레벨별 컬러는 헤더에서만 사용
      10: {
        main: "#EE4141",
        sub: "#F89E9E",
      },
      20: {
        main: "#FF6700",
        sub: "#FFA861",
      },
      30: {
        main: "#FFB900",
        sub: "#FFD86C",
      },
      40: {
        main: "#1FB65D",
        sub: "#81D19D",
      },
      50: {
        main: "#3D89FA",
        sub: "#8CB5EF",
      },
      60: {
        main: "#3C53A7",
        sub: "#778AD0",
      },
      70: {
        main: "#9A45EF",
        sub: "#B991FA",
      },
    };

    return lessonColorMapper[colorCode ?? 10];
  };

  return { getLessonColors };
};

export default useLessonColorMapper;
