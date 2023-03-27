import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RolePlayingComponent from "../../../components/contents/RolePlayingComponent";
import { RoleplayingContentData } from "../../../core";

const data: RoleplayingContentData = {
  id: "1",
  type: "roleplaying",
  data: [
    {
      id: 0,
      characterId: "0",
      character: {
        name: "김민호",
        src: "",
      },
      audio: {
        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
      },
      text: "你好，你是张明吗？",
      pronunciation: "Nî hâo, nî shì Zhãng Míng ma?",
      meaning: "안녕",
      position: "left",
    },
    {
      id: 0,
      characterId: "1",
      character: {
        name: "김민호",
        src: "",
      },
      audio: {
        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
      },
      text: "没想到在路上遇见你。",
      pronunciation: "Méi xiângdào zài lùshang yùjiàn nî.",
      meaning: "반가워",
      position: "left",
    },
    {
      id: 1,
      characterId: "2",
      character: {
        name: "장밍",
        src: "",
      },
      audio: {
        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
      },
      text: "중국어중국어",
      pronunciation: "Méi cuò, hâojiû bújiàn!",
      meaning: "맞아, 오랜만이야!",
      position: "right",
    },
    {
      id: 1,
      characterId: "3",
      character: {
        name: "장밍",
        src: "",
      },
      audio: {
        src: "https://cdn.pixabay.com/audio/2021/10/08/audio_746d064ad0.mp3",
      },
      text: "중국어중국어",
      pronunciation: "Méi cuò, hâojiû bújiàn!",
      meaning: "너는 예전과 같이 멋있구나, 조금도 변하지 않았어.",
      position: "right",
    },
    {
      id: 2,
      characterId: "4",
      character: {
        name: "민호 엄마",
        src: "",
      },
      audio: {
        src: "https://cdn.pixabay.com/audio/2022/11/17/audio_7064c14095.mp3",
      },
      text: "你好！见到你很高兴！",
      pronunciation: "Nî hâo! Jiàndào nî hên gãoxìng!",
      meaning: "한국어한국어",
      position: "left",
    },
  ],
};

export default {
  title: "components/contents/RolePlayingComponent",
  component: RolePlayingComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof RolePlayingComponent>;

const Template: ComponentStory<typeof RolePlayingComponent> = (args) => {
  return <RolePlayingComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as RoleplayingContentData,
};
