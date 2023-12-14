import styled from "@emotion/styled";
import { HtmlContentComponent, IconTextContentData } from "chai-ui-v2";
import React, { useState } from "react";
import { DraggableContentCommonProps } from "../../types/page";
import TextEditor from "../atoms/TextEditor";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import iconTip from "chai-ui-v2/dist/assets/images/icon/icon_tip.svg";

export const IconTextCreatorWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  > img {
    width: 4vmin;
    height: 4vmin;
    margin-right: 1vmin;
  }

  > div {
    width: calc(100% - 6vmin);
  }
`;

/**
 * 지시문 컴포넌트
 * CH-01-02
 */
const IconTextCreator = ({
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
}: DraggableContentCommonProps) => {
  const thisContent = content as IconTextContentData;

  const [text, setText] = useState<string>(thisContent.data.text);

  const handleClickComponent = (e: React.MouseEvent) => {
    setFocusedId(e, content.id);
  };

  const getNewContent = (): IconTextContentData => {
    return {
      ...thisContent,
      data: {
        text,
      },
    };
  };

  const handleEndEditText = () => {
    updateContent(currentSlide.id, content.id, position, getNewContent());
  };

  return (
    <ContentCreatorLayout
      draggableProvided={draggableProvided}
      deleteContent={deleteContent}
      slideId={currentSlide.id}
      content={content}
      position={position}
      copyContent={copyContent}
      pasteContent={pasteContent}
    >
      <IconTextCreatorWrapper onClick={handleClickComponent}>
        <img src={iconTip} alt="" />
        {!isFocused ? (
          <div className="font-20vmin">
            {text ? (
              <HtmlContentComponent html={text} />
            ) : (
              "텍스트를 입력해주세요"
            )}
          </div>
        ) : (
          <TextEditor
            text={text}
            setText={setText}
            onBlur={handleEndEditText}
            hasFontSize={false}
          />
        )}
      </IconTextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default IconTextCreator;
