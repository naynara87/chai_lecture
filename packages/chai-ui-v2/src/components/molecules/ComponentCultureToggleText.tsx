import styled from "@emotion/styled";
import React from "react";
import { colorPalette, vh, vw } from "../../styles";
import ComponentTitle from "./ComponentTitle";
import ComponentToggle from "./ComponentToggle";

const ToggleTextWrapper = styled.div`
  > *:not(:first-child) {
    margin-top: ${vh(40)};
  }

  .sentence:not(:first-child) {
    margin-top: ${vh(40)};
  }
  
  .chinese {
  font-weight: 500;
  font-size: ${vw(32)};
  line-height: 1.6;
  }

  .text {
    font-size: ${vw(28)};
    line-height: 1.6;
    color: ${colorPalette.gray800};
  }
`;

const ComponentCultureToggleText = () => {
  return (
    <ToggleTextWrapper className="toggle-text-wrapper">
      <ComponentTitle text="중국의 블랙프라이데이 ‘双十一’" />
      <ComponentToggle />
      <ul className="sentence-list-wrap">
        {/* 반복영역 */}
        <li className="sentence">
          <p className="chinese">
            {`11月11日是光棍节，光棍有单身的意思，所以这天是庆祝自己单身生活的娱乐性节日。`}
          </p>
          <p className="pinyin text">
            {`Shíyī yuè shíyī rì shì Guānggùnjié, guānggùn yǒu dānshēn de yìsi, suǒyǐ zhè tiān shì qìngzhù zìjǐ dānshēn shēnghuó de yúlèxìng jiérì.`}
          </p>
          <p className="mean text">
            {`한글뜻이들어갈곳`}
          </p>
        </li>
        {/* end 반복영역 */}
        <li className="sentence">
          <p className="chinese">
            {`但是，现在更多的人把这天叫“双十一”，是中国网络购物节。`}
          </p>
          <p className="pinyin text">
            {`Dànshì, xiànzài gèng duō de rén bǎ zhè tiān jiào "Shuāng shíyī",`}
          </p>
          <p className="mean text">
            {`한글뜻이들어갈곳`}
          </p>
        </li>
      </ul>
    </ToggleTextWrapper>
  );
};

export default ComponentCultureToggleText;
