import { ChooseTextByAudio } from "./contentComponents";

// 과정 > 레슨 > 코너 > 페이지
type ID = number | string;

export type AppData = {
  meta: {
    isCompleted: boolean;
    // 과정
    course: {
      id: ID;
      title: string;
    };
    lesson: {
      id: ID;
      title: string;
    };
    lastCornerId: ID;
    lastPageId: ID;
  };
  CornerList: Corner[];
};

type CornerType =
  | "review"
  | "study1"
  | "study2"
  | "study3"
  | "conversation"
  | "culture"
  | "practice";

type Corner = {
  id: ID;
  type: CornerType;
  title: string;
  isCompleted: boolean;
  introduction: {
    title: string;
    description: string;
  };
  pages: Page[];
};

type Page = TP01A;

type TP01A = {
  title: string;
  description: string;
  template: TP01ATemplate;
};

type TP01ATemplate = {
  type: string;
  contents: TP01AContent[];
};

type TP01AContent = ChooseTextByAudio;
