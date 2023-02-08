import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ChooseTextByAudio from "../../../components/contents/ChooseTextByAudio";


export default {
  title: "components/contents/ChooseTextByAudio",
  component: ChooseTextByAudio,
  argTypes: {
    chooseTextByAudioContentData: {
      defaultValue: {
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
        option: false,
      },
    },
  },
} as ComponentMeta<typeof ChooseTextByAudio>;

const Template: ComponentStory<typeof ChooseTextByAudio> = (args) => (
  <ChooseTextByAudio {...args} />
);

export const IsSortAnswerFalse = Template.bind({});
IsSortAnswerFalse.args = {
  isSortAnswer: false,
};

export const IsSortAnswerTrue = Template.bind({});
IsSortAnswerTrue.args = {
  isSortAnswer: true,
};