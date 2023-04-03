import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ImageIcon from "../../assets/images/icon/icon_image.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import { DraggableContentCommonProps } from "../../types/page";
import {
  ComponentImage,
  ImageWithDescriptionListContentData,
  vh,
  vw,
} from "chai-ui-v2";

import TextEditorViewer from "../molecules/TextEditorViewer";
import { useCallback, useEffect, useState } from "react";

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
  
  img {
    width: ${vw(400)};
    max-height: ${vh(337)};
    object-fit: contain;
  }
`;

const ImageThumb = styled.div`
  width: 200px;
  height: 150px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 10px;
  border-radius: 10px;
  img {
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
  copyContent,
  pasteContent,
  deleteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as ImageWithDescriptionListContentData;
  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();

  const focusTextEditor = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      setFocusedId(e, content.id);
      setFocusedTextEditorIndex(index);
    },
    [setFocusedId, content.id],
  );

  const resetFocusedTextEditor = useCallback(() => {
    setFocusedTextEditorIndex(undefined);
  }, []);

  const isTextEditorFocused = useCallback(
    (index: number) => {
      return isFocused && focusedTextEditorIndex === index;
    },
    [isFocused, focusedTextEditorIndex],
  );

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = (index: number) => (text: string) => {
    const newContent = {
      ...thisContent,
      data: thisContent.data.map((data, dataIndex) => {
        if (dataIndex === index) {
          return {
            ...data,
            description: text,
          };
        }
        return data;
      }),
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  /**
   * 내용 추가
   */
  const addImage = () => {
    // 최대 2개 까지
    const newContent = {
      ...thisContent,
      data: [
        ...thisContent.data,
        {
          src: "",
          description: "",
        },
      ],
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  const deleteImage = (index: number) => {
    if (thisContent.data.length === 1) {
      return;
    }
    const newContent = {
      ...thisContent,
      data: thisContent.data.filter((_, dataIndex) => dataIndex !== index),
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  const getThisContentImageSrc = useCallback(
    (index: number) => {
      return thisContent.data?.[index]?.src ?? "";
    },
    [thisContent.data],
  );

  const setImageUrl = (index: number) => (src: string) => {
    const newContent = {
      ...thisContent,
      data: thisContent.data.map((data, dataIndex) => {
        if (dataIndex === index) {
          return {
            ...data,
            src,
          };
        }
        return data;
      }),
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  useEffect(() => {
    window.addEventListener("click", resetFocusedTextEditor);
    return () => {
      window.removeEventListener("click", resetFocusedTextEditor);
    };
  }, [resetFocusedTextEditor]);

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      align="center"
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <ImageListCreatorWrapper>
        <AddButton onClick={addImage}>이미지 추가</AddButton>
        <ImageListWrapper>
          {thisContent.data.map((item, index) => {
            return (
              <ImageList>
                <div>
                  {item.src ? (
                    <ComponentImage imageUrl={getThisContentImageSrc(index)} />
                  ) : (
                    <ImageThumb>
                      <img src={ImageIcon} alt="" />
                    </ImageThumb>
                  )}
                  <UrlInputWrapper
                    typeText="이미지"
                    onSubmit={setImageUrl(index)}
                    defaultText={thisContent.data[index].src}
                  />
                </div>
                <p
                  className="description-text"
                  onClick={focusTextEditor(index)}
                >
                  <TextEditorViewer
                    isFocused={isTextEditorFocused(index)}
                    setText={setText(index)}
                    text={thisContent.data?.[index].description ?? ""}
                    defaultText={
                      <p className="caption-text">설명을 입력해주세요.</p>
                    }
                  />
                </p>
                {thisContent.data.length > 1 && (
                  <ObjectDeleteButton onClick={() => deleteImage(index)} />
                )}
              </ImageList>
            );
          })}
        </ImageListWrapper>
      </ImageListCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default ImageWithDescriptionListCreator;
