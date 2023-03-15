import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExplainingCharacterComponent from "../../../components/contents/ExplainingCharacterComponent";
import { ExplainingCharacterContentData } from "../../../core";

const data: ExplainingCharacterContentData = {
  id: "1",
  type: "explainingCharacter",
  data: {
    text: "이번 패턴은 어떻게 사용하는지 알아볼까요?",
    explain:
      "’坐 zuò’는 ‘앉다’라는 뜻으로, 교통수단과 함께 쓰면 ‘타다’라는 뜻을 나타냅니다. ‘坐 zuò’는 좌석에 앉아 가는 교통수단에 사용합니다.",
    character: {
      src: "string",
    },
  },
};

export default {
  title: "components/contents/ExplainingCharacterComponent",
  component: ExplainingCharacterComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ExplainingCharacterComponent>;

const Template: ComponentStory<typeof ExplainingCharacterComponent> = (
  args,
) => {
  return <ExplainingCharacterComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ExplainingCharacterContentData,
};
