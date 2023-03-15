import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleSentenceListComponent from "../../../components/contents/ToggleSentenceListComponent";
import { ToggleSentenceListContentData } from "../../../core";

const data: ToggleSentenceListContentData = {
  id: "1",
  type: "toggleSentenceList",
  data: [
    {
      text: "11月11日是光棍节，光棍有单身的意思，所以这天是庆祝自己单身生活的娱乐性节日。",
      pronunciation:
        "Shíyī yuè shíyī rì shì Guānggùnjié, guānggùn yǒu dānshēn de yìsi, suǒyǐ zhè tiān shì qìngzhù zìjǐ dānshēn shēnghuó de yúlèxìng jiérì.",
      meaning: "안녕",
    },
    {
      text: "但是，现在更多的人把这天叫“双十一”，是中国网络购物节。",
      pronunciation:
        "Dànshì, xiànzài gèng duō de rén bǎ zhè tiān jiào 'Shuāng shíyī',",
      meaning: "그래",
    },
  ],
};

export default {
  title: "components/contents/ToggleSentenceListComponent",
  component: ToggleSentenceListComponent,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ToggleSentenceListComponent>;

const Template: ComponentStory<typeof ToggleSentenceListComponent> = (args) => {
  return <ToggleSentenceListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: {
    ...data,
  } as ToggleSentenceListContentData,
};
