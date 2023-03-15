import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NumberingTextListComponent from "../../../components/contents/NumberingTextListComponent";
import { NumberingTextListContentData } from "../../../core";

const data: NumberingTextListContentData = {
  id: "1",
  type: "numberingTextList",
  data: [
    {
      firstText: "넘버링 테스트 텍스트1",
      secondText: "넘버링 테스트 텍스트1-2",
    },
  ],
};

export default {
  title: "components/contents/NumberingTextListComponent",
  component: NumberingTextListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof NumberingTextListComponent>;

const Template: ComponentStory<typeof NumberingTextListComponent> = (args) => {
  return <NumberingTextListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as NumberingTextListContentData,
};
