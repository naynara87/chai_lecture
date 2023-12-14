import React from "react";
import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import VideoIcon from "../../assets/images/icon/icon_video.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import { DraggableContentCommonProps } from "../../types/page";
import { ComponentVideo, VideoContentData } from "chai-ui-v2";

const VideoWrapper = styled.div``;

const VideoThumb = styled.div`
  width: 23vmin;
  height: 23vmin;
  background-color: #f0f0f0;
  position: relative;
  border-radius: 0.5vmin;
  margin: 0 auto;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
`;

const VideoCreator = ({
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
  const thisContent = content as VideoContentData;
  const url = thisContent.data.src;

  const handleSubmitUrl = (url: string) => {
    const newContent = {
      ...thisContent,
      data: {
        src: url,
      },
    };
    updateContent(currentSlide.id, content.id, position, newContent);
  };

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
      <VideoWrapper onClick={(e) => setFocusedId(e, content.id)}>
        {url ? (
          <ComponentVideo content={thisContent} />
        ) : (
          <VideoThumb>
            <img src={VideoIcon} alt="" />
          </VideoThumb>
        )}
        <UrlInputWrapper
          typeText="비디오"
          onSubmit={handleSubmitUrl}
          defaultText={thisContent.data.src}
        />
      </VideoWrapper>
    </ContentCreatorLayout>
  );
};

export default VideoCreator;
