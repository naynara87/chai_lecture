import styled from "@emotion/styled";
import AddNumberButton from "../atoms/AddNumberButton";
import { vw } from "chai-ui-v2";

interface ButtonProps {
  typeText: React.ReactNode;
}

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
    font-size: ${vw(12)};
  }
  & button {
    width: ${vw(60)};
    height: ${vw(44)};
    padding: unset;
  }
`;

const UrlInputWrapper = ({ typeText }: ButtonProps) => {
  return (
    <VideoTextWrapper>
      <p className="video-text-tit">{typeText} URL</p>
      <form>
        <input placeholder={`${typeText} URL 입력`}></input>
        <AddNumberButton>등록</AddNumberButton>
      </form>
    </VideoTextWrapper>
  );
};

export default UrlInputWrapper;
