import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConversationWordListComponent from "../../../components/contents/ConversationWordListComponent";
import { ConversationWordListContentData } from "../../../core";

const data: ConversationWordListContentData = {
  id: "1",
  type: "conversationWordList",
  data: {
    words: [
      {
        text: "游泳",
        audio: {
          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
        },
      },
      {
        text: "游泳2",
        audio: {
          src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
        },
      },
      {
        text: "游泳2",
        audio: {
          src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
        },
      },
      {
        text: "游泳2",
        audio: {
          src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
        },
      },
      {
        text: "游泳2",
        audio: {
          src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
        },
      },
      {
        text: "游泳2",
        audio: {
          src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
        },
      },
    ],
  },
};

export default {
  title: "components/contents/ConversationWordListComponent",
  component: ConversationWordListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ConversationWordListComponent>;

const Template: ComponentStory<typeof ConversationWordListComponent> = (
  args,
) => {
  return <ConversationWordListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ConversationWordListContentData,
};
