import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import VideoIcon from "../../assets/images/icon/icon_video.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";

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

const VideoCreator = () => {
  return (
    <ContentCreatorLayout>
      <VideoWrapper>
        <VideoThumb>
          <img src={VideoIcon} alt="" />
        </VideoThumb>
        <UrlInputWrapper typeText="비디오" />
      </VideoWrapper>
    </ContentCreatorLayout>
  );
};

export default VideoCreator;
