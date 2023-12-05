import iconPlay from "chai-ui-v2/dist/assets/images/icon/icon_play.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import styled from "@emotion/styled";

interface AudioWrapperProps {
  onSubmit?: (src: string) => void;
  defaultText?: string;
}

const AudioCreatorWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  & > img {
    width: 5vmin;
    height: 5vmin;
    box-shadow: 0px 0.4vmin 0px rgba(88, 88, 88, 0.2);
    border-radius: 1vmin;
  }
`;

const AudioWrapper = ({ onSubmit, defaultText }: AudioWrapperProps) => {
  return (
    <AudioCreatorWrapper>
      <img src={iconPlay} alt="audio" />
      <UrlInputWrapper
        typeText="오디오"
        onSubmit={onSubmit}
        defaultText={defaultText}
      />
    </AudioCreatorWrapper>
  );
};

export default AudioWrapper;
