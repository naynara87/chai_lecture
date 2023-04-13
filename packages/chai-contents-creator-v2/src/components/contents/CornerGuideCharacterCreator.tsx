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
  & > img {
    width: 22.5vw;
    height: 22.5vw;
    background-size: 36px 36px;
    object-fit: cover;
  }
`;

const TextBubbleWrap = styled.div`
  position: relative;
  width: 100%;
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

/**
 * CH-02-01 코너 변경 안내
 */
const CornerGuideCharacterCreator = ({
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
      copyContent={copyContent}
      pasteContent={pasteContent}
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
        <UrlInputWrapper
          typeText="이미지"
          onSubmit={setUrl}
          defaultText={thisContent.data.character.src}
        ></UrlInputWrapper>
      </CornerGuideWrapper>
    </ContentCreatorLayout>
  );
};

export default CornerGuideCharacterCreator;
