import {
  TP01A,
  TP03A,
  TP03B,
  TPTab,
  TP03C,
  TP03D,
  TP02C,
  TP04A,
  TP02M,
  TP05A,
  TP02F,
  TP11F,
  TP11A,
  TP02N,
  TP07A,
  TP02G,
  TPIframe,
  TP01B,
  TP10A,
  TP11G,
  TP24A,
  TP09A,
  TP19A,
  TP02,
  TP03,
  TP04,
  TP05,
  TP07,
  TP15,
  TP16,
  TP13,
  TP24B,
  TP08A,
  TP02B,
  TP06A,
  TP02A,
  TP08B,
  TP11B,
  TP02I,
  TP10C,
  TP23,
  TP05G,
} from "./pageTemplate";
import {
  AudioContent,
  AudioRecordContent,
  ChooseMediaTextContent,
  ChooseTextByAudioContent,
  ChooseTextContent,
  DialogContent,
  DragAndDropContent,
  HtmlContent,
  IconTextContent,
  ImagesContent,
  ListenImagesContent,
  ListenWordsContent,
  NumberTableContent,
  SortWordsContent,
  StudyWordsContent,
  TextBoxesContent,
  VideoContent,
  WordQuizContent,
} from "./templateContents";

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

export type AppMetaData = {
  courseId: ID;
  courseName: string;
  lessonId: ID;
  lessonName: string;
  lessonTpCd: "10" | "20" | "30";
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
  type?: CornerType;
  title: string;
  isCompleted: boolean;
  cornerIcon: string;
  introduction: Introduction;
  pages: Page[];
};

export interface Introduction {
  title?: string; // 학습 목표
  subTitle: string;
  contentsTitle?: string; // 학습 내용
  contents?: string[];
  contentsAlign?: "vertical" | "horizontal";
  confirmButtonText?: string; // 확인
}

export type Corner2 = Omit<Corner, "pages" | "isCompleted"> & {
  pages: ID[];
};

export type Page =
  | TP01A
  | TP01B
  | TP02
  | TP02B
  | TP02A
  | TP02C
  | TP02F
  | TP02M
  | TP02N
  | TP02G
  | TP02I
  | TP03
  | TP03A
  | TP03B
  | TP03C
  | TP03D
  | TP04
  | TP04A
  | TP05
  | TP05A
  | TP05G
  | TP06A
  | TP07
  | TP07A
  | TP08A
  | TP08B
  | TP09A
  | TP10A
  | TP10C
  | TP11A
  | TP11B
  | TP11F
  | TP11G
  | TP13
  | TP15
  | TPTab
  | TP16
  | TP19A
  | TP23
  | TP24A
  | TP24B
  | TPIframe;

export type TemplateType = Page["template"]["type"];

export type Content =
  | ChooseTextContent
  | ChooseTextByAudioContent
  | HtmlContent
  | ListenImagesContent
  | ListenWordsContent
  | ImagesContent
  | TextBoxesContent
  | IconTextContent
  | VideoContent
  | AudioContent
  | AudioRecordContent
  | DragAndDropContent
  | StudyWordsContent
  | DialogContent
  | ChooseMediaTextContent
  | NumberTableContent
  | WordQuizContent
  | SortWordsContent;

// 나중에 저작도구에서 bottomContent에서 허용할 컨텐트 컴포넌트
export type ApproveContent = Exclude<
  Content,
  | DialogContent
  | NumberTableContent
  | ChooseTextByAudioContent
  | ListenImagesContent
  | ListenWordsContent
  | DragAndDropContent
  | StudyWordsContent
  | DialogContent
  | NumberTableContent
  | WordQuizContent
  | SortWordsContent
>;

export type ApproveContentType = ApproveContent["type"];

export type ContentsType = Content["type"];

// 저작도구로부터 cookie 에서 받아오는 초기데이터
export interface InitialAppData {
  uno: string;
  uid: string;
  applId: string;
  turnId?: string;
  courseId: string;
  pageId?: string;
  subjectId: string;
  courseName: string;
  lessonId: string;
  lessonName: string;
}
