import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ImageIcon from "../../assets/images/icon/icon_image.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import { vw } from "chai-ui-v2";
import AddNumberButton from "../atoms/AddNumberButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";

const ImageListCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImageListWrapper = styled.ul`
  display: flex;
  gap: ${vw(16)};
  flex-direction: column;
  .description-text {
    font-size: ${vw(16)};
    width: ${vw(280)};
    margin-left: ${vw(60)};
    margin-right: ${vw(16)};
  }
`;

const ImageList = styled.li`
  display: flex;
`;

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

const ImageWithDescriptionListCreator = () => {
  return (
    <ContentCreatorLayout>
      <ImageListCreatorWrapper>
        <AddNumberButton>번호 추가</AddNumberButton>
        <ImageListWrapper>
          {/* TODO: AddNumberButton 클릭 시 ImageList 추가 */}
          <ImageList>
            {/* TODO: default 이미지 노출 이후 이미지 등록하면 변경 */}
            <div>
              <ImageThumb>
                <img src={ImageIcon} alt="" />
              </ImageThumb>
              <UrlInputWrapper typeText="이미지" />
            </div>
            {/* TODO: 캡션 입력안하면 없이 노출, 캡션 클릭 후 HTML로 입력하면 입력되어서 노출 */}
            <p className="description-text">
              베이징 오리구이는 원래 '난징(난징) 오리구이' 였다고 합니다.
            </p>
            {/* TODO: ObjectDeleteButton 클릭 시 해당 ImageList 제거 */}
            <ObjectDeleteButton />
          </ImageList>
        </ImageListWrapper>
      </ImageListCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default ImageWithDescriptionListCreator;
