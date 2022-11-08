// 각 컴포넌트(컨텐츠)의 타입을 정의합니다.
export type ChooseText = {
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
    type?: "tip" | string;
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

export type IconText = {
  type: "iconText";
  data: {
    icon: {
      src: string;
    };
    text: string;
  };
};

// TODO: 비디오 컴포넌트 자막 데이터 타입 정의
export type VideoContent = {
  type: "video";
  data: {
    src: string;
  };
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
