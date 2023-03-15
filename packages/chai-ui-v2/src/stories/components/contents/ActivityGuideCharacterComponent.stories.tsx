import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ActivityGuideCharacterComponent from "../../../components/contents/ActivityGuideCharacterComponent";
import { ActivityGuideCharacterContentData } from "../../../core/types/contents";

const data: ActivityGuideCharacterContentData = {
  id: "1",
  type: "activityGuideCharacter",
  data: {
    text: "Storybook으로 확인하는 ActivityGuideCharacterComponent 입니다",
    character: {
      src: "abcd",
    },
  },
};

export default {
  title: "components/contents/ActivityGuideCharacterComponent",
  component: ActivityGuideCharacterComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ActivityGuideCharacterComponent>;

const Template: ComponentStory<typeof ActivityGuideCharacterComponent> = (
  args,
) => {
  return <ActivityGuideCharacterComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ActivityGuideCharacterContentData,
};
