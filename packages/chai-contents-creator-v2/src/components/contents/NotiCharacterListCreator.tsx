import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import iconPlay from "chai-ui-v2/dist/assets/images/icon/icon_contsinfo_tail.svg";
import ImageIcon from "../../assets/images/icon/icon_image_with_bg.svg";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import {
  colorPalette,
  NotiCharacterListContentData,
  useToast,
} from "chai-ui-v2";
import AddButton from "../atoms/AddButton";
import { DraggableContentCommonProps } from "../../types/page";
import TextEditorViewer from "../molecules/TextEditorViewer";
import { useCallback, useEffect, useState } from "react";
import useSafeKey from "../../hooks/useSafeKey";

const NotiCharacterWrapper = styled.div`
  position: relative;
  padding-top: 4vmin;
  text-align: center;

  > .btn {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const NotiCharacterWrap = styled.div`
  position: relative;
  display: inline-block;

  &:not(:first-of-type) {
    margin-left: 50px;
  }

  .description-text {
    width: 100%;
  }

  .btn-delete {
    z-index: 1;
    position: absolute;
    top: -5px;
    left: auto;
    right: -5px;
  }
`;

const TextBubbleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 420px;
  min-height: 150px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  background-color: ${colorPalette.gray300};
  margin-bottom: 53px;
  white-space: pre-line;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 38px;
    height: 37px;
    background-image: url("${iconPlay}");
    background-size: 100%;
    transform: translateX(-50%);
  }
`;

const ImageThumb = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NotiCharacterListCreator = ({
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
  const thisContent = content as NotiCharacterListContentData;
  const [focusedTextEditorIndex, setFocusedTextEditorIndex] =
    useState<number>();
  const { addToast } = useToast();

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
            text: text,
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
    if (thisContent.data.length >= 2) {
      addToast("학습예고는 최대 2개까지만 등록 가능합니다.", "info");
      return;
    }
    const newContent = {
      ...thisContent,
      data: [
        ...thisContent.data,
        {
          text: "",
          character: {
            src: "",
          },
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
      return thisContent.data?.[index]?.character.src ?? "";
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
            character: {
              src,
            },
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
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <NotiCharacterWrapper>
        <AddButton
          onClick={() => {
            addImage();
            addKeyByArrayLength(thisContent.data.length);
          }}
        >
          말풍선 추가
        </AddButton>
        {/* 반복영역 */}
        {thisContent.data.map((item, index) => {
          return (
            <NotiCharacterWrap key={getKeyByIndex(index)}>
              <ObjectDeleteButton
                onClick={() => {
                  deleteImage(index);
                  deleteKeyByIndex(index);
                }}
              />
              <TextBubbleWrap onClick={(e) => setFocusedId(e, content.id)}>
                <p
                  className="description-text"
                  onClick={focusTextEditor(index)}
                >
                  <TextEditorViewer
                    isFocused={isTextEditorFocused(index)}
                    setText={setText(index)}
                    text={thisContent.data?.[index].text ?? ""}
                    defaultText={
                      <p className="caption-text">설명을 입력해주세요.</p>
                    }
                    hasFontSize={false}
                  />
                </p>
              </TextBubbleWrap>

              <ImageThumb>
                {item.character.src ? (
                  <img src={getThisContentImageSrc(index)} alt="" />
                ) : (
                  <img src={ImageIcon} alt="" />
                )}
              </ImageThumb>

              <UrlInputWrapper
                typeText="이미지"
                onSubmit={setImageUrl(index)}
                defaultText={thisContent.data[index].character.src}
              />
            </NotiCharacterWrap>
          );
        })}
        {/* end 반복영역 */}
      </NotiCharacterWrapper>
    </ContentCreatorLayout>
  );
};

export default NotiCharacterListCreator;
