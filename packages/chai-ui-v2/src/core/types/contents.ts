import { ID } from "./appData";

export type Content =
  | TextContentData
  | VideoContentData
  | RecorderContentData
  | NumberingTextListContentData
  | IconTextContentData
  | ExplainingCharacterContentData
  | CharacterCardListContentData
  | SpeakingContentData
  | MultilevelActionCardContentData
  | CardTabContentData
  | ConversationWordListContentData
  | BorderTextBoxContentData
  | ConversationContentData
  | ImageWithDescriptionListContentData
  | ActivityGuideCharacterContentData
  | ConversationQuizContentData
  | QuizWordsInOrderContentData
  | MultiChoiceContentData
  | ImageWithCaptionListContentData
  | FinalSpeakingContentData
  | AudioContentData
  | CornerGuideCharacterContentData
  | WordsCarouselContentData
  | AudioAndWordsCarouselContentData
  | ToggleSentenceListContentData
  | MultilevelActionSentenceCardContentData
  | FullAudioContentData
  | NotiCharacterListContentData
  | ContentsCardListContentData;
export type ContentType = Content["type"];

export type ConversationContent =
  | ConversationWordListContentData
  | ConversationContentData
  | FullAudioContentData
  | IconTextContentData;

export type QuizContent =
  | ConversationQuizContentData
  | ActivityGuideCharacterContentData
  | MultiChoiceContentData
  | QuizWordsInOrderContentData
  | FullAudioContentData
  | FinalSpeakingContentData;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Meta = Record<string, any>;

/**
 * 텍스트 컴포넌트
 */
export type TextContentData = {
  id: ID;
  type: "text";
  data: {
    text: string;
  };
  meta?: Meta;
};

/**
 * 지시문 컴포넌트
 */
export type IconTextContentData = {
  id: ID;
  type: "iconText";
  data: {
    text: string;
  };
  meta?: Meta;
};

/**
 * 번호 매기기 컴포넌트
 */
export type NumberingTextListContentData = {
  id: ID;
  type: "numberingTextList";
  data: {
    firstText: string;
    secondText?: string;
  }[];
  meta?: Meta;
};

/**
 * 학습 목표 컴포넌트
 */
export type BorderTextBoxContentData = {
  id: ID;
  type: "borderTextBox";
  data: {
    text: string;
  };
  meta?: Meta;
};

/**
 * 동영상 컴포넌트
 */
export type VideoContentData = {
  id: ID;
  type: "video";
  data: {
    src: string;
  };
  meta?: Meta;
};

/**
 * 이미지 컴포넌트
 */
export type ImageWithCaptionListContentData = {
  id: ID;
  type: "imageWithCaptionList";
  data: {
    src: string;
    caption?: string;
  }[];
  meta?: Meta;
};

/**
 * 텍스트 이미지 컴포넌트
 */
export type ImageWithDescriptionListContentData = {
  id: ID;
  type: "imageWithDescriptionList";
  data: {
    src: string;
    description: string;
  }[];
  meta?: Meta;
};

/**
 * 오디오 컴포넌트
 */
export type AudioContentData = {
  id: ID;
  type: "audio";
  data: {
    src: string;
  };
  meta?: Meta;
};

/**
 * 따라 말하기 컴포넌트
 */
export type SpeakingContentData = {
  id: ID;
  type: "speaking";
  data: {
    src: string;
    speakingTime: number;
  };
  meta?: Meta;
};

/**
 * 녹음하기 컴포넌트
 */
export type RecorderContentData = {
  id: ID;
  type: "recorder";
  data: Record<string, never>;
  meta?: Meta;
};

/**
 * 캐릭터 컴포넌트
 */
export type CornerGuideCharacterContentData = {
  id: ID;
  type: "cornerGuideCharacter";
  data: {
    text: string;
    character: {
      src: string;
    };
  };
  meta?: Meta;
};

/**
 * 활동 안내 캐릭터 컴포넌트
 */
export type ActivityGuideCharacterContentData = {
  id: ID;
  type: "activityGuideCharacter";
  data: {
    text: string;
    character: {
      src: string;
    };
  };
  meta?: Meta;
};

/**
 * 설명문 캐릭터 컴포넌트
 */
export type ExplainingCharacterContentData = {
  id: ID;
  type: "explainingCharacter";
  data: {
    text: string;
    explain: string;
    character: {
      src: string;
    };
  };
  meta?: Meta;
};

export type CharacterCardListItem = {
  title: string;
  description: string;
  modalContents?: Content[];
  character: {
    src: string;
  };
};

/**
 * 학습 내용 캐릭터 컴포넌트
 */
export type CharacterCardListContentData = {
  id: ID;
  type: "characterCardList";
  data: CharacterCardListItem[];
  meta?: Meta;
};

/**
 * 학습 예고 캐릭터 컴포넌트
 * 최대 4개까지 줄바꿈 x
 */
export type NotiCharacterListContentData = {
  id: ID;
  type: "notiCharacterList";
  data: {
    text: string;
    character: {
      src: string;
    };
  }[];
  meta?: Meta;
};

/**
 * 퀴즈 컴포넌트 팝업 레이어 컴포넌트
 * 퀴즈 컴포넌트에 속한 팝업 레이어
 */
export type QuizPopupModalContentData = {
  id: ID;
  type: "quizPopupModal";
  data: {
    correct: {
      title: string;
      sub: string;
      description: string;
      character: {
        src: string;
      };
      soundEffect?: {
        src: string;
      };
      video?: {
        src: string;
      };
    };
    incorrect: {
      title: string;
      sub: string;
      description: string;
      character: {
        src: string;
      };
      soundEffect?: {
        src: string;
      };
      video?: {
        src: string;
      };
    };
  };
  meta?: Meta;
};

/**
 * 학습 카드 컴포넌트
 * 멀티레벨콘텐츠 저작시 멀티레벨안에 멀티레벨 중복 막기
 */
export type MultilevelActionCardContentData = {
  id: ID;
  type: "multiLevelActionCard";
  data: Content[][];
  meta?: Meta;
};

/**
 * 학습 카드 컴포넌트
 * 멀티레벨콘텐츠 저작시 멀티레벨안에 멀티레벨 중복 막기
 */
export type MultilevelActionSentenceCardContentData = {
  id: ID;
  type: "multiLevelActionSentenceCard";
  data: Content[][];
  meta?: Meta;
};

/**
 * 단어장 컴포넌트
 * 단어가 2개 이상일 경우에만 Navigation dots 노출
 */
export type WordsCarouselContentData = {
  id: ID;
  type: "wordsCarousel";
  data: {
    words: {
      word: string;
      audio?: {
        src: string;
      };
    }[];
    soundEffect?: {
      src: string;
    };
  };
  meta?: Meta;
};

/**
 * 음원+단어장 컴포넌트
 */
export type AudioAndWordsCarouselContentData = {
  id: ID;
  type: "audioAndWordsCarousel";
  data: {
    wordCarouselContents: WordsCarouselContentData["data"];
    audio: {
      src: string;
    };
  };
  meta?: Meta;
};

/**
 * 단어 목록 컴포넌트
 */
export type ConversationWordListContentData = {
  id: ID;
  type: "conversationWordList";
  data: {
    words: {
      text: string;
      audio?: {
        src: string;
      };
    }[];
  };
  meta?: Meta;
};

/**
 * 대화 컴포넌트
 */
export type ConversationContentData = {
  id: ID;
  type: "conversation";
  data: {
    text: string;
    pronunciation: string;
    meaning: string;
    character: {
      name: string;
      src: string;
    };
    audio?: {
      src: string;
    };
    isBlank?: boolean;
    speakingTime?: number;
  }[];
  meta?: Meta;
};

/**
 * 대화 퀴즈 컴포넌트
 */
export type ConversationQuizContentData = {
  id: ID;
  type: "conversationQuiz";
  data: {
    text: string;
    pronunciation?: string;
    meaning?: string;
    choice: {
      text: string;
      isAnswer: boolean;
    }[];
    character: {
      name: string;
      src: string;
    };
    audio?: {
      src: string;
    };
  }[];
  meta?: Meta;
};

/**
 * 단어 배열형 퀴즈 컴포넌트
 */
export type QuizWordsInOrderContentData = {
  id: ID;
  type: "quizWordsInOrder";
  data: {
    choice: {
      text: string;
      isChoice: boolean;
      answerIndex: number;
    }[];
    character?: {
      name: string;
      src: string;
    };
    exampleContents?: Content[];
    quizPopup: QuizPopupModalContentData;
  };
  meta?: Meta;
};

/**
 * 2지 선다 퀴즈 컴포넌트
 */
export type MultiChoiceContentData = {
  id: ID;
  type: "multiChoice";
  data: {
    choice: string[];
    answerIndex: number;
    exampleContents?: Content[];
    quizPopup: QuizPopupModalContentData;
  };
  meta?: Meta;
};

/**
 * 문장 배열형 컴포넌트
 */
export type QuizSentenceContentData = {
  id: ID;
  type: "quizSentence";
  data: {
    characters: {
      name: string;
      src: string;
      sentences: {
        sentence: string;
        isChoice: boolean;
        answerIndex: number;
      }[];
    }[];
    quizPopup: QuizPopupModalContentData;
  };
};

/**
 * 종합말하기 컴포넌트
 */
export type FinalSpeakingContentData = {
  id: ID;
  type: "finalSpeaking";
  data: {
    answerModel: {
      text: string;
      pronunciation: string;
      meaning: string;
    };
    exampleContents: Content[];
  };
  meta?: Meta;
};

export type RolePlayingContentItem = {
  id: ID;
  character: {
    name: string;
    src: string;
  };
  position: "left" | "right";
  text: string;
  pronunciation: string;
  meaning: string;
  audio?: {
    src: string;
  };
};

/**
 * 롤플레이 대화 컴포넌트
 * hint(병음), 녹음기능은 학습자가 고른 캐릭터에만 노출되게 작업
 */
export type RoleplayingContentData = {
  id: ID;
  type: "roleplaying";
  data: RolePlayingContentItem[];
  meta?: Meta;
};

/**
 * 카드 탭 컴포넌트
 */
export type CardTabContentData = {
  id: ID;
  type: "cardTab";
  data: {
    tabName?: string;
    cards: {
      contents: Content[];
    }[];
  }[];
  meta?: {
    isUseTab: boolean;
  };
};

/**
 * 문장 토글 컴포넌트
 */
export type ToggleSentenceListContentData = {
  id: ID;
  type: "toggleSentenceList";
  data: {
    text: string;
    pronunciation: string;
    meaning: string;
  }[];
  meta?: Meta;
};

/**
 * 단어박스형 컴포넌트
 * @deprecated ContentsCardListContentData 로 대체
 */
export type TextBoxListContentData = {
  id: ID;
  type: "textBoxList";
  data: {
    text: string;
    isAccent: boolean;
    audio?: {
      src: string;
    };
  }[];
  meta?: Meta;
};

export type ContentsCardItem = {
  isAccent: boolean;
  contents: Content[];
};

/**
 * 학습 카드 컴포넌트
 * CH-03-01
 */
export type ContentsCardListContentData = {
  id: ID;
  type: "contentsCardList";
  data: ContentsCardItem[];
  meta?: Meta;
};

/**
 * 문제템플릿 컴포넌트
 */
export type QuestionContentData = {
  id: ID;
  type: "question";
  data: {
    iframeUrl: string;
  };
  meta?: Meta;
};

/**
 * 전체음성 듣기 컴포넌트
 */
export type FullAudioContentData = {
  id: ID;
  type: "fullAudio";
  data: Record<string, never>;
  meta?: Meta;
};
