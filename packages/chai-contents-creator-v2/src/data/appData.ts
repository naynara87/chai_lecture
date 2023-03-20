import { v4 as uuidV4 } from "uuid";

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
 * - 컴포넌트 선택 메뉴에 컴포넌트를 추가 과정
 *  1. contentComponents에 추가
 *  2. contentComponentsNameMap 에 해당 컴포넌트 한글 이름 표시
 *  3. getContentComponentsDefaultValue() 에 해당 컴포넌트 초기값 추가
 *  4. useComponent hook에 해당 컴포넌트 추가
 */
export type ContentsGroup = "common";

export type ContentComponents = Record<ContentsGroup, ContentType[]>;
export const contentComponents: ContentComponents = {
  common: [
    "text",
    "iconText",
    "numberingTextList",
    "borderTextBox",
    "video",
    "imageWithCaptionList",
    "speaking",
    "imageWithDescriptionList",
    "audio",
    "cornerGuideCharacter",
    "recorder",
    "multiLevelActionCard",
    "activityGuideCharacter",
  ],
};

export const contentComponentsGroupMap: Record<
  keyof ContentComponents,
  string
> = {
  common: "기본형",
};

export const contentComponentsNameMap: Partial<Record<ContentType, string>> = {
  text: "텍스트",
  iconText: "지시문",
  numberingTextList: "번호 매기기",
  borderTextBox: "학습 목표",
  video: "동영상",
  imageWithCaptionList: "이미지(캡션)",
  speaking: "따라말하기",
  imageWithDescriptionList: "이미지(설명)",
  audio: "음성듣기",
  cornerGuideCharacter: "코너 변경 안내",
  recorder: "녹음하기",
  multiLevelActionCard: "액션카드(단어용)",
  activityGuideCharacter: "활동 안내",
};

export const numberingTextDefaultData = Object.freeze({
  firstText: "",
  secondText: "",
});

export const imageWithDescriptionDefaultData = Object.freeze({
  src: "",
  description: "",
});

/**
 * 컴포넌트 초기값
 * NOTE: 함수로 사용하지 않으면 uuid가 같은 값으로 생성됨
 */
export const getContentComponentsDefaultValue = (): Partial<
  Record<ContentType, Content>
> => ({
  text: {
    id: uuidV4(),
    type: "text",
    data: {
      text: "",
    },
  },
  iconText: {
    id: uuidV4(),
    type: "iconText",
    data: {
      text: "",
    },
  },
  numberingTextList: {
    id: uuidV4(),
    type: "numberingTextList",
    data: [numberingTextDefaultData],
  },
  borderTextBox: {
    id: uuidV4(),
    type: "borderTextBox",
    data: {
      text: "",
    },
  },
  video: {
    id: uuidV4(),
    type: "video",
    data: {
      src: "",
    },
  },
  imageWithCaptionList: {
    id: uuidV4(),
    type: "imageWithCaptionList",
    data: [
      {
        src: "",
        caption: "",
      },
    ],
  },
  speaking: {
    id: uuidV4(),
    type: "speaking",
    data: {
      src: "",
      speakingTime: 0,
    },
  },
  imageWithDescriptionList: {
    id: uuidV4(),
    type: "imageWithDescriptionList",
    data: [
      {
        src: "",
        description: "",
      },
    ],
  },
  audio: {
    id: uuidV4(),
    type: "audio",
    data: {
      src: "",
    },
  },
  cornerGuideCharacter: {
    id: uuidV4(),
    type: "cornerGuideCharacter",
    data: {
      text: "",
      character: {
        src: "",
      },
    },
  },
  recorder: {
    id: uuidV4(),
    type: "recorder",
    data: {},
  },
  multiLevelActionCard: {
    id: uuidV4(),
    type: "multiLevelActionCard",
    data: [[]],
  },
  activityGuideCharacter: {
    id: uuidV4(),
    type: "activityGuideCharacter",
    data: {
      text: "",
      character: {
        src: "",
      },
    },
  },
});

/**
 * 템플릿 초기값
 * NOTE: 함수로 사용하지 않으면 uuid가 같은 값으로 생성됨
 */
export const getTemplateDefaultValue = (): Partial<
  Record<AllTemplateData["type"], AllTemplateData>
> => ({
  Template01: {
    id: uuidV4(),
    type: "Template01",
    contents: [],
  },
  Template_H_3_7: {
    id: uuidV4(),
    type: "Template_H_3_7",
    leftContents: [],
    rightContents: [],
  },
  Template_H_5_5: {
    id: uuidV4(),
    type: "Template_H_5_5",
    leftContents: [],
    rightContents: [],
  },
});
