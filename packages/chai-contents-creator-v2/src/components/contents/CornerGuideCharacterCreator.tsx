import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import iconTail from "chai-ui-v2/dist/assets/images/icon/icon_contsinfo_tail.svg";
import ImageThumb from "../atoms/ImageThumb";

const CornerGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBubbleWrap = styled.div`
  position: relative;
  padding: 24px 40px;
  border-radius: 50px;
  background-color: #eff1f5;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin-bottom: 53px;

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

const CornerGuideCharacterCreator = () => {
  return (
    <ContentCreatorLayout onDeleteComponent={() => {}}>
      <CornerGuideWrapper>
        <TextBubbleWrap>텍스트를 입력해주세요.</TextBubbleWrap>
        <ImageThumb />
        <UrlInputWrapper typeText="이미지"></UrlInputWrapper>
      </CornerGuideWrapper>
    </ContentCreatorLayout>
  );
};

export default CornerGuideCharacterCreator;
