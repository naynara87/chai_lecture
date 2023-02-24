import { TemplateData } from "./templates";

export type ID = string | number;

export type TemplateType = TemplateData["type"];

/**
 * 레슨 데이터(코너 리스트)
 */
export type LessonData = {
  meta: LessonMeta;
  data: CornerListData[];
};

/**
 * 레슨 메타 데이터
 */
export type LessonMeta = {
  id: ID;
  name: string;
  courseId: number;
  courseName: string;
};

/**
 * 레슨 데이터 - 회차(코너) 리스트 데이터
 */
export type CornerListData = {
  id: ID;
  name: string;
  introduction: LessonIntroduction;
};

/**
 * 챕터의 첫 페이지 입장 시 보여지는 모달 데이터
 */
export type LessonIntroduction = {
  title: string;
  image: {
    url: string;
  };
};

/**
 * 코너 데이터 - 챕터 리스트
 */
export type CornerData = {
  meta: CornerMeta;
  data: Chapter[];
};

/**
 * 코너 메타 데이터
 */
export type CornerMeta = {
  id: ID;
  name: string;
  lessonId: number;
  lessonName: string;
  lessonTpCd: "10" | "20" | "30"; // 문제 페이지인지 판단?
};

/**
 * 챕터 데이터
 */
export type Chapter = {
  id: ID;
  name: string;
  introduction: ChapterIntroduction;
  pages: Page[];
};

export type ChapterIntroduction = {
  title: string;
  subTitle: string;
  character: {
    url: string;
  };
  contents: string[];
};

export type Page = SinglePage | MultiPage;

export type SinglePage = {
  id: ID;
  type: "SinglePage";
  data: TemplateData;
};

export type MultiPage = {
  id: ID;
  type: "MultiPage";
  data: TemplateData[];
};

/**
 * 페이지 공통 컴포넌트의 props
 */
export interface PageProps {
  setPageCompleted: () => void;
  page: Page;
}

export type characterType =
  | "didiAngry"
  | "didiGlasses"
  | "didiHeart"
  | "didiSad"
  | "didiSmile"
  | "didiSurprise"
  | "didiWink"
  | "didiWinking"
  | "kkungiHeart"
  | "kkungiLaugh"
  | "kkungiPositive"
  | "kkungiSmile"
  | "kkungiWink"
  | "kkungiHeader"
  | "winiProud"
  | "winiSad"
  | "winiShock"
  | "winiSmile"
  | "winiSurprise"
  | "winiWink"
  | "allFinish";
