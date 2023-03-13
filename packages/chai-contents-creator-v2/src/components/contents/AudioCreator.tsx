import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AudioIcon from "../../assets/images/icon/icon_play.svg";
import UrlInputWrapper from "../molecules/UrlInputWrapper";

const AudioCreator = () => {
  return (
    <ContentCreatorLayout>
      <div>
        <img src={AudioIcon} alt="audio" />
        <UrlInputWrapper typeText="오디오" />
      </div>
    </ContentCreatorLayout>
  );
};

export default AudioCreator;
