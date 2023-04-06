import styled from "@emotion/styled";
import { colorPalette, validateURL } from "chai-ui-v2";
import { useRef, useState } from "react";
import { ButtonDelete, ButtonRegister } from "../atoms/ButtonRegister";

const UrlAndTimeWrapper = styled.div`
  & .text-tit {
    margin-bottom: 5px;
  }

  & input {
    width: 100%;
    max-width: 400px;
    height: 44px;
    padding: 12px 13px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    border: 1px solid #b6b6b6;
    &::placeholder {
      color: #b6b6b6;
    }
  }
  & form {
    display: flex;
    .inputs-wrapper {
      display: flex;
      width: calc(100% - 100px);
      flex-direction: column;
      margin-right: 10px;
      gap: 8px;
    }
  }

  & button {
    width: 80px;
    height: 44px;
    padding: unset;
    font-size: 15px;
  }
  &.upload-comp .waring-message {
    color: ${colorPalette.purple700};
  }
`;

const WarningMessage = styled.p`
  color: ${colorPalette.red700};
`;

interface UrlAndTimeInputWrapperProps {
  typeText: string;
  onSubmit?: (src: string, speakingTime: number) => void;
  defaultTime: number;
  defaultURL: string;
  onChangeTime: (time: number) => void;
}

const UrlAndTimeInputWrapper = ({
  typeText,
  onSubmit,
  onChangeTime,
  defaultTime,
  defaultURL,
}: UrlAndTimeInputWrapperProps) => {
  const [message, setMessage] = useState<string>("");
  const URLRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const [isUpload, setIsUpload] = useState<boolean>(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const timeInput = timeRef.current!;
    const srcInput = URLRef.current!;

    const src = srcInput.value;
    const time = Number(timeInput.value);
    const isUrl = validateURL(src);

    if (!isUrl) {
      setMessage("유효하지 않은 주소입니다.");
      onSubmit && onSubmit("", 0);
      return;
    } else if (!time || time < 1) {
      setMessage("발화시간을 입력해주세요.");
      onSubmit && onSubmit("", 0);
      return;
    } else {
      setIsUpload(true);
      setMessage("정상적으로 등록되었습니다.");
    }

    onSubmit && onSubmit(src, time);
  };

  const deleteURL = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const src = "";
    const time = "0";

    onSubmit && onSubmit(src, Number(time));
    setMessage("");
    setIsUpload(false);
    URLRef.current!.value = src;
    URLRef.current!.placeholder = `${typeText} URL 입력`;
    timeRef.current!.value = time;
  };

  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    onChangeTime(time);
  };

  return (
    <UrlAndTimeWrapper
      className={`${isUpload ? "upload-comp" : ""} url-Wrapper`}
    >
      <p className="text-tit">{typeText} URL</p>
      <form>
        <div className="inputs-wrapper">
          <input
            placeholder={`${typeText} URL 입력`}
            defaultValue={defaultURL}
            ref={URLRef}
          ></input>
          <input
            placeholder={"발화 시간(초) 입력"}
            type="number"
            defaultValue={defaultTime}
            ref={timeRef}
            onChange={handleChangeTime}
          ></input>
        </div>
        <ButtonRegister onClick={handleSubmit}>등록</ButtonRegister>
        <ButtonDelete onClick={deleteURL}>제거</ButtonDelete>
      </form>

      {message && (
        <WarningMessage className="waring-message">{message}</WarningMessage>
      )}
    </UrlAndTimeWrapper>
  );
};

export default UrlAndTimeInputWrapper;
