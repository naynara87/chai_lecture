import { TP01A, TP03A, TP03B, TP15A, TP03C } from "./pageTemplate";

// 과정(course) > 레슨(lesson) > 회차(corner) > 페이지(page)
export type ID = number | string;

export type AppData = {
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
  title: string;
  description: string;
  corners: Corner[];
};

type CornerType =
  | "review"
  | "study1"
  | "study2"
  | "study3"
  | "conversation"
  | "culture"
  | "practice";

export type Corner = {
  id: ID;
  type: CornerType;
  title: string;
  isCompleted: boolean;
  cornerIcon: string;
  introduction: {
    title: string;
    description: string;
  };
  pages: Page[];
};

export type Page = TP01A | TP03A | TP03B | TP15A | TP03C;

export type TemplateType = Page["template"]["type"];
