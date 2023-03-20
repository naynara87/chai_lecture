import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import iconTail from "chai-ui-v2/dist/assets/images/icon/icon_contsinfo_tail.svg";
import ImageThumb from "../atoms/ImageThumb";
import { DraggableContentCommonProps } from "../../types/page";
import TextEditorViewer from "../molecules/TextEditorViewer";
import { CornerGuideCharacterContentData } from "chai-ui-v2";

const CornerGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBubbleWrap = styled.div`
  position: relative;
  padding: 24px 40px;
  border-radius: 50px;
  background-color: #eff1f5;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin-bottom: 53px;

  &::after {
    content: "";
    background-image: url("${iconTail}");
    background-size: 100% 100%;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 38px;
    height: 37px;
    transform: translateX(-50%);
  }
`;

const CornerGuideCharacterCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
  deleteContent,
}: DraggableContentCommonProps) => {
  const thisContent = content as CornerGuideCharacterContentData;
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
    >
      <CornerGuideWrapper>
        <TextBubbleWrap onClick={(e) => setFocusedId(e, content.id)}>
          <TextEditorViewer
            isFocused={isFocused}
            text={thisContent.data.text}
            setText={setText}
          />
        </TextBubbleWrap>
        {url ? (
          <img src={thisContent.data.character.src} alt="" />
        ) : (
          <ImageThumb />
        )}
        <UrlInputWrapper typeText="이미지" onSubmit={setUrl}></UrlInputWrapper>
      </CornerGuideWrapper>
    </ContentCreatorLayout>
  );
};

export default CornerGuideCharacterCreator;
