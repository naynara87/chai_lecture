import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageWithDescriptionListComponent from "../../../components/contents/ImageWithDescriptionListComponent";
import { ImageWithDescriptionListContentData } from "../../../core";

const data: ImageWithDescriptionListContentData = {
  id: "1",
  type: "imageWithDescriptionList",
  data: [
    {
      src: "https://www.openspacevashon.com/wp-content/uploads/2020/02/test.jpg",
      description: "description 들어가는 내용입니다.",
    },
  ],
};

export default {
  title: "components/contents/ImageWithDescriptionListComponent",
  component: ImageWithDescriptionListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ImageWithDescriptionListComponent>;

const Template: ComponentStory<typeof ImageWithDescriptionListComponent> = (
  args,
) => {
  return <ImageWithDescriptionListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ImageWithDescriptionListContentData,
};
