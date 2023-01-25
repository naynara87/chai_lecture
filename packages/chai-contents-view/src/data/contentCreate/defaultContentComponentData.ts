import { Content } from "../../types/appData";

export const defaultContentComponentData: Partial<Record<Content["type"], Content["data"]>> = {
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
};
