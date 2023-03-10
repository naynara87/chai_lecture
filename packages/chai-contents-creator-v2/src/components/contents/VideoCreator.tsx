import styled from "@emotion/styled";
import AddNumberButton from "../atoms/AddNumberButton";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import { vw } from "chai-ui-v2";
import VideoIcon from "../../assets/images/icon/icon_video.svg";

const VideoThumb = styled.div`
  width: ${vw(230)};
  height: ${vw(130)};
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: ${vw(10)};
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${vw(60)};
  }
`;

const VideoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .video-text-tit {
    font-size: ${vw(12)};
    margin-bottom: ${vw(5)};
  }
  & input {
    width: ${vw(140)};
    height: ${vw(44)};
    padding: ${vw(12)} ${vw(13)};
    box-sizing: border-box;
    margin-right: ${vw(4)};
    border-radius: ${vw(8)};
  }
  & button {
    width: ${vw(60)};
    height: ${vw(44)};
    padding: unset;
  }
`;

const VideoCreator = () => {
  return (
    <ContentCreatorLayout>
      <div>
        <VideoThumb>
          <img src={VideoIcon} alt="" />
        </VideoThumb>
        <VideoTextWrapper>
          <p className="video-text-tit">동영상 URL</p>
          <form>
            <input placeholder="동영상 URL을 입력해주세요"></input>
            <AddNumberButton>등록</AddNumberButton>
          </form>
        </VideoTextWrapper>
      </div>
    </ContentCreatorLayout>
  );
};

export default VideoCreator;
