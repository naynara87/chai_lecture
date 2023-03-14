import styled from "@emotion/styled";
import AddNumberButton from "../atoms/AddNumberButton";

interface ButtonProps {
  typeText: React.ReactNode;
}

const VideoTextWrapper = styled.div`
  margin-top: 10px;

  & .video-text-tit {
    margin-bottom: 5px;
  }

  & input {
    width: calc(100% - 100px);
    height: 44px;
    margin-right: 10px;
    padding: 12px 13px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    border: 1px solid #b6b6b6;
    &::placeholder {
      color: #b6b6b6;
    }
  }

  & button {
    width: 80px;
    height: 44px;
    padding: unset;
    font-size: 15px;
  }
`;

const UrlInputWrapper = ({ typeText }: ButtonProps) => {
  return (
    <VideoTextWrapper className="url-text-wrapper">
      <p className="video-text-tit">{typeText} URL</p>
      <form>
        <input placeholder={`${typeText} URL 입력`}></input>
        <AddNumberButton>등록</AddNumberButton>
      </form>
    </VideoTextWrapper>
  );
};

export default UrlInputWrapper;
