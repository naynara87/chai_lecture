import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ImageIcon from "../../assets/images/icon/icon_image.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import { DraggableContentCommonProps } from "../../types/page";
import { CaptionListImage, ImageWithCaptionListContentData, vw } from "chai-ui-v2";
import TextEditorViewer from "../molecules/TextEditorViewer";
import { useCallback, useEffect, useState } from "react";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import useSafeKey from "../../hooks/useSafeKey";

const ImageListWrapper = styled.ul`
  display: flex;
  gap: 20px;

  .caption-text {
    margin-top: 20px;
    color: #666666;
    font-size: 10px;
    text-align: center;
  }
`;

const ImageList = styled.li`
  position: relative;
  width: 50%;
`;

const ImageThumb = styled.div`
  max-width: 100%;
  width: ${vw(200)};
  height: ${vw(150)};
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  .defaultImage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
`;

const ImageWithCaptionListCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteButtonWrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
`;

/**
 * CH-01-06 1단 이미지
 * CH-01-07 2단 이미지
 * 이미지(캡션)
 */
const ImageWithCaptionListCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  deleteContent,
  copyContent,
  pasteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const thisContent = content as ImageWithCaptionListContentData;

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

  useEffect(() => {
    window.addEventListener("click", resetFocusedTextEditor);
    return () => {
      window.removeEventListener("click", resetFocusedTextEditor);
    };
  }, [resetFocusedTextEditor]);

  const setText = (index: number) => (text: string) => {
    const newContent = {
      ...thisContent,
      data: thisContent.data.map((data, dataIndex) => {
        if (dataIndex === index) {
          return {
            ...data,
            caption: text,
          };
        }
        return data;
      }),
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

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

  const getThisContentImageSrc = useCallback(
    (index: number) => {
      return thisContent.data?.[index]?.src ?? "";
    },
    [thisContent.data],
  );

  const addImage = () => {
    // 최대 2개 까지
    if (thisContent.data.length === 2) {
      alert("이미지는 최대 2개까지만 등록 가능합니다.");
      return;
    }
    const newContent = {
      ...thisContent,
      data: [
        ...thisContent.data,
        {
          src: "",
          caption: "",
        },
      ],
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  const deleteImage = (index: number) => {
    if (thisContent.data.length === 1) {
      alert("최소 1개이상 입력하셔야 합니다.");
      return;
    }
    const newContent = {
      ...thisContent,
      data: thisContent.data.filter((_, dataIndex) => dataIndex !== index),
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  const { addKeyByArrayLength, deleteKeyByIndex, getKeyByIndex } = useSafeKey(
    thisContent.data,
  );

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
      <ImageWithCaptionListCreatorWrapper>
        <AddButton
          onClick={() => {
            addKeyByArrayLength(thisContent.data.length);
            addImage();
          }}
        >
          이미지 추가
        </AddButton>
        <ImageListWrapper>
          {thisContent.data.map((_, index) => {
            return (
              <ImageList key={getKeyByIndex(index)}>
                <DeleteButtonWrapper>
                  <ObjectDeleteButton
                    onClick={() => {
                      deleteKeyByIndex(index);
                      deleteImage(index);
                    }}
                  />
                </DeleteButtonWrapper>
                <ImageThumb>
                  {getThisContentImageSrc(index) ? (
                    <CaptionListImage
                      src={getThisContentImageSrc(index)}
                      alt=""
                    />
                  ) : (
                    <img className="defaultImage" src={ImageIcon} alt="" />
                  )}
                </ImageThumb>
                <UrlInputWrapper
                  typeText="이미지"
                  onSubmit={setImageUrl(index)}
                  defaultText={thisContent.data?.[index].src}
                />
                <div onClick={focusTextEditor(index)}>
                  <TextEditorViewer
                    isFocused={isTextEditorFocused(index)}
                    text={thisContent.data?.[index].caption ?? ""}
                    setText={setText(index)}
                    defaultText={
                      <p className="caption-text">캡션을 입력해주세요.</p>
                    }
                  />
                </div>
              </ImageList>
            );
          })}
        </ImageListWrapper>
      </ImageWithCaptionListCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default ImageWithCaptionListCreator;
