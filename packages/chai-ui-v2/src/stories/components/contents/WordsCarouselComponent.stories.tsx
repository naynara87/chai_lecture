import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WordsCarouselComponent from "../../../components/contents/WordsCarouselComponent";
import { WordsCarouselContentData } from "../../../core";

const data: WordsCarouselContentData = {
  id: "1",
  type: "wordsCarousel",
  data: {
    words: [
      {
        word: "테스트 텍스트",
        audio: {
          src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
        },
      },
      {
        word: "테스트 텍스트",
        audio: {
          src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
        },
      },
    ],
  },
};

export default {
  title: "components/contents/WordsCarouselComponent",
  component: WordsCarouselComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof WordsCarouselComponent>;

const Template: ComponentStory<typeof WordsCarouselComponent> = (args) => {
  return <WordsCarouselComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as WordsCarouselContentData,
};
