import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AudioComponent from "../../../components/contents/AudioComponent";
import { AudioContentData } from "../../../core";

const data: AudioContentData = {
  id: "1",
  type: "audio",
  data: {
    src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
  },
};

export default {
  title: "components/contents/AudioComponent",
  component: AudioComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof AudioComponent>;

const Template: ComponentStory<typeof AudioComponent> = (args) => {
  return <AudioComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as AudioContentData,
};
