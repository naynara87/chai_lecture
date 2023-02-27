import { TemplateData } from "chai-ui-v2";

type PageLayout = {
  type: TemplateData["type"];
  name: string;
  image: string;
};

type OtherPageLayout = Omit<PageLayout, "type"> & {
  type: string;
};

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

export const conversationLayouts: OtherPageLayout[] = [
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

export const quizLayouts: OtherPageLayout[] = [
  {
    type: "TemplateQuizDialog",
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
    type: "TemplateSpeaking",
    name: "종합 말하기",
    image: "https://via.placeholder.com/150",
  },
];
