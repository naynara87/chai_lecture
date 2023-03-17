import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import iconTail from "chai-ui-v2/dist/assets/images/icon/icon_contsinfo_tail.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import ImageThumb from "../atoms/ImageThumb";

const CornerGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 120px;
    height: 120px;
    background-size: 36px 36px;
  }
`;

const TextBubbleWrap = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  background-color: #eff1f5;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  margin-bottom: 46px;

  &::after {
    content: "";
    background-image: url("${iconTail}");
    background-size: 100% 100%;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 38px;
    height: 37px;
    transform: translateX(-50%);
  }
`;

const ActivityGuideCharacterCreator = () => {
  return (
    <ContentCreatorLayout
      onDeleteComponent={() => {
        // TODO: 컴포넌트 구현 시 전달
      }}
    >
      <CornerGuideWrapper>
        <TextBubbleWrap>텍스트를 입력해주세요.</TextBubbleWrap>
        <ImageThumb />
        <UrlInputWrapper typeText="이미지"></UrlInputWrapper>
      </CornerGuideWrapper>
    </ContentCreatorLayout>
  );
};

export default ActivityGuideCharacterCreator;
