import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextContentComponent from "../../../components/contents/TextContentComponent";
import { TextContentData } from "../../../core";

const data: TextContentData = {
  id: "1",
  type: "text",
  data: {
    text: "텍스트 컴포넌트 입니다.",
  },
};

export default {
  title: "components/contents/TextContentComponent",
  component: TextContentComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof TextContentComponent>;

const Template: ComponentStory<typeof TextContentComponent> = (args) => {
  return <TextContentComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as TextContentData,
};
