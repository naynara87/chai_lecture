import { ID } from "./appData";

// 각 컴포넌트(컨텐츠)의 타입을 정의합니다.
export type ChooseTextContent = {
  type: "chooseText";
  data: {
    choices: string[];
    answerIndex: number;
    tip: string; // html
    explanation: string; // html
  };
};

export type ChooseTextByAudioContent = {
  type: "chooseTextByAudio";
  data: ChooseTextByAudioData;
};

type ChooseTextByAudioData = {
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
  };
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

type ListenWordData = {
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

type TextBoxesData = {
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
  };
};

export type VideoContent = {
  type: "video";
  data: {
    src: string;
    tracks?: VideoTrack[];
  };
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
  };
};

export type AudioRecordContent = {
  type: "audioRecord";
  data: "";
};

export type DragAndDropContent = {
  type: "dragAndDrop";
  data: {
    choices: string[];
    answerIndex: number;
    explanation: string;
  };
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

type DialogData = {
  id: ID; // 대화를 구분하기 위한 id - 같은 사람이 여러번 말할 경우 구분하기 위함
  icon: {
    src: string;
  };
  text: string;
  pronunciation: string;
  meaning: string;
  hasQuestion: boolean;
  question?: {
    blankQuestion: (string | "*blank*")[];
    choices: string[];
    answerIndex: number;
  };
  audio: {
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
