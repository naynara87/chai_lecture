import styled from "@emotion/styled";
import { colorPalette, validateURL } from "chai-ui-v2";
import { useState } from "react";
import AddButton from "../atoms/AddButton";

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

const WarningMessage = styled.p`
  color: ${colorPalette.red700};
`;

interface ButtonProps {
  typeText: string;
  onSubmit?: (src: string, index?: number) => void;
  defaultText?: string;
}

const UrlInputWrapper = ({ typeText, onSubmit, defaultText }: ButtonProps) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget[0] as HTMLInputElement;
    const src = input.value;

    const isUrl = validateURL(src);

    if (!isUrl) {
      setMessage("유효하지 않은 주소입니다.");
      return;
    } else {
      setMessage("");
    }

    onSubmit && onSubmit(src);
  };

  return (
    <UrlTextWrapper className="url-wrapper">
      <p className="text-tit">{typeText} URL</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={`${typeText} URL 입력`}
          defaultValue={defaultText}
        ></input>
        <AddButton>등록</AddButton>
      </form>
      {message && <WarningMessage>{message}</WarningMessage>}
    </UrlTextWrapper>
  );
};

export default UrlInputWrapper;
