import { ApproveContent, ID } from "./appData";

// 각 컴포넌트(컨텐츠)의 타입을 정의합니다.

type Explanation = {
  audio?: {
    src: string;
  };
  correctMessage: string;
  wrongMessage: string;
  text: string;
};

export type ChooseTextContent = {
  type: "chooseText";
  data: {
    choices: string[];
    answerIndex: number;
    tip?: string; // html
    explanation: Explanation;
  }[];
};

export type ChooseTextByAudioContent = {
  type: "chooseTextByAudio";
  data: ChooseTextByAudioData[];
};

export type ChooseTextByAudioData = {
  choices: string[];
  answerIndex: number;
  audio: {
    src: string;
  };
};

export type HtmlContent = {
  type: "html";
  data: {
    kind?: "tip" | "title" | "description";
    text: string;
  }[];
};

export type ListenImagesContent = {
  type: "listenImages";
  data: ListenImageData[];
};

type ListenImageData = {
  image: {
    src: string;
  };
  audio: {
    src: string;
  };
};

export type ListenWordsContent = {
  type: "listenWords";
  data: ListenWordData[];
};

export type ListenWordData = {
  text: string;
  audio?: {
    src: string;
  };
  meaning?: string;
};

export type ImagesContent = {
  type: "images";
  data: { src: string }[];
};

export type TextBoxesContent = {
  type: "textBoxes";
  data: TextBoxesData[];
};

export type TextBoxesData = {
  main: string;
  sub?: string;
  description?: string; // 박스 밖 설명글
};

export type IconTextContent = {
  type: "iconText";
  data: {
    icon: {
      src: string;
    };
    text: string;
  }[];
};

export type VideoContent = {
  type: "video";
  data: {
    src: string;
    tracks?: VideoTrack[];
  }[];
};

type VideoTrack = {
  src: string; // 자막 파일 경로 e.g. https://video_track_url/track1.vtt
  kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  srclang?: string; // 자막 언어 e.g. en, ko
  default?: boolean; // 기본 자막 여부
};

export type AudioContent = {
  type: "audio";
  data: {
    src: string;
  }[];
};

export type AudioRecordContent = {
  type: "audioRecord";
  data: {
    audio: {
      src: string;
    };
  }[];
};

export type DragAndDropContent = {
  type: "dragAndDrop";
  data: {
    choices: string[];
    answerIndex: number;
    explanation: Explanation;
  }[];
};

export type StudyWordsContent = {
  type: "studyWords";
  data: {
    text: string; // html
    pronunciation: string; // html
    meaning: string; // html
    audio: {
      src: string;
    };
  }[];
};

export type DialogContent = {
  type: "dialog";
  data: DialogData[];
};

export type DialogData = {
  id: ID; // 대화를 구분하기 위한 id - 같은 사람이 여러번 말할 경우 구분하기 위함
  icon: {
    src: string;
  };
  text: string;
  pronunciation: string;
  meaning: string;
  hasQuestion: boolean;
  question?: {
    choices: string[];
    answerIndex: number;
  };
  audio?: {
    src: string;
  };
};

export type NumberTableContent = {
  type: "numberTable";
  data: {
    text: string;
    pronunciation: string;
    meaning: string;
    audio: {
      src: string;
    };
  }[];
};

export type WordQuizContent = {
  type: "wordQuiz";
  data: WordQuizData[];
};

export type WordQuizData = {
  text: string;
  choices: string[];
  answerIndex: number;
  meaning: string;
  audio: {
    src: string;
  };
  explanation?: Explanation;
};

export type SortWordsContent = {
  type: "sortWords";
  data: SortWordsData[];
};

export type SortWordsData = {
  text: string;
  fakeChoices?: string[];
  audio?: {
    src: string;
  };
  explanation: Explanation;
};

export type ChooseMediaTextContent = {
  type: "chooseMediaText";
  data: ChooseMediaTextData[];
};

export type ChooseMediaTextData = {
  choices: ChooseMediaTextAudio[];
  answerIndex: number;
  explanation: Explanation;
};

export type ChooseMediaTextAudio = {
  text: string;
  audio?: {
    src: string;
  };
};

export type BottomTabsContent = {
  type: "bottomTabs";
  data: BottomTabsData[];
};

export type BottomTabsData = {
  tabNames: string;
  contents: ApproveContent[];
};

export type StudySentencesWithVocabularyContent = {
  type: "studySentencesWithVocabulary";
  data: StudySentencesWithVocabularyData[];
};

export type StudySentencesWithVocabularyData = {
  sentences: Sentence[];
  image: {
    src: string;
  };
};

type Sentence = {
  text: string;
  pronunciation: string;
  meaning: string;
  audio?: {
    src: string;
  };
  words: SentenceWord[];
};

export type SentenceWord = {
  text: string;
  pronunciation: string;
  meaning: string;
  audio?: {
    src: string;
  };
};

export type SentenceWordContent = {
  type: "sentenceWord";
  data: SentenceWord[];
};
