import {
  TP01A,
  TP03A,
  TP03B,
  TP15A,
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
  TP08G,
  TP02K,
  TPIframe,
  TP01B,
  TP10A,
  TP11G,
  TP24A,
  TP09A,
} from "./pageTemplate";
import {
  AudioContent,
  AudioRecordContent,
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

export type Page =
  | TP01A
  | TP01B
  | TP02C
  | TP02F
  | TP02M
  | TP02N
  | TP02K
  | TP03A
  | TP03B
  | TP03C
  | TP03D
  | TP04A
  | TP05A
  | TP07A
  | TP08G
  | TP10A
  | TP09A
  | TP11A
  | TP11F
  | TP11G
  | TP15A
  | TP24A
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
  | NumberTableContent
  | WordQuizContent
  | SortWordsContent;

// 나중에 저작도구에서 bottomContent에서 허용할 컨텐트 컴포넌트
export type BottomContent = Exclude<
  Content,
  | DialogContent
  | NumberTableContent
  | ChooseTextByAudioContent
  | ListenImagesContent
  | ListenWordsContent
  | TextBoxesContent
  | IconTextContent
  | DragAndDropContent
  | StudyWordsContent
  | DialogContent
  | NumberTableContent
  | WordQuizContent
  | SortWordsContent
>;

export type BottomContentType = BottomContent["type"];

export type ContentsType = Content["type"];
