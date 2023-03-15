import iconPlay from "chai-ui-v2/dist/assets/images/icon/icon_play.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import styled from "@emotion/styled";

const AudioCreatorWrapper = styled.div`
  & > img {
    width: 40px;
    height: 40px;
    box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
    border-radius: 8px;
  }
`;

const AudioWrapper = () => {
  return (
    <AudioCreatorWrapper>
      <img src={iconPlay} alt="audio" />
      <UrlInputWrapper typeText="오디오" />
    </AudioCreatorWrapper>
  );
};

export default AudioWrapper;
