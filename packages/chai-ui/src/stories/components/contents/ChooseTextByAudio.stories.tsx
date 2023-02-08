import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChooseTextByAudioContent } from "../../../types";

import ChooseTextByAudio from "../../../components/contents/ChooseTextByAudio";

const data: ChooseTextByAudioContent = {
  type: "chooseTextByAudio",
  data: [
    {
      choices: ["de", "ge"],
      answerIndex: 0,
      audio: {
          src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/3sreCyS0694Tss2vVmY9vGvx5mHBKYyt/7sH4zE1pcn3eyITQXVD8sXcgHIdTfLaY/a5e6a13523f1af57d14d98e8aaeb57478f1fee9f4232c2d67cc16f4cfe4ac92d.mp3",
      },
    },
    {
      choices: ["be", "te"],
      answerIndex: 0,
      audio: {
          src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/3sreCyS0694Tss2vVmY9vGvx5mHBKYyt/7sH4zE1pcn3eyITQXVD8sXcgHIdTfLaY/a5e6a13523f1af57d14d98e8aaeb57478f1fee9f4232c2d67cc16f4cfe4ac92d.mp3",
      },
    },
    {
      choices: ["de", "ge"],
      answerIndex: 2,
      audio: {
          src: "https://d5hdqs1p7vdyb.cloudfront.net/assets/3sreCyS0694Tss2vVmY9vGvx5mHBKYyt/7sH4zE1pcn3eyITQXVD8sXcgHIdTfLaY/a5e6a13523f1af57d14d98e8aaeb57478f1fee9f4232c2d67cc16f4cfe4ac92d.mp3",
      },
    },    
  ],
  options: {
    sortAnswer: false,
  },
};


export default {
  title: "components/contents/ChooseTextByAudio",
  component: ChooseTextByAudio,
  argTypes: {
    defaultValue: data,
  },
} as ComponentMeta<typeof ChooseTextByAudio>;

const Template: ComponentStory<typeof ChooseTextByAudio> = (args) => {
  return <ChooseTextByAudio {...args} />
};

export const Default = Template.bind({});
Default.args = {
  chooseTextByAudioContentData: {
    ...data,
    options: {
      sortAnswer: false,
    },
  }as ChooseTextByAudioContent,
};

export const SortAnswerTrue = Template.bind({});
SortAnswerTrue.args = {
  chooseTextByAudioContentData: {
    ...data,
    options: {
      sortAnswer: true,
    },

  }as ChooseTextByAudioContent,
};

