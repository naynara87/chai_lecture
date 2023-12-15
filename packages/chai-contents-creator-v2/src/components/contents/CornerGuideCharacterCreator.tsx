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
  padding-top: 2vmin;
  & > img {
    width: 35vmin;
    height: 35vmin;
    background-size: 6vmin;
    object-fit: cover;
  }
`;

const TextBubbleWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: fit-content;
  padding: 1em 2em;
  border-radius: 2em;
  background-color: #eff1f5;
  font-weight: 400;
  font-size: 2vmin;
  text-align: center;
  margin-bottom: 6vmin;

  &::after {
    content: "";
    background-image: url("${iconTail}");
    background-size: 100%;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 3vmin;
    height: 2.5vmin;
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

export default CornerGuideCharacterCreator;
