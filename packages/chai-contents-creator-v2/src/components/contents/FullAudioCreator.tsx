import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import styled from "@emotion/styled";
import iconPlay from "chai-ui-v2/dist/assets/images/icon/icon_play.svg";
import { DraggableContentCommonProps } from "../../types/page";

const AudioCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 40px;
    height: 40px;
    box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
    border-radius: 8px;
    margin-bottom: 8px;
  }
  & .full-audio-text {
    font-size: 12px;
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
