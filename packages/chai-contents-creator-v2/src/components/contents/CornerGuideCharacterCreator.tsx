import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import iconPlay from "chai-ui-v2/dist/assets/images/icon/icon_contsinfo_tail.svg";
import ImageIcon from "../../assets/images/icon/icon_image.svg";

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
    background-image: url("${iconPlay}");
    background-size: 100% 100%;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 38px;
    height: 37px;
    transform: translateX(-50%);
  }
`;

const ImageThumb = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 16px;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
`;

const CornerGuideCharacterCreator = () => {
  return (
    <ContentCreatorLayout>
      <CornerGuideWrapper>
        <TextBubbleWrap>텍스트를 입력해주세요.</TextBubbleWrap>
        <ImageThumb>
          <img src={ImageIcon} alt="" />
        </ImageThumb>
        <UrlInputWrapper typeText="이미지"></UrlInputWrapper>
      </CornerGuideWrapper>
    </ContentCreatorLayout>
  );
};

export default CornerGuideCharacterCreator;
