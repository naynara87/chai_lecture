import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContentsCardListContentData } from "../../../core";
import ContentsCardListComponent from "../../../components/contents/ContentsCardListComponent";

const data: ContentsCardListContentData = {
  id: 1,
  type: "contentsCardList",
  data: [
    {
      isAccent: true,
      contents: [
        {
          id: 1,
          type: "text",
          data: {
            text: "a1",
          },
        },
        {
          id: 2,
          type: "audio",
          data: {
            src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
          },
        },
      ],
    },
    {
      isAccent: true,
      contents: [
        {
          id: 3,
          type: "text",
          data: {
            text: "a1",
          },
        },
        {
          id: 4,
          type: "audio",
          data: {
            src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
          },
        },
      ],
    },
    {
      isAccent: true,
      contents: [
        {
          id: 5,
          type: "text",
          data: {
            text: "a1",
          },
        },
        {
          id: 6,
          type: "audio",
          data: {
            src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
          },
        },
      ],
    },
    {
      isAccent: true,
      contents: [
        {
          id: 7,
          type: "text",
          data: {
            text: "a1",
          },
        },
        {
          id: 8,
          type: "audio",
          data: {
            src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
          },
        },
      ],
    },
  ],
};

export default {
  title: "components/contents/ContentsCardListComponent",
  component: ContentsCardListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ContentsCardListComponent>;

const Template: ComponentStory<typeof ContentsCardListComponent> = (args) => {
  return <ContentsCardListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ContentsCardListContentData,
};
