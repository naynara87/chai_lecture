import styled from "@emotion/styled";
import { HtmlContentComponent, IconTextContentData, vw } from "chai-ui-v2";
import React, { useState } from "react";
import { ContentCommonProps } from "../../types/page";
import TextEditor from "../atoms/TextEditor";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import iconTip from "chai-ui-v2/dist/assets/images/icon/icon_tip.svg";

const IconTextCreatorWrapper = styled.div`
  min-width: 240px;
  display: flex;
  align-items: center;
  & > img {
    width: ${vw(44)};
    height: ${vw(44)};
    margin-right: ${vw(14)};
  }
`;

const IconTextCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
}: ContentCommonProps) => {
  const [text, setText] = useState<string>("");

  const handleClickComponent = (e: React.MouseEvent) => {
    setFocusedId(e, content.id);
  };

  const thisContent = content as IconTextContentData;

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
    <ContentCreatorLayout>
      <IconTextCreatorWrapper onClick={handleClickComponent}>
        <img src={iconTip} alt="" />
        {!isFocused ? (
          <div>
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
          />
        )}
      </IconTextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default IconTextCreator;
