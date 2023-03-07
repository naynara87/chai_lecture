import { Content, ConversationContent, QuizContent } from "./contents";

export type TemplateData =
  | Template01Data
  | Template_H_3_7Data
  | Template_H_5_5Data;

export type ConversationTemplateData =
  | TemplateConversationData
  | TemplateConversationToggleData
  | TemplateConversationRepeatData;

export type QuizTemplateData =
  | TemplateQuizConversationData
  | TemplateQuizMultiChoiceData
  | TemplateQuizWordsInOrderData
  | TemplateQuizSentencesInOrderData
  | TemplateQuizSpeakingData;

/**
 * 롤플레잉 레이아웃
 */
export type TemplateRolePlayingData = {
  type: "TemplateRolePlaying";
  leftContents: Content[];
  rightContents: Content[];
};

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
 * TP04
 */
export type TemplateConversationData = {
  type: "TemplateConversation";
  leftContents: ConversationContent[];
  rightContents: ConversationContent[];
};

/**
 * 회화 토글 학습 레이아웃
 * TP05
 */
export type TemplateConversationToggleData = {
  type: "TemplateConversationToggle";
  leftContents: ConversationContent[];
  rightContents: ConversationContent[];
};

/**
 * 회화 토글 학습 레이아웃
 * TP06
 */
export type TemplateConversationRepeatData = {
  type: "TemplateConversationRepeat";
  leftContents: ConversationContent[];
  rightContents: ConversationContent[];
};

/**
 * 대화형 퀴즈 레이아웃
 * TP07
 */
export type TemplateQuizConversationData = {
  type: "TemplateQuizConversation";
  leftContents: QuizContent[];
  rightContents: QuizContent[];
};

/**
 * 2지 선다 퀴즈 레이아웃
 * TP08
 */
export type TemplateQuizMultiChoiceData = {
  type: "TemplateQuizMultiChoice";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 단어 배열형 레이아웃
 * TP09
 */
export type TemplateQuizWordsInOrderData = {
  type: "TemplateQuizWordsInOrder";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 문장 배열형 레이아웃
 * TP10
 */
export type TemplateQuizSentencesInOrderData = {
  type: "TemplateQuizSentencesInOrder";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 종합 말하기 레이아웃
 * TP11
 */
export type TemplateQuizSpeakingData = {
  type: "TemplateQuizSpeaking";
  leftContents: Content[];
  rightContents: Content[];
};
