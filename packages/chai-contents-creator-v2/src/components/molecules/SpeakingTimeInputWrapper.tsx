import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
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
  onSubmit?: (time: number) => void;
  defaultText?: string;
}

const SpeakingTimeInputWrapper = ({ onSubmit, defaultText }: ButtonProps) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const timeInput = e.currentTarget[0] as HTMLInputElement;

    const time = Number(timeInput.value);

    if (!time || time < 1) {
      setMessage("발화시간을 정확히 입력해주세요.");
      return;
    } else {
      setMessage("");
    }

    onSubmit && onSubmit(time);
  };

  return (
    <UrlTextWrapper className="url-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"발화 시간(초) 입력"}
          defaultValue={defaultText}
          type="number"
        ></input>
        <AddButton>등록</AddButton>
      </form>
      {message && <WarningMessage>{message}</WarningMessage>}
    </UrlTextWrapper>
  );
};

export default SpeakingTimeInputWrapper;
