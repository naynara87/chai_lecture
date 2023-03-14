import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MultiChoiceComponent from "../../../components/contents/MultiChoiceComponent";
import { MultiChoiceContentData } from "../../../core";

const data: MultiChoiceContentData = {
  id: "1",
  type: "multiChoice",
  data: {
    choice: ["오답", "정답"],
    answerIndex: 1,
    exampleContents: [
      {
        id: "asdf",
        type: "text",
        data: {
          text: "<p>제3성이 연이어 나올 때,<br/>올바르게 발음한 것을 고르세요.</p>",
        },
      },
    ],
    quizPopup: {
      id: "popup",
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
  title: "components/contents/MultiChoiceComponent",
  component: MultiChoiceComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof MultiChoiceComponent>;

const Template: ComponentStory<typeof MultiChoiceComponent> = (args) => {
  return <MultiChoiceComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as MultiChoiceContentData,
};
