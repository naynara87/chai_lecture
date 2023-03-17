import React from "react";
import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import VideoIcon from "../../assets/images/icon/icon_video.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import { DraggableContentCommonProps } from "../../types/page";
import { ComponentVideo, VideoContentData } from "chai-ui-v2";

const VideoWrapper = styled.div``;

const VideoThumb = styled.div`
  width: 230px;
  height: 230px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 10px;
  border-radius: 10px;
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

  const handleDeleteComponent = () => {
    deleteContent(currentSlide.id, content.id, position);
  };

  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      onDeleteComponent={handleDeleteComponent}
      align="center"
    >
      <VideoWrapper onClick={(e) => setFocusedId(e, content.id)}>
        {url ? (
          <ComponentVideo content={thisContent} />
        ) : (
          <VideoThumb>
            <img src={VideoIcon} alt="" />
          </VideoThumb>
        )}
        <UrlInputWrapper typeText="비디오" onSubmit={handleSubmitUrl} />
      </VideoWrapper>
    </ContentCreatorLayout>
  );
};

export default VideoCreator;
