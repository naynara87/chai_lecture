import styled from "@emotion/styled";

import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import { vw } from "chai-ui-v2";
import VideoIcon from "../../assets/images/icon/icon_video.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";

const VideoWrapper = styled.div``;

const VideoThumb = styled.div`
  width: ${vw(230)};
  height: ${vw(130)};
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: ${vw(10)};
  border-radius: ${vw(10)};
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${vw(60)};
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
