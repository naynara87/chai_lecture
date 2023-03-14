import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConversationQuizComponent from "../../../components/contents/ConversationQuizComponent";
import { ConversationQuizContentData } from "../../../core";

const data: ConversationQuizContentData = {
  id: "1",
  type: "conversationQuiz",
  data: [
    {
      text: "今天刮风，*blank*，很冷。",
      pronunciation: "Jīntiān guā fēng, xià xuě, hěn lěng.",
      meaning: "오늘은 바람이 불고, 눈이 내려서 추워.",
      choice: [
        { text: "정답", isAnswer: true },
        {
          text: "오답",
          isAnswer: false,
        },
      ],
      character: {
        name: "왕리리",
        src: "adsfasdf",
      },
      audio: {
        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
      },
    },
  ],
};

export default {
  title: "components/contents/ConversationQuizComponent",
  component: ConversationQuizComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ConversationQuizComponent>;

const Template: ComponentStory<typeof ConversationQuizComponent> = (args) => {
  return <ConversationQuizComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ConversationQuizContentData,
};
