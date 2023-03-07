import {
  ConversationTemplateData,
  QuizTemplateData,
  TemplateData,
  TemplateRolePlayingData,
} from "./templates";

export type ID = string | number;

export type TemplateType =
  | TemplateData["type"]
  | ConversationTemplateData["type"]
  | QuizTemplateData["type"]
  | TemplateRolePlayingData["type"];

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
  introduction?: LessonIntroduction;
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
  data: Page[];
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
  courseId: number;
  courseName: string;
  isCompleted: boolean;
};

export type PageIntroduction = {
  title: string;
  subTitle: string;
  character: {
    url: string;
  };
  contents: string;
};

export type Page = SinglePage | MultiPage;

export type SinglePage = {
  id: ID;
  name: string;
  type: "SinglePage";
  data: TemplateData | ConversationTemplateData | QuizTemplateData;
  introduction?: PageIntroduction;
};

export type MultiPage = {
  id: ID;
  name: string;
  type: "MultiPage";
  data: TemplateData[] | ConversationTemplateData[] | QuizTemplateData[];
  introduction?: PageIntroduction;
};

/**
 * 페이지 공통 컴포넌트의 props
 */
export interface PageProps {
  setPageCompleted: () => void;
  page: Page;
}

/**
 * 템플릿 공통 컴포넌트의 props
 */
export interface TemplateProps {
  setPageCompleted: () => void;
  template: TemplateData | ConversationTemplateData | QuizTemplateData;
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
  | "allCharacter"
  | "allFinish1"
  | "allFinish2"
  | "allFinish3"
  | "allFinish4"
  | "allFinish5"
  | "allFinish6"
  | "allFinish7";
