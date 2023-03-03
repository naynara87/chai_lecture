import React from "react";
import DictionaryButton from "../atoms/Button/DictionaryButton";
import PlayButtonOnly from "../atoms/Button/PlayButtonOnly";

const ComponentTabContents = () => {
  return (
    <div className="tab-contents-container">
      <div className="tab-title-wrap">
        {/* TODO: key설명 - 현재탭에 active */}
        <div className="tab-title active">{'예문'}</div>
        <div className="tab-title">{'문법사용 TIP!'}</div>
      </div>
      <div className="tab-conts-container">
        <ul className="tab-conts-wrapper">
          {/* 반복영역 */}
          <li className="tab-conts-wrap">
            <div className="text lg">{`我`}<b>{`特别`}</b>{`喜欢唱歌。`}</div>
            <div className="text">{`Wǒ`}<b>{`tèbié`}</b>{`xǐhuan chàng gē.`}</div>
            <div className="text">{`나는 노래 부르는 것을 특히 좋아한다.`}</div>
            <div className="btns-wrap">
              <PlayButtonOnly />
              <DictionaryButton />
            </div>
          </li>
          {/* end 반복영역 */}
          <li className="tab-conts-wrap">
            <div className="text">{`날짜를 말할 때 ‘号 hào’ 대신
‘日 rì’를 쓸 수 있는데, 보통 구어체에서는
‘号 hào’, 문어체에서는 ‘日 rì’를 사용합니다.`}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentTabContents;
