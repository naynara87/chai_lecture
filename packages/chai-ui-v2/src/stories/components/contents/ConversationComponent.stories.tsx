import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConversationComponent from "../../../components/contents/ConversationComponent";
import { ConversationContentData } from "../../../core";

const data: ConversationContentData = {
  id: "1",
  type: "conversation",
  data: [
    {
      text: "我喜欢秋天，因为秋天不冷不热，很凉快。",
      pronunciation:
        "Wǒ xǐhuān qiūtiān, yīnwèi qiūtiān bù lěngbù rè, hěn liángkuai.",
      meaning: "안녕",
      character: {
        name: "왕리리",
        src: "이미지 주소",
      },
      audio: {
        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
      },
      speakingTime: 3,
    },
    {
      text: "是吗？ 你喜欢什么季节？",
      pronunciation: "Shì ma? Nǐ xǐhuān shénme jìjié?",
      meaning: "안녕",
      character: {
        name: "김민호",
        src: "이미지 주소",
      },
      audio: {
        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
      },
      speakingTime: 3,
    },
  ],
};

export default {
  title: "components/contents/ConversationComponent",
  component: ConversationComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ConversationComponent>;

const Template: ComponentStory<typeof ConversationComponent> = (args) => {
  return <ConversationComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ConversationContentData,
};
