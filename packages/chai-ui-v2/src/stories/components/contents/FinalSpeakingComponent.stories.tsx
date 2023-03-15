import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FinalSpeakingComponent from "../../../components/contents/FinalSpeakingComponent";
import { FinalSpeakingContentData } from "../../../core";

const data: FinalSpeakingContentData = {
  id: "1",
  type: "finalSpeaking",
  data: {
    exampleContents: [
      {
        id: "asg",
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
          },
          {
            text: "我觉得这里的冬天没有中国那么冷。",
            pronunciation:
              "Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.",
            meaning: "이곳의 겨울은 중국만큼 춥지 않은 것 같아요.",
            character: {
              name: "김민호",
              src: "이미지 주소",
            },
            audio: {
              src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
            },
            isBlank: true,
          },
        ],
      },
    ],
    answerModel: {
      text: "我觉得这里的冬天没有中国那么冷。",
      pronunciation: "Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.",
      meaning: "이곳의 겨울은 중국만큼 춥지 않은 것 같아요.",
    },
  },
};

export default {
  title: "components/contents/FinalSpeakingComponent",
  component: FinalSpeakingComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof FinalSpeakingComponent>;

const Template: ComponentStory<typeof FinalSpeakingComponent> = (args) => {
  return <FinalSpeakingComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as FinalSpeakingContentData,
};
