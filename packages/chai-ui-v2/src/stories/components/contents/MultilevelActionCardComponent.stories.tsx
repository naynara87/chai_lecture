import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MultilevelActionCardComponent from "../../../components/contents/MultilevelActionCardComponent";
import { MultilevelActionCardContentData } from "../../../core";

const data: MultilevelActionCardContentData = {
  id: "1",
  type: "multiLevelActionCard",
  data: [
    [
      {
        id: "33616",
        type: "text",
        data: {
          text: "1번 배열 text",
        },
      },
    ],
    [
      {
        id: "34637878",
        type: "text",
        data: {
          text: "2번 배열 text",
        },
      },
    ],
  ],
};

export default {
  title: "components/contents/MultilevelActionCardComponent",
  component: MultilevelActionCardComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof MultilevelActionCardComponent>;

const Template: ComponentStory<typeof MultilevelActionCardComponent> = (
  args,
) => {
  return <MultilevelActionCardComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as MultilevelActionCardContentData,
};
