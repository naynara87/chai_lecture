import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import iconTail from "chai-ui-v2/dist/assets/images/icon/icon_contsinfo_tail.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import ImageThumb from "../atoms/ImageThumb";
import { ActivityGuideCharacterContentData } from "chai-ui-v2";
import { DraggableContentCommonProps } from "../../types/page";
import TextEditorViewer from "../molecules/TextEditorViewer";

export const CornerGuideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4vmin;
  & > img {
    width: 12vmin;
    height: 12vmin;
    background-size: 36px 36px;
    object-fit: cover;
  }
`;

export const TextBubbleWrap = styled.div`
  position: relative;
  width: 80%;
  padding: 24px;
  border-radius: 8px;
  background-color: #eff1f5;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  margin-bottom: 46px;

  &::after {
    content: "";
    background-image: url("${iconTail}");
    background-size: 100%;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 38px;
    height: 37px;
    transform: translateX(-50%);
  }
`;

/**
 * CH-02-02 활동 안내
 */
const ActivityGuideCharacterCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  copyContent,
  pasteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  isEditBtn,
  deleteContent,
}: DraggableContentCommonProps) => {
  const thisContent = content as ActivityGuideCharacterContentData;
  const url = thisContent.data.character.src;

  const setText = (text: string) => {
    const newContent = {
      ...thisContent,
      data: {
        ...thisContent.data,
        text,
      },
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  const setUrl = (url: string) => {
    const newContent = {
      ...thisContent,
      data: {
        ...thisContent.data,
        character: {
          src: url,
        },
      },
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      align="center"
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      isEditBtn={isEditBtn}
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <CornerGuideWrapper>
        <TextBubbleWrap onClick={(e) => setFocusedId(e, content.id)}>
          <TextEditorViewer
            isFocused={isFocused}
            text={thisContent.data.text}
            setText={setText}
            hasFontSize={false}
          />
        </TextBubbleWrap>
        {url ? (
          <img src={thisContent.data.character.src} alt="" />
        ) : (
          <ImageThumb />
        )}
        <UrlInputWrapper
          typeText="이미지"
          onSubmit={setUrl}
          defaultText={thisContent.data.character.src}
        ></UrlInputWrapper>
      </CornerGuideWrapper>
    </ContentCreatorLayout>
  );
};

export default ActivityGuideCharacterCreator;
