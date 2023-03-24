import UrlInputWrapper from "../molecules/UrlInputWrapper";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import Button from "../atoms/Button";
import AddButton from "../atoms/AddButton";
import ImageProfile from "../../assets/images/img/temp_profile01.png";
import styled from "@emotion/styled";

import NotCheckedIcon from "../../assets/images/icon/icon_notChecked.svg";
import CheckedIcon from "../../assets/images/icon/icon_checked.svg";

const LayerEditButtonWrapper = styled.div`
  margin-bottom: 8px;
`;
const AddButtonWrapper = styled.div`
  & button:not(:last-child) {
    margin-right: 8px;
  }
`;

const CharactersEditWrapper = styled.div``;

const ProfileEditWrapper = styled.div`
  display: flex;
  align-items: center;
  & .ProfileWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 24px;
    & img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
      margin-bottom: 8px;
    }
    & p {
      font-size: 12px;
      line-height: 12px;
      color: #666666;
      font-weight: 400;
    }
  }
`;

const QuestionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const QuestionTextBox = styled.p`
  padding: 13px 24px;
  color: #666666;
  background-color: #f5f5f5;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 8px;
  border: 1px solid #c9c9c9;
  margin-bottom: 10px;
`;

const QuestionButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  & > img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  cursor: pointer;
`;

const CharacterSentenceListCreator = () => {
  return (
    <div>
      <LayerEditButtonWrapper>
        <Button>정답 레이어 수정</Button>
        <Button>오답 레이어 수정</Button>
      </LayerEditButtonWrapper>
      <AddButtonWrapper>
        <AddButton>문항 추가</AddButton>
        <AddButton>회차 추가</AddButton>
      </AddButtonWrapper>
      {/* TODO: lsh 화자추가 버튼 클릭시 CharactersWrapper 추가 */}
      <CharactersEditWrapper>
        <ProfileEditWrapper>
          <div className="ProfileWrapper">
            <img src={ImageProfile} alt="" />
            {/* TODO: lsh 텍스트에디터 */}
            <p>왕리리</p>
          </div>
          <UrlInputWrapper typeText="이미지" />
        </ProfileEditWrapper>
        {/* TODO: lsh 문항추가 버튼 클릭시 QuestionListWrapper 추가 */}
        <QuestionListWrapper>
          <QuestionWrapper>
            <QuestionTextBox>텍스트 에디터 들어올자리</QuestionTextBox>
            <QuestionButtonWrapper>
              {/* TODO: lsh 문제버튼 클릭 시 img src CheckedIcon으로 변경 / 우측영역에 해당 QuestionTextBox 내용 노출 */}
              <CheckBox>
                <img src={CheckedIcon} alt="" />
                <p>문제</p>
              </CheckBox>
              {/* TODO: lsh 삭제버튼 클릭 시 문항 제거 */}
              <ObjectDeleteButton />
            </QuestionButtonWrapper>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTextBox>텍스트 에디터 들어올자리</QuestionTextBox>
            <QuestionButtonWrapper>
              {/* TODO: lsh 문제버튼 클릭 시 img src CheckedIcon으로 변경 / 우측영역에 해당 QuestionTextBox 내용 노출 */}
              <CheckBox>
                <img src={NotCheckedIcon} alt="" />
                <p>문제</p>
              </CheckBox>
              {/* TODO: lsh 삭제버튼 클릭 시 문항 제거 */}
              <ObjectDeleteButton />
            </QuestionButtonWrapper>
          </QuestionWrapper>
        </QuestionListWrapper>
      </CharactersEditWrapper>
    </div>
  );
};

export default CharacterSentenceListCreator;
