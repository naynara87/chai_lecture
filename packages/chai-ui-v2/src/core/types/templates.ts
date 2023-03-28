import { ID } from "./appData";
import {
  ActivityGuideCharacterContentData,
  Content,
  ConversationContent,
  FinalSpeakingContentData,
  IconTextContentData,
  MultiChoiceContentData,
  QuestionContentData,
  QuizContent,
  QuizSentenceContentData,
  RoleplayingContentData,
  WordsInOrderContentData,
} from "./contents";

export type AllTemplateData =
  | TemplateData
  | ConversationTemplateData
  | QuizTemplateData
  | TemplateRolePlayingData
  | TemplateWordCardData
  | TemplateQuestionData;

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

export type RolePlayingCharacter = {
  id: ID;
  name: string;
  src: string;
  backgroundColor?: string;
};

/**
 * 롤플레잉 레이아웃
 */
export type TemplateRolePlayingData = {
  id: ID;
  type: "TemplateRolePlaying";
  iconText: IconTextContentData;
  guideContent: ActivityGuideCharacterContentData;
  characters: RolePlayingCharacter[];
  rolePlayingContents: RoleplayingContentData;
};

/**
 * 하나의 카드가 있는 템플릿
 * TP01
 */
export type Template01Data = {
  id: ID;
  type: "Template01";
  contents: Content[];
};

/**
 * 두 개의 카드가 가로로 나뉘어진 템플릿
 * - 왼쪽 3 : 오른쪽 7
 * TP02
 */
export type Template_H_3_7Data = {
  id: ID;
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
  id: ID;
  type: "Template_H_5_5";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 회화 레이아웃
 * TP04
 */
export type TemplateConversationData = {
  id: ID;
  type: "TemplateConversation";
  leftContents: ConversationContent[];
  rightContents: ConversationContent[];
};

/**
 * 회화 토글 학습 레이아웃
 * TP05
 */
export type TemplateConversationToggleData = {
  id: ID;
  type: "TemplateConversationToggle";
  leftContents: ConversationContent[];
  rightContents: ConversationContent[];
};

/**
 * 회화 토글 학습 레이아웃
 * TP06
 */
export type TemplateConversationRepeatData = {
  id: ID;
  type: "TemplateConversationRepeat";
  leftContents: ConversationContent[];
  rightContents: ConversationContent[];
};

/**
 * 대화형 퀴즈 레이아웃
 * TP07
 */
export type TemplateQuizConversationData = {
  id: ID;
  type: "TemplateQuizConversation";
  leftContents: QuizContent[];
  rightContents: QuizContent[];
};

/**
 * 2지 선다 퀴즈 레이아웃
 * TP08
 */
export type TemplateQuizMultiChoiceData = {
  id: ID;
  type: "TemplateQuizMultiChoice";
  leftContents: Content[];
  multiChoice: MultiChoiceContentData;
};

/**
 * 단어 배열형 레이아웃
 * TP09
 */
export type TemplateQuizWordsInOrderData = {
  id: ID;
  type: "TemplateQuizWordsInOrder";
  leftContents: Content[];
  wordsInOrder: WordsInOrderContentData;
};

/**
 * 문장 배열형 레이아웃
 * TP10
 */
export type TemplateQuizSentencesInOrderData = {
  id: ID;
  type: "TemplateQuizSentencesInOrder";
  titleContents: IconTextContentData;
  mainContents: QuizSentenceContentData;
};

/**
 * 종합 말하기 레이아웃
 * TP11
 */
export type TemplateQuizSpeakingData = {
  id: ID;
  type: "TemplateQuizSpeaking";
  leftContents: Content[];
  rightContents: FinalSpeakingContentData;
};

/**
 * 단어 카드 레이아웃
 * TP12
 */
export type TemplateWordCardData = {
  id: ID;
  type: "TemplateWordCard";
  leftContents: Content[];
  rightContents: Content[];
};

/**
 * 문제 레이아웃
 * TP13
 */
export type TemplateQuestionData = {
  id: ID;
  type: "TemplateQuestion";
  contents: QuestionContentData;
};
