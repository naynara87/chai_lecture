import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ChooseText from "../../../components/contents/ChooseText";
// import { ChooseTextContent } from "../../../types/templateContents";

export default {
  title: "components/contents/ChooseText",
  component: ChooseText,
  argTypes: {
    contentData: {
      defaultValue: {
        type: "chooseText",
        data: [
          {
            choices: ["choice1", "choice2", "choice3"],
            answerIndex: 0,
            tip: "이 문제의 팁은 ... 입니다. 보기는 랜덤으로 배치됩니다.",
            explanation: {
              correctMessage: "정답입니다!",
              wrongMessage: "오답입니다!",
              text: "<p>이 문제의 해설은 ... 입니다.<br />정답은 choice1 입니다.</p>",
            },
          },
        ],
      },
    },
  },
} as ComponentMeta<typeof ChooseText>;

const Template: ComponentStory<typeof ChooseText> = (args) => (
  <ChooseText {...args} />
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  isVertical: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  isVertical: true,
};
