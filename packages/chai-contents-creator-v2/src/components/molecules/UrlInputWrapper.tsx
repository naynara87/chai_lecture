import styled from "@emotion/styled";
import AddNumberButton from "../atoms/AddNumberButton";

interface ButtonProps {
  typeText: React.ReactNode;
}

const VideoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .video-text-tit {
    font-size: 12px;
    margin-bottom: 5px;
  }
  & input {
    width: 140px;
    height: 44px;
    padding: 12px 13px;
    box-sizing: border-box;
    margin-right: 4px;
    border-radius: 8px;
    font-size: 12px;
    border: 1px solid #b6b6b6;
    &::placeholder {
      color: #b6b6b6;
    }
  }
  & button {
    width: 60px;
    height: 44px;
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
