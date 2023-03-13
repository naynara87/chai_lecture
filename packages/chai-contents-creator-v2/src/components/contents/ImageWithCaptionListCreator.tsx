import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ImageIcon from "../../assets/images/icon/icon_image.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";

const ImageListWrapper = styled.ul`
  display: flex;
  gap: 60px;
  .caption-text {
    margin-top: 20px;
    color: #666666;
    font-size: 10px;
    text-align: center;
  }
`;

const ImageList = styled.li``;

const ImageThumb = styled.div`
  width: 200px;
  height: 150px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 10px;
  border-radius: 10px;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
`;

const ImageWithCaptionListCreator = () => {
  return (
    <ContentCreatorLayout>
      <ImageListWrapper>
        <ImageList>
          {/* TODO: default 이미지 노출 이후 이미지 등록하면 변경 */}
          <ImageThumb>
            <img src={ImageIcon} alt="" />
          </ImageThumb>
          <UrlInputWrapper typeText="이미지" />
          {/* TODO: 캡션 입력안하면 없이 노출, 캡션 클릭 후 HTML로 입력하면 입력되어서 노출 */}
          <p className="caption-text">캡션을 달아주세요. (선택사항)</p>
        </ImageList>
      </ImageListWrapper>
    </ContentCreatorLayout>
  );
};

export default ImageWithCaptionListCreator;
