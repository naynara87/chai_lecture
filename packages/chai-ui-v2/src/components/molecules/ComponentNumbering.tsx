import styled from "@emotion/styled";
import React from "react";

const NumberingWrapper = styled.div`
  .text1 {
    /* TODO: key설명 - text2 에 글이 없으면 width: 100% */
    width: 50%;
  }
  
  .text2 {
    /* TODO: key설명 - 글이 없으면 생성되지 않음 */
    width: 50%;
  }
`;

const ComponentNumbering = () => {
  return (
    <NumberingWrapper className="numbering-wrapper">
      <ul className="numbering-list-wrap">
        {/* 반복영역 */}
        <li className="numbering-list">
          <span className="number">{'1'}</span>
          {/* TODO: key설명 - 저작도구에서 text2의 입력이 없어 text2가 생성되지 않고, text1 width: 100% */}
          <div className="text1" style={{width: '100%'}}><p className="chinese">{`我`}<b className="c-red">{`坐`}</b>{`地铁去。`}</p>
          <p className="pinyin">{`Wô zuò dìtiê qù.`}</p></div>
        </li>
        {/* end 반복영역 */}
        <li className="numbering-list">
          {/* TODO: key설명 - 저작도구에서 text2의 입력이 없어 text2가 생성되지 않고, text1 width: 100% */}
          <span className="number">{'2'}</span>
          <div className="text1" style={{width: '100%'}}><b>{`‘会’`}</b>{`는 `}<b>{`‘~할 줄 알다’`}</b>{`라는 뜻으로, 학습이나 연습을 통해 얻게 된 능력을 나타낸다.`}</div>
        </li>
        <li className="numbering-list">
          <span className="number">{'3'}</span>
          <div className="text1"><b>{`我哥哥`}<b className="c-red">{`没有`}</b>{`我高。`}</b></div>
          <div className="text2">{`형은 나보다 키가 크지 않아요.`}</div>
        </li>
      </ul>
    </NumberingWrapper>
  );
};

export default ComponentNumbering;
