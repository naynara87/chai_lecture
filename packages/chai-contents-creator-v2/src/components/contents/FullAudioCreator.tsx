import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import styled from "@emotion/styled";
import iconPlay from "chai-ui-v2/dist/assets/images/icon/icon_play.svg";
import { DraggableContentCommonProps } from "../../types/page";

const AudioCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 5vmin;
    height: 5vmin;
    box-shadow: 0 0.4vmin 0 rgba(88, 88, 88, 0.2);
    border-radius: 1vmin;
    margin-bottom: 1vmin;
  }
  & .full-audio-text {
    font-size: 2vmin;
    font-weight: 400;
  }
`;

const FullAudioCreator = ({
  draggableProvided,
  isDraggable,
  isEditBtn,
}: DraggableContentCommonProps) => {
  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      isEditBtn={isEditBtn}
    >
      <AudioCreatorWrapper>
        <img src={iconPlay} alt="audio" />
        <p className="">전체 음성 듣기</p>
      </AudioCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default FullAudioCreator;
