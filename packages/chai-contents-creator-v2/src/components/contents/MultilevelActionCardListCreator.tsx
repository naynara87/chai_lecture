import styled from "@emotion/styled";
import AddButton from "../atoms/AddButton";
import CheckBoxWrapper from "../molecules/CheckBoxWrapper";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AudioCreator from "./AudioCreator";

const MultilevelActionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MultilevelActionCardList = styled.div`
  display: flex;
  gap: 16px;
`;
const MultilevelActionCard = styled.div`
  display: flex;
  width: 300px;
  min-height: 134px;
  flex-direction: column;
  padding: 8px;
  padding-bottom: 16px;
  border: 3px solid #d6e9ff;
  border-radius: 16px;
  &.important-card {
    background: linear-gradient(0deg, #e3e8ff, #e9faff);
  }
`;
const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  & .btn-text {
    width: 90px;
    height: 35px;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: 500;
    white-space: nowrap;
    margin-bottom: unset;
  }
`;

const MultilevelActionCardListCreator = () => {
  return (
    <ContentCreatorLayout>
      <MultilevelActionCardWrapper>
        <AddButton>카드 추가</AddButton>
        <MultilevelActionCardList>
          <MultilevelActionCard className="important-card">
            <TopArea>
              {/* TODO: 중요카드 체크시 MultilevelActionCard에 important-card 클래스 생성 */}
              <CheckBoxWrapper>중요 카드</CheckBoxWrapper>
              <AddButton>컴포넌트 선택</AddButton>
            </TopArea>
            {/* TODO: 컴포넌트 선택 하면 이곳에 선택된 컴포넌트들이 순차적으로 추가 */}
          </MultilevelActionCard>
          <MultilevelActionCard>
            <TopArea>
              {/* TODO: 중요카드 체크시 MultilevelActionCard에 important-card 클래스 생성 */}
              <CheckBoxWrapper>중요 카드</CheckBoxWrapper>
              <AddButton>컴포넌트 선택</AddButton>
            </TopArea>
            {/* TODO: 컴포넌트 선택 하면 이곳에 선택된 컴포넌트들이 순차적으로 추가 */}
            <AudioCreator />
          </MultilevelActionCard>
        </MultilevelActionCardList>
      </MultilevelActionCardWrapper>
    </ContentCreatorLayout>
  );
};

export default MultilevelActionCardListCreator;
