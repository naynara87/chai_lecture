import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CornerGuideCharacterComponent from "../../../components/contents/CornerGuideCharacterComponent";
import { CornerGuideCharacterContentData } from "../../../core";

const data: CornerGuideCharacterContentData = {
  id: "1",
  type: "cornerGuideCharacter",
  data: {
    text: "CornerGuideCharacter을 Storybook에서",
    character: {
      src: "asdf",
    },
  },
};

export default {
  title: "components/contents/CornerGuideCharacterComponent",
  component: CornerGuideCharacterComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof CornerGuideCharacterComponent>;

const Template: ComponentStory<typeof CornerGuideCharacterComponent> = (
  args,
) => {
  return <CornerGuideCharacterComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as CornerGuideCharacterContentData,
};
