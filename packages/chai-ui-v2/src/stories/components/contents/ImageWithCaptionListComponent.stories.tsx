import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageWithCaptionListComponent from "../../../components/contents/ImageWithCaptionListComponent";
import { ImageWithCaptionListContentData } from "../../../core";

const data: ImageWithCaptionListContentData = {
  id: "1",
  type: "imageWithCaptionList",
  data: [
    {
      src: "https://www.openspacevashon.com/wp-content/uploads/2020/02/test.jpg",
      caption: "caption에 들어가는 내용입니다.",
    },
  ],
};

export default {
  title: "components/contents/ImageWithCaptionListComponent",
  component: ImageWithCaptionListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ImageWithCaptionListComponent>;

const Template: ComponentStory<typeof ImageWithCaptionListComponent> = (
  args,
) => {
  return <ImageWithCaptionListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ImageWithCaptionListContentData,
};
