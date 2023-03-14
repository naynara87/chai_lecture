import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardTabComponent from "../../../components/contents/CardTabComponent";
import { CardTabContentData } from "../../../core/types/contents";

const data: CardTabContentData = {
  id: "1",
  type: "cardTab",
  data: [
    {
      tabName: "Audio",
      cards: [
        {
          contents: [
            {
              type: "audio",
              id: "1344",
              data: {
                src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
              },
            },
          ],
        },
      ],
    },
    {
      tabName: "Audio",
      cards: [
        {
          contents: [
            {
              type: "audio",
              id: "1344",
              data: {
                src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default {
  title: "components/contents/CardTabComponent",
  component: CardTabComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof CardTabComponent>;

const Template: ComponentStory<typeof CardTabComponent> = (args) => {
  return <CardTabComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as CardTabContentData,
};
