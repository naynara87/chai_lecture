import styled from "@emotion/styled";
import { colorPalette, validateURL } from "chai-ui-v2";
import { useState } from "react";
import AddButton from "../atoms/AddButton";

const UrlAndTimeWrapper = styled.div`
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
  &.input-complete {
    color: ${colorPalette.blue600};
  }
`;

interface ButtonProps {
  typeText: string;
  onSubmit?: (src: string, speakingTime: number) => void;
}

const UrlAndTimeInputWrapper = ({ typeText, onSubmit }: ButtonProps) => {
  const [message, setMessage] = useState<string>("");
  const [inputCheck, setInputCheck] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const srcInput = e.currentTarget[0] as HTMLInputElement;
    const src = srcInput.value;

    const timeInput = e.currentTarget[1] as HTMLInputElement;
    const time = Number(timeInput.value);

    const isUrl = validateURL(src);

    if (!isUrl) {
      setInputCheck(false);
      setMessage("유효하지 않은 주소입니다.");
      onSubmit && onSubmit("", 0);
      return;
    } else if (!time) {
      setInputCheck(false);
      setMessage("발화시간을 입력해주세요.");
      onSubmit && onSubmit("", 0);
      return;
    } else {
      setInputCheck(true);
      setMessage("정상적으로 입력되었습니다.");
    }

    onSubmit && onSubmit(src, time);
  };

  return (
    <UrlAndTimeWrapper className="url-wrapper">
      <p className="text-tit">{typeText} URL</p>
      <form onSubmit={handleSubmit}>
        <input placeholder={`${typeText} URL 입력`}></input>
        <input placeholder={"발화 시간(초) 입력"}></input>
        <AddButton>등록</AddButton>
      </form>
      {message ? (
        inputCheck ? (
          <WarningMessage className="input-complete">{message}</WarningMessage>
        ) : (
          <WarningMessage>{message}</WarningMessage>
        )
      ) : (
        ""
      )}
    </UrlAndTimeWrapper>
  );
};

export default UrlAndTimeInputWrapper;
