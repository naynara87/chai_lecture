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
  useToast,
  vw,
} from "chai-ui-v2";
import TextEditorViewer from "../molecules/TextEditorViewer";
import { useCallback, useEffect, useState } from "react";
import useSafeKey from "../../hooks/useSafeKey";

const ImageListCreatorWrapper = styled.div``;

const ImageListWrapper = styled.ul`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  .description-text {
    flex-basis: 60%;
    flex-grow: 0;
    flex-shrink: 0;
    padding-left: 20px;
    font-size: 16px;

    p,
    div,
    span {
      word-break: break-all;
    }
  }

  .image-wrap {
    flex-basis: 40%;
    flex-grow: 0;
    flex-shrink: 0;
    img {
      width: ${vw(360)};
      height: ${vw(220)};
      border-radius: ${vw(10)};
      object-fit: cover;
    }
  }

  .img-empty-wrap {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60px;
      object-fit: contain;
      transform: translate(-50%, -50%);
    }
  }
`;

const DeleteButtonWrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
`;

const ImageList = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  position: relative;
`;

const ImageThumb = styled.div`
  width: 200px;
  height: 150px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 10px;
  border-radius: 10px;
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

  const { addKeyByArrayLength, deleteKeyByIndex, getKeyByIndex } = useSafeKey(
    thisContent.data,
  );
  const { addToast } = useToast();

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
      addToast("최소 1개이상 입력하셔야 합니다.", "info");
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
        <AddButton
          onClick={() => {
            addImage();
            addKeyByArrayLength(thisContent.data.length);
          }}
        >
          이미지 추가
        </AddButton>
        <ImageListWrapper>
          {thisContent.data.map((item, index) => {
            return (
              <ImageList key={getKeyByIndex(index)}>
                <div className="image-wrap">
                  {item.src ? (
                    <ComponentImage imageUrl={getThisContentImageSrc(index)} />
                  ) : (
                    <ImageThumb className="img-empty-wrap">
                      <img src={ImageIcon} alt="" />
                    </ImageThumb>
                  )}
                  <UrlInputWrapper
                    typeText="이미지"
                    onSubmit={setImageUrl(index)}
                    defaultText={item.src}
                  />
                </div>
                <p
                  className="description-text"
                  onClick={focusTextEditor(index)}
                >
                  <TextEditorViewer
                    isFocused={isTextEditorFocused(index)}
                    setText={setText(index)}
                    text={item.description ?? ""}
                    defaultText={
                      <p className="caption-text">설명을 입력해주세요.</p>
                    }
                  />
                </p>
                <DeleteButtonWrapper>
                  <ObjectDeleteButton
                    onClick={() => {
                      deleteImage(index);
                      deleteKeyByIndex(index);
                    }}
                  />
                </DeleteButtonWrapper>
              </ImageList>
            );
          })}
        </ImageListWrapper>
      </ImageListCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default ImageWithDescriptionListCreator;
