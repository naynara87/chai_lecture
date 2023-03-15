import styled from "@emotion/styled";
import AddButton from "../atoms/AddButton";

interface ButtonProps {
  typeText: React.ReactNode;
}

const UrlTextWrapper = styled.div`
  margin-top: 10px;

  & .text-tit {
    margin-bottom: 5px;
  }

  & input {
    width: calc(100% - 100px);
    max-width: 400px;
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
    <UrlTextWrapper className="url-wrapper">
      <p className="text-tit">{typeText} URL</p>
      <form>
        <input placeholder={`${typeText} URL 입력`}></input>
        <AddButton>등록</AddButton>
      </form>
    </UrlTextWrapper>
  );
};

export default UrlInputWrapper;
