import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextBoxListComponent from "../../../components/contents/TextBoxListComponent";
import { TextBoxListContentData } from "../../../core";

const data: TextBoxListContentData = {
  id: "1",
  type: "textBoxList",
  data: [
    {
      text: "a",
      isAccent: false,
      audio: {
        // src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
      },
    },
    {
      text: "a",
      isAccent: false,
      audio: {
        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
      },
    },
    {
      text: "a",
      isAccent: true,
      audio: {
        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
      },
    },
    {
      text: "a",
      isAccent: false,
      audio: {
        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
      },
    },
  ],
};

export default {
  title: "components/contents/TextBoxListComponent",
  component: TextBoxListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof TextBoxListComponent>;

const Template: ComponentStory<typeof TextBoxListComponent> = (args) => {
  return <TextBoxListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as TextBoxListContentData,
};
