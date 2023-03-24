import { RecorderWrapper } from "./AudioRecorderCreator";
import IconMic from "chai-ui-v2/dist/assets/images/icon/icon_mic.svg";
import ExampleContentsCreator from "./ExampleContentsCreator";
import styled from "@emotion/styled";

const FinalSpeakingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const FinalSpeakingContentCreator = () => {
  return (
    <FinalSpeakingContentWrapper>
      {/* TODO: ComponentGrayLineCreator 들어올 영역 */}
      <RecorderWrapper>
        <img src={IconMic} alt="" />
        <p>녹음을 시작해보세요</p>
      </RecorderWrapper>
      <ExampleContentsCreator />
    </FinalSpeakingContentWrapper>
  );
};

export default FinalSpeakingContentCreator;
