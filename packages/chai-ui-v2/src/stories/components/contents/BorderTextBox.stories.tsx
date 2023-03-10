import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BorderTextBoxComponent from "../../../components/contents/BorderTextBoxComponent";
import { BorderTextBoxContentData } from "../../../core";

const data: BorderTextBoxContentData = {
  id: "1",
  type: "borderTextBox",
  data: {
    text: "<p>border로 감싸진 텍스트 박스 컴포넌트 입니다.</p>",
  },
};

export default {
  title: "components/contents/BorderTextBoxComponent",
  component: BorderTextBoxComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof BorderTextBoxComponent>;

const Template: ComponentStory<typeof BorderTextBoxComponent> = (args) => {
  return <BorderTextBoxComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as BorderTextBoxContentData,
};
