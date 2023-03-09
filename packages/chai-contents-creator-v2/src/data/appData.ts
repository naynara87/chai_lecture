import {
  AllTemplateData,
  Content,
  ContentType,
  ConversationTemplateData,
  QuizTemplateData,
  TemplateData,
  TemplateRolePlayingData,
} from "chai-ui-v2";

type PageLayout = {
  type: TemplateData["type"];
  name: string;
  image: string;
};

type ConversationPageLayout = {
  type: ConversationTemplateData["type"];
  name: string;
  image: string;
};

type QuizPageLayout = {
  type: QuizTemplateData["type"];
  name: string;
  image: string;
};

type RolePlayingPageLayout = {
  type: TemplateRolePlayingData["type"];
  name: string;
  image: string;
};

/**
 * 기본 레이아웃
 * TP01 : Template01 - 1단 레이아웃
 * TP02 : Template_H_3_7 - 3:7 레이아웃
 * TP03 : Template_H_5_5 - 5:5 레이아웃
 */
export const commonLayouts: PageLayout[] = [
  {
    type: "Template01",
    name: "1단 레이아웃",
    image: "https://via.placeholder.com/150",
  },
  {
    type: "Template_H_3_7",
    name: "3:7 레이아웃",
    image: "https://via.placeholder.com/150",
  },
  {
    type: "Template_H_5_5",
    name: "5:5 레이아웃",
    image: "https://via.placeholder.com/150",
  },
];

/**
 * 회화 레이아웃
 * TP04 : TemplateConversation - 회화 학습
 * TP05 : TemplateConversationToggle - 회화 토글 학습
 * TP06 : TemplateConversationRepeat - 회화 따라 말하기 학습
 */
export const conversationLayouts: ConversationPageLayout[] = [
  {
    type: "TemplateConversation",
    name: "회화 학습",
    image: "https://via.placeholder.com/150",
  },
  {
    type: "TemplateConversationToggle",
    name: "회화 토글 학습",
    image: "https://via.placeholder.com/150",
  },
  {
    type: "TemplateConversationRepeat",
    name: "회화 따라 말하기 학습",
    image: "https://via.placeholder.com/150",
  },
];

/**
 * 퀴즈 레이아웃
 * TP07 : TemplateQuizConversation - 대화형 퀴즈
 * TP08 : TemplateQuizMultiChoice - 2지선다 퀴즈
 * TP09 : TemplateQuizWordsInOrder - 단어 배열형
 * TP10 : TemplateQuizSentencesInOrder - 문장 배열형
 * TP11 : TemplateQuizSpeaking - 종합 말하기
 */
export const quizLayouts: QuizPageLayout[] = [
  {
    type: "TemplateQuizConversation",
    name: "대화형 퀴즈",
    image: "https://via.placeholder.com/150",
  },
  {
    type: "TemplateQuizMultiChoice",
    name: "2지선다 퀴즈",
    image: "https://via.placeholder.com/150",
  },
  {
    type: "TemplateQuizWordsInOrder",
    name: "단어 배열형",
    image: "https://via.placeholder.com/150",
  },
  {
    type: "TemplateQuizSentencesInOrder",
    name: "문장 배열형",
    image: "https://via.placeholder.com/150",
  },
  {
    type: "TemplateQuizSpeaking",
    name: "종합 말하기",
    image: "https://via.placeholder.com/150",
  },
];

/**
 * 롤 플레잉 레이아웃
 */
export const rolePlayingLayouts: RolePlayingPageLayout[] = [
  {
    type: "TemplateRolePlaying",
    name: "롤 플레잉",
    image: "https://via.placeholder.com/150",
  },
];

/**
 * ======== 컨텐츠 컴포넌트 ========
 */

/**
 * 컨텐츠 컴포넌트 종류
 */
export type ContentsGroup = "common";

export type ContentComponents = Record<ContentsGroup, ContentType[]>;
export const contentComponents: ContentComponents = {
  common: ["text", "iconText", "video", "audio", "borderTextBox"],
};

export const contentComponentsGroupMap: Record<
  keyof ContentComponents,
  string
> = {
  common: "기본형",
};

export const contentComponentsNameMap: Partial<Record<ContentType, string>> = {
  text: "텍스트",
};

/**
 * 컴포넌트 초기값
 */
export const contentComponentsDefaultValue: Partial<
  Record<ContentType, Content>
> = {
  text: {
    type: "text",
    data: {
      text: "",
    },
  },
  iconText: {
    type: "iconText",
    data: {
      text: "",
    },
  },
  numberingTextList: {
    type: "numberingTextList",
    data: [
      {
        firstText: "",
        secondText: "",
      },
    ],
  },
};

/**
 * 템플릿 초기값
 */
export const templateDefaultValue: Partial<
  Record<AllTemplateData["type"], AllTemplateData>
> = {
  Template01: {
    type: "Template01",
    contents: [],
  },
  Template_H_3_7: {
    type: "Template_H_3_7",
    leftContents: [],
    rightContents: [],
  },
  Template_H_5_5: {
    type: "Template_H_5_5",
    leftContents: [],
    rightContents: [],
  },
};
