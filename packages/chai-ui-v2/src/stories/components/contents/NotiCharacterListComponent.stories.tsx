import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NotiCharacterListComponent from "../../../components/contents/NotiCharacterListComponent";
import { NotiCharacterListContentData } from "../../../core";

const data: NotiCharacterListContentData = {
  id: "1",
  type: "notiCharacterList",
  data: [
    {
      text: "첫번째 영역",
      character: {
        src: "왕리리",
      },
    },
    {
      text: "두번째 영역 긴 텍스트로 작성하면 줄바꿈이 생깁니다.",
      character: {
        src: "kkungiHandsup",
      },
    },
    {
      text: "세번째 영역",
      character: {
        src: "asdfasdf",
      },
    },
    {
      text: "네번째 영역 정해진 사이즈 내에서 최대 갯수",
      character: {
        src: "",
      },
    },
  ],
};

export default {
  title: "components/contents/NotiCharacterListComponent",
  component: NotiCharacterListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof NotiCharacterListComponent>;

const Template: ComponentStory<typeof NotiCharacterListComponent> = (args) => {
  return <NotiCharacterListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as NotiCharacterListContentData,
};
