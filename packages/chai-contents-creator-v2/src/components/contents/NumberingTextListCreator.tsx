import styled from "@emotion/styled";
import AddNumberButton from "../atoms/AddNumberButton";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";

const NumberingTextCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const NumberingListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

const NumberingList = styled.li`
  align-items: flex-start;
  width: 100%;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  .number {
    position: relative;
    top: unset;
    left: unset;
    margin-right: 16px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
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
    <ContentCreatorLayout>
      <NumberingTextCreatorWrapper>
        {/* TODO: 객체 추가 버튼 */}
        <AddNumberButton>번호 추가</AddNumberButton>
        <NumberingListWrapper>
          {/* TODO: 객체 추가 버튼 누르면 NumberingList가 추가 */}
          <NumberingList className="numbering-list">
            <span className="number">1</span>
            {/* TODO: 각각 기본 텍스트 노출 이후 클릭시 HtmlCreator */}
            <TextWrap>
              <div className="text1">내용 1을 입력해주세요.</div>
              <div className="text2">
                내용 2을 입력해주세요.(선택)
                <br />
                가운데
                <br />
                마지막줄
              </div>
            </TextWrap>
            {/* TODO: 객체 삭제 버튼 */}
            <ObjectDeleteButton />
          </NumberingList>
          <NumberingList className="numbering-list">
            <span className="number">2</span>
            {/* TODO: 각각 기본 텍스트 노출 이후 클릭시 HtmlCreator */}
            <TextWrap>
              <div className="text1">내용 2을 입력해주세요.</div>
              <div className="text2">
                내용 2을 입력해주세요.(선택)
                <br />
                가운데
                <br />
                마지막줄
              </div>
            </TextWrap>
            {/* TODO: 객체 삭제 버튼 */}
            <ObjectDeleteButton />
          </NumberingList>
        </NumberingListWrapper>
      </NumberingTextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default NumberingTextListCreator;
