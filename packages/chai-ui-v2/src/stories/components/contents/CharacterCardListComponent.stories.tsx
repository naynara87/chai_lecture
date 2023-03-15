import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CharacterCardListComponent from "../../../components/contents/CharacterCardListComponent";
import { CharacterCardListContentData } from "../../../core/types/contents";

const data: CharacterCardListContentData = {
  id: "1",
  type: "characterCardList",
  data: [
    {
      title: "패턴 중국어",
      description: "好 hǎo 인사하기",
      character: {
        src: "",
      },
      modalContents: [
        {
          id: "123",
          type: "text",
          data: {
            text: "테스트 텍스트1-1",
          },
        },
        {
          id: "456",
          type: "iconText",
          data: {
            text: "테스트 텍스트1-2",
          },
        },
        {
          id: "789",
          type: "numberingTextList",
          data: [
            {
              firstText: "넘버링 테스트 텍스트1",
              secondText: "넘버링 테스트 텍스트1-2",
            },
          ],
        },
      ],
    },
    {
      title: "회화",
      description: "만남의 인사하기",
      character: {
        src: "",
      },
      modalContents: [
        {
          id: "24524",
          type: "text",
          data: {
            text: "테스트 텍스트2-1",
          },
        },
        {
          id: "46778",
          type: "iconText",
          data: {
            text: "테스트 텍스트2-2",
          },
        },
      ],
    },
  ],
};

export default {
  title: "components/contents/CharacterCardListComponent",
  component: CharacterCardListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof CharacterCardListComponent>;

const Template: ComponentStory<typeof CharacterCardListComponent> = (args) => {
  return <CharacterCardListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as CharacterCardListContentData,
};
