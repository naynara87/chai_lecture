import { Content } from "chai-ui";

export const defaultContentComponentData: Partial<
  Record<Content["type"], Content["data"]>
> = {
  chooseTextByAudio: [
    {
      choices: [],
      answerIndex: -1,
      audio: {
        src: "",
      },
    },
  ],
  chooseText: [
    {
      choices: [],
      answerIndex: -1,
      // tip: '',
      // explanation: Explanation;
    },
  ],
  textBoxes: [
    {
      main: "",
      sub: "",
      description: "", // 박스 밖 설명글
    },
  ],
  images: [
    {
      src: "",
    },
  ],
};
