import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ImageIcon from "../../assets/images/icon/icon_image.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import { vw, colorPalette } from "chai-ui-v2";

const ImageListWrapper = styled.ul`
  display: flex;
  gap: ${vw(60)};
  .caption-text {
    margin-top: ${vw(20)};
    color: ${colorPalette.gray800};
    font-size: ${vw(10)};
    text-align: center;
  }
`;

const ImageList = styled.li``;

const ImageThumb = styled.div`
  width: ${vw(200)};
  height: ${vw(150)};
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: ${vw(10)};
  border-radius: ${vw(10)};
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${vw(60)};
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
