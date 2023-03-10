import styled from "@emotion/styled";
import React from "react";
import { vw } from "chai-ui-v2";
import AddNumberButton from "../atoms/AddNumberButton";

const NumberingTextCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NumberingListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${vw(24)};
`;

const NumberingList = styled.li`
  align-items: center;
  width: 100%;
  display: flex;
  .number {
    position: relative;
    top: unset;
    left: unset;
    margin-right: ${vw(16)};
  }
`;

const TextWrap = styled.div`
  display: flex;
  width: 100%;
  gap: ${vw(16)};
  align-items: center;
  .text1 {
    /* TODO: key설명 - text2 에 글이 없으면 width: 100% */
    width: 50%;
  }

  .text2 {
    /* TODO: key설명 - 글이 없으면 생성되지 않음 */
    width: 50%;
  }
`;

const NumberingTextListCreator = () => {
  return (
    <NumberingTextCreatorWrapper>
      {/* TODO: 객체 추가 버튼 */}
      <AddNumberButton />
      <NumberingListWrapper className="numbering-list">
        <NumberingList>
          <span className="number">1</span>
          {/* TODO: 각각 기본 텍스트 노출 이후 클릭시 HtmlCreator */}
          <TextWrap>
            <div className="text1">내용 1을 입력해주세요.</div>
            <div className="text2">내용 2을 입력해주세요.(선택)</div>
          </TextWrap>
          {/* TODO: 객체 삭제 버튼 */}
          <button></button>
        </NumberingList>
      </NumberingListWrapper>
    </NumberingTextCreatorWrapper>
  );
};

export default NumberingTextListCreator;
