import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconTextComponent from "../../../components/contents/IconTextComponent";
import { IconTextContentData } from "../../../core";

const data: IconTextContentData = {
  id: "1",
  type: "iconText",
  data: {
    text: "테스트 텍스트1-2",
  },
};

export default {
  title: "components/contents/IconTextComponent",
  component: IconTextComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof IconTextComponent>;

const Template: ComponentStory<typeof IconTextComponent> = (args) => {
  return <IconTextComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as IconTextContentData,
};
