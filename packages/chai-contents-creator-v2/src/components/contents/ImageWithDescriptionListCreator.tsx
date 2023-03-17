import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ImageIcon from "../../assets/images/icon/icon_image.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";

const ImageListCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImageListWrapper = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  .description-text {
    font-size: 16px;
    width: 280px;
    margin-left: 60px;
    margin-right: 16px;
  }
`;

const ImageList = styled.li`
  display: flex;
`;

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

const ImageWithDescriptionListCreator = () => {
  return (
    <ContentCreatorLayout onDeleteComponent={() => {}}>
      <ImageListCreatorWrapper>
        <AddButton>번호 추가</AddButton>
        <ImageListWrapper>
          {/* TODO: AddButton 클릭 시 ImageList 추가 */}
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
