import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ImageIcon from "../../assets/images/icon/icon_image.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import { DraggableContentCommonProps } from "../../types/page";
import { ComponentImage, ImageWithDescriptionListContentData } from "chai-ui-v2";
import TextEditorViewer from "../molecules/TextEditorViewer";
import { imageWithDescriptionDefaultData } from "../../data/appData";

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

const ImageWithDescriptionListCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as ImageWithDescriptionListContentData;

  const updateImageWithDescriptionData = (
    imageWithDescriptionListData: ImageWithDescriptionListContentData["data"],
  ) => {
    updateContent(
      currentSlide.id,
      content.id,
      position,
      getCurrentContent(imageWithDescriptionListData),
    ); // total content 업데이트
  };

  const getCurrentContent = (
    imageWithDescriptionListData: ImageWithDescriptionListContentData["data"],
  ): ImageWithDescriptionListContentData => {
    return {
      ...thisContent,
      data: imageWithDescriptionListData,
    };
  };

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = (
    rowIndex: number,
    text: string,
  ) => {
    const updatedData = thisContent.data.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...item,
          "description": text,
        };
      }
      return item;
    });
    updateImageWithDescriptionData(updatedData);
  };

  /**
   * 현재 선택 영역 텍스트 가져오기
   */
    const getText = (
      rowIndex: number,
    ) => {
      return thisContent.data[rowIndex].description ?? "";
    };
  
    const handleSubmitUrl = (url: string, index?:number) => {
      const updatedData = thisContent.data.map((item, contentIndex) => {
        if (index === contentIndex) {
          return {
            ...item,
            "src": url,
          };
        }
        return item;
      });
      updateImageWithDescriptionData(updatedData);
    };
  
  /**
   * 내용 추가
   */
  const addImageWithDescriptionItem = () => {
    const addedNewData = [...thisContent.data, { ...imageWithDescriptionDefaultData }];
    updateImageWithDescriptionData(addedNewData);
  };

  const deleteCurrentNumberingTextItem = (index: number) => {
    const updatedData = thisContent.data.filter((_, i) => i !== index);
    updateImageWithDescriptionData(updatedData);
  };

  return (
    <ContentCreatorLayout
      draggableProvided={draggableProvided}
      isDraggable={isDraggable}
    >
      <ImageListCreatorWrapper>
        <AddButton onClick={addImageWithDescriptionItem}>내용 추가</AddButton>
        <ImageListWrapper>
          {/* TODO: AddButton 클릭 시 ImageList 추가 */}
          {thisContent.data.map((item, index) => {
            return (
              <ImageList>
                {/* TODO: default 이미지 노출 이후 이미지 등록하면 변경 */}
                <div>
                  {item.src ? <ComponentImage imageUrl={item.src} /> :
                  <ImageThumb>
                    <img src={ImageIcon} alt="" />
                  </ImageThumb>
                  }
                  <UrlInputWrapper typeText="이미지" onSubmit={handleSubmitUrl} index={index}/>
                </div>
                {/* TODO: 캡션 입력안하면 없이 노출, 캡션 클릭 후 HTML로 입력하면 입력되어서 노출 */}
                <p className="description-text" onClick={(e) => setFocusedId(e, content.id)}>
                  <TextEditorViewer isFocused={isFocused} setText={(text) => setText(index, text)} text={getText(index)}/>
                </p>
                {/* TODO: ObjectDeleteButton 클릭 시 해당 ImageList 제거 */}
                <ObjectDeleteButton onClick={() => deleteCurrentNumberingTextItem(index)} />
              </ImageList>
            );
          })}
        </ImageListWrapper>
      </ImageListCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default ImageWithDescriptionListCreator;
