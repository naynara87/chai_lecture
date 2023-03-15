import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AudioAndWordsCarouselComponent from "../../../components/contents/AudioAndWordsCarouselComponent";
import { AudioAndWordsCarouselContentData } from "../../../core/types/contents";

const data: AudioAndWordsCarouselContentData = {
  id: "1",
  type: "audioAndWordsCarousel",
  data: {
    audio: {
      src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
    },
    wordCarouselContents: {
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
  },
};

export default {
  title: "components/contents/AudioAndWordsCarouselComponent",
  component: AudioAndWordsCarouselComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof AudioAndWordsCarouselComponent>;

const Template: ComponentStory<typeof AudioAndWordsCarouselComponent> = (
  args,
) => {
  return <AudioAndWordsCarouselComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as AudioAndWordsCarouselContentData,
};
