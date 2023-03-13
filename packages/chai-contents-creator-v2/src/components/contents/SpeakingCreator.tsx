import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlInputWrapper from "../molecules/UrlInputWrapper";

const SpeakingWrapper = styled.div`
  & .time-input-form {
    width: 140px;
    height: 44px;
    padding: 12px 13px;
    box-sizing: border-box;
    margin-right: 4px;
    border-radius: 8px;
    font-size: 12px;
    border: 1px solid #b6b6b6;
    border: 1px solid #b6b6b6;
    &::placeholder {
      color: #b6b6b6;
    }
  }
`;

const SpeakingCreator = () => {
  return (
    <ContentCreatorLayout>
      <SpeakingWrapper>
        <UrlInputWrapper typeText="오디오"></UrlInputWrapper>
        <input
          placeholder="발화 시간(초) 입력"
          className="time-input-form"
        ></input>
      </SpeakingWrapper>
    </ContentCreatorLayout>
  );
};

export default SpeakingCreator;
