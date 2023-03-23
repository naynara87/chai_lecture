import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WordsInOrderComponent from "../../../components/contents/WordsInOrderComponent";
import { WordsInOrderContentData } from "../../../core";

const data: WordsInOrderContentData = {
  id: "1",
  type: "wordsInOrder",
  data: {
    choice: [
      {
        text: "<p>冷<br>lěng</p>",
        isChoice: true,
        answerIndex: 0,
      },
      {
        text: "<p>!</p>",
        isChoice: false,
        answerIndex: -1,
      },
      {
        text: "<p>首尔的<br>Shǒu'ěr de</p>",
        isChoice: true,
        answerIndex: 1,
      },
      {
        text: "<p>没有<br>Méiyǒu</p>",
        isChoice: true,
        answerIndex: 2,
      },
      {
        text: "<p>?</p>",
        isChoice: false,
        answerIndex: -1,
      },
    ],
    character: {
      name: "김민호",
      src: "asdfasdf",
    },
    exampleContents: [
      {
        id: "135135",
        type: "text",
        data: {
          text: "너는 어디 가니?",
        },
      },
    ],
    quizPopup: {
      id: "13535135",
      type: "quizPopupModal",
      data: {
        correct: {
          title: "做得好!",
          sub: "정답이에요!",
          description:
            "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.",
          character: {
            src: "",
          },
          soundEffect: {
            src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
          },
          video: {
            src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
          },
        },
        incorrect: {
          title: "真难过!",
          sub: "아쉬워요!",
          description:
            "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.",
          character: {
            src: "",
          },
          soundEffect: {
            src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
          },
          video: {
            src: "https://cdn.bubblecon.co.kr/videos/46.mp4",
          },
        },
      },
    },
  },
};

export default {
  title: "components/contents/WordsInOrderComponent",
  component: WordsInOrderComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof WordsInOrderComponent>;

const Template: ComponentStory<typeof WordsInOrderComponent> = (args) => {
  return <WordsInOrderComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as WordsInOrderContentData,
};
