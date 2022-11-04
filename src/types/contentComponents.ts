export type ChooseTextByAudio = {
  type: string;
  data: ChooseTextByAudioData;
};

type ChooseTextByAudioData = {
  choices: string[];
  answerIndex: number;
  audioUrl: string;
};
