import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpeakingComponent from "../../../components/contents/SpeakingComponent";
import { SpeakingContentData } from "../../../core";

const data: SpeakingContentData = {
  id: "1",
  type: "speaking",
  data: {
    speakingTime: 3,
    src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
  },
};

export default {
  title: "components/contents/SpeakingComponent",
  component: SpeakingComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof SpeakingComponent>;

const Template: ComponentStory<typeof SpeakingComponent> = (args) => {
  return <SpeakingComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as SpeakingContentData,
};
