import { Content } from "./contents";

export type TemplateData =
  | Template01Data
  | Template_H_3_7Data
  | Template_H_5_5Data;

/**
 * 하나의 카드가 있는 템플릿
 * TP01
 */
export type Template01Data = {
  type: "Template01";
  contents: Content[];
};

/**
 * 두 개의 카드가 가로로 나뉘어진 템플릿
 * - 왼쪽 3 : 오른쪽 7
 * TP02
 */
export type Template_H_3_7Data = {
  type: "Template_H_3_7";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 두 개의 카드가 가로로 나뉘어진 템플릿
 * - 왼쪽 5 : 오른쪽 5
 * TP03
 */
export type Template_H_5_5Data = {
  type: "Template_H_5_5";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 회화 레이아웃
 * TP04, TP05, TP06
 */
export type TemplateConversationData = {
  type: "TemplateConversation";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 롤플레잉 레이아웃
 */
export type TemplateRolePlayingData = {
  type: "TemplateRolePlaying";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 대화형 퀴즈 레이아웃
 * TP07
 */
export type TemplateConversationQuizData = {
  type: "TemplateConversationQuiz";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 2지 선다 퀴즈 레이아웃
 * TP08
 */
export type TemplateMultiChoiceData = {
  type: "TemplateMultiChoice";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 단어 배열형 레이아웃
 * TP09
 */
export type TemplateTextBlankOrderData = {
  type: "TemplateTextBlankOrder";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 문장 배열형 레이아웃
 * TP10
 */
export type TemplateConversationBlankOrderData = {
  type: "TemplateConversationBlankOrder";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 종합 말하기 레이아웃
 * TP11
 */
export type TemplateSpeakingData = {
  type: "TemplateSpeaking";
  leftContents: Content[];
  rightContents: Content[];
};
