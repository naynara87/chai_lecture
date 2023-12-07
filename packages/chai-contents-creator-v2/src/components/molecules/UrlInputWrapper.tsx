import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { colorPalette, validateURL } from "chai-ui-v2";
import { useRef, useState } from "react";
import { ButtonDelete, ButtonRegister } from "../atoms/ButtonRegister";

export interface UrlInputWrapperProps {
  urlInputWrapperCss?: SerializedStyles;
}
const UrlTextWrapper = styled.div<UrlInputWrapperProps>`
  width: 100%;
  margin-top: 10px;
  flex: auto;

  & .text-tit {
    margin-bottom: 5px;
    font-size: 12px;
    line-height: 17px;
    font-weight: 500;
  }

  & input {
    width: 100%;
    max-width: 600px;
    height: 44px;
    padding: 13px 12px 14px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 12px;
    line-height: 17px;
    border: 1px solid #b6b6b6;
    flex-grow: 1;
    flex: 1;
    &::placeholder {
      color: #b6b6b6;
    }
  }

  &.upload-comp .waring-message {
    font-size: 1.5vmin;
    color: ${colorPalette.purple700};
  }

  ${({ urlInputWrapperCss }) => urlInputWrapperCss}
`;

const WarningMessage = styled.p`
  color: ${colorPalette.red700};
`;

const ContainerForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

interface ButtonProps extends UrlInputWrapperProps {
  typeText: string;
  onSubmit?: (src: string, index?: number) => void;
  defaultText?: string;
}

const UrlInputWrapper = ({
  typeText,
  onSubmit,
  defaultText,
  urlInputWrapperCss,
}: ButtonProps) => {
  const [message, setMessage] = useState<string>("");
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const input = inputRef.current;
    const src = input!.value;

    const isUrl = validateURL(src);

    if (!isUrl) {
      setMessage("유효하지 않은 주소입니다.");
      return;
    } else {
      setIsUpload(true);
      setMessage("정상적으로 등록 되었습니다.");
    }

    onSubmit && onSubmit(src);
  };

  const deleteURL = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const src = "";
    console.log("src", src);

    onSubmit && onSubmit(src);
    setMessage("");
    setIsUpload(false);
    inputRef.current!.value = "";
    inputRef.current!.placeholder = `${typeText} URL 입력`;
  };

  return (
    <UrlTextWrapper
      className={`${isUpload ? "upload-comp" : ""} url-Wrapper`}
      // className="url-wrapper"
      urlInputWrapperCss={urlInputWrapperCss}
    >
      <p className="text-tit">{typeText} URL</p>
      <ContainerForm>
        <input
          placeholder={`${typeText} URL 입력`}
          defaultValue={defaultText}
          ref={inputRef}
        ></input>
        <ButtonRegister onClick={handleSubmit}>등록</ButtonRegister>
        <ButtonDelete onClick={deleteURL}>제거</ButtonDelete>
      </ContainerForm>
      {message && (
        <WarningMessage className="waring-message">{message}</WarningMessage>
      )}
    </UrlTextWrapper>
  );
};

export default UrlInputWrapper;
