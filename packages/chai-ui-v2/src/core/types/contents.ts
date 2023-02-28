import { ID } from "./appData";

export type Content = VideoContentData | RecorderContentData;
export type ContentType = Content["type"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Meta = Record<string, any>;

/**
 * 텍스트 컴포넌트
 */
export type TextContentData = {
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
export type DotTextListContentData = {
  type: "dotTextList";
  data: {
    text: string;
  }[];
  meta?: Meta;
};

/**
 * 동영상 컴포넌트
 */
export type VideoContentData = {
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
  type: "imageWithDescriptionList";
  data: {
    src: string;
    description?: string;
  }[];
  meta?: Meta;
};

/**
 * 오디오 컴포넌트
 */
export type AudioContentData = {
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
  type: "recorder";
  data: {};
  meta?: Meta;
};

/**
 * 캐릭터 컴포넌트
 */
export type SpeakingCharacterContentData = {
  type: "speakingCharacter";
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
export type GuideCharacterContentData = {
  type: "guideCharacter";
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

/**
 * 학습 내용 캐릭터 컴포넌트
 */
export type CharacterCardListContentData = {
  type: "characterCardList";
  data: {
    title: string;
    description: string;
    modalContents?: Content[];
    character: {
      src: string;
    };
  }[];
  meta?: Meta;
};

/**
 * 학습 예고 캐릭터 컴포넌트
 * 최대 4개까지 줄바꿈 x
 */
export type NotiCharacterListContentData = {
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
 * 팝업 레이어 캐릭터 컴포넌트
 * 페이지에 속한 인트로덕션
 */
export type IntroductionModalContentData = {
  type: "introductionModal";
  data: {
    title: string;
    sub: string;
    description: string;
    character: {
      src: string;
    };
    soundEffect?: {
      src: string;
    };
  };
  meta?: Meta;
};

/**
 * 학습 카드 컴포넌트
 * 멀티레벨콘텐츠 저작시 멀티레벨안에 멀티레벨 중복 막기
 */
export type MultilevelActionCardListContentData = {
  type: "multiLevelActionList";
  data: {
    multilevelContents: Content[][];
  }[];
  meta?: Meta;
};

/**
 * 단어장 컴포넌트
 * 단어가 2개 이상일 경우에만 Navigation dots 노출
 */
export type WordsCarouselContentData = {
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
  type: "conversationWordList";
  data: {
    words: {
      text: string;
      pronunciation: string;
      meaning: string;
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
  type: "conversation";
  data: {
    words: {
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
      speakingTime?: number;
    }[];
    hasToggle: boolean;
  };
  meta?: Meta;
};

/**
 * 롤플레이 대화 컴포넌트
 * hint(병음), 녹음기능은 학습자가 고른 캐릭터에만 노출되게 작업
 */
export type RoleplayingContentData = {
  type: "roleplaying";
  data: {
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
  }[];
  meta?: Meta;
};

/**
 * 카드 탭 컴포넌트
 */
export type CardTabContentData = {
  type: "cardTab";
  data: {
    tabName?: string;
    cards: {
      contents: Content[];
    }[];
  }[];
  meta?: Meta;
};

/**
 * 문장 토글 컴포넌트
 */
export type ToggleSentenceListContentData = {
  type: "toggleSentenceList";
  data: {
    text: string;
    pronunciation: string;
    meaning: string;
  }[];
  meta?: Meta;
};
