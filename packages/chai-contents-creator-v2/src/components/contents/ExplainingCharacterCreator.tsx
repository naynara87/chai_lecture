import styled from "@emotion/styled";
import ImageThumb from "../atoms/ImageThumb";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import iconTail from "chai-ui-v2/dist/assets/images/icon/icon_bubble_tail.svg";

const ExplainingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .url-wrapper {
    margin-top: unset;
  }
`;
const ExplainingTextWrapper = styled.div`
  display: flex;
  & > img {
    width: 120px;
    height: 120px;
    background-size: 36px 36px;
    margin-right: 28px;
  }
`;

const ExplainingTextListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ExplainingText = styled.div`
  position: relative;
  padding: 16px 30px;
  border-radius: 60px;
  background-color: #eff1f5;
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  width: 600px;
  &::before {
    content: "";
    background-image: url("${iconTail}");
    background-size: 100% 100%;
    background-position: left center;
    position: absolute;
    top: 50%;
    left: -12px;
    width: 23px;
    height: 24px;
    transform: translateY(-50%);
  }
`;

const ExplainingCharacterCreator = () => {
  return (
    <ContentCreatorLayout onDeleteComponent={() => {}}>
      <ExplainingWrapper>
        <UrlInputWrapper typeText="이미지"></UrlInputWrapper>
        <ExplainingTextWrapper>
          <ImageThumb />
          <ExplainingTextListWrapper>
            {/* TODO: first-content내용만 노출하다가 '확인'버튼 클릭하면 second-content 내용으로 변경 */}
            <ExplainingText className="first-content">
              처음 노출될 내용을 입력해주세요.
            </ExplainingText>
            <ExplainingText className="second-content">
              확인 클릭 후 노출될 내용을 입력해주세요.
            </ExplainingText>
          </ExplainingTextListWrapper>
        </ExplainingTextWrapper>
      </ExplainingWrapper>
    </ContentCreatorLayout>
  );
};

export default ExplainingCharacterCreator;
