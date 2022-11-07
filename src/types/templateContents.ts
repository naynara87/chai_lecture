// 각 컴포넌트(컨텐츠)의 타입을 정의합니다.
export type ChooseTextByAudioContent = {
  type: "chooseTextByAudio";
  data: ChooseTextByAudioData;
};

type ChooseTextByAudioData = {
  choices: string[];
  answerIndex: number;
  audioUrl: string;
};

export type TextContent = {
  type: "text";
  data: {
    text: string;
  };
};

export type ListenImagesContent = {
  type: "listenImages";
  data: ListenImageData[];
};

type ListenImageData = {
  image: string;
  audio: string;
};

export type ListenWordsContent = {
  type: "listenWords";
  data: ListenWordData[];
};

type ListenWordData = {
  word: string;
  audioUrl?: string;
  meaning?: string;
};

export type TextBoxesContent = {
  type: "textBoxes";
  data: TextBoxesData;
};

type TextBoxesData = {
  textList: TextList[];
  vertical?: boolean;
};

type TextList = {
  main: string;
  sub?: string;
};
