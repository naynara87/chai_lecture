import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { colorPalette, validateURL } from "chai-ui-v2";
import { useState } from "react";
import { ButtonRegister } from "../atoms/ButtonRegister";

export interface UrlInputWrapperProps {
  urlInputWrapperCss?: SerializedStyles;
}
const UrlTextWrapper = styled.div<UrlInputWrapperProps>`
  margin-top: 10px;

  & .text-tit {
    margin-bottom: 5px;
    font-size: 12px;
    line-height: 17px;
    font-weight: 500;
  }

  & input {
    width: calc(100% - 100px);
    max-width: 400px;
    height: 44px;
    margin-right: 4px;
    padding: 13px 12px 14px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 12px;
    line-height: 17px;
    border: 1px solid #b6b6b6;
    flex-grow: 1;
    &::placeholder {
      color: #b6b6b6;
    }
  }

  ${({ urlInputWrapperCss }) => urlInputWrapperCss}
`;

const WarningMessage = styled.p`
  color: ${colorPalette.red700};
`;

const ContainerForm = styled.form`
  display: flex;
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
    <UrlTextWrapper
      className="url-wrapper"
      urlInputWrapperCss={urlInputWrapperCss}
    >
      <p className="text-tit">{typeText} URL</p>
      <ContainerForm onSubmit={handleSubmit}>
        <input
          placeholder={`${typeText} URL 입력`}
          defaultValue={defaultText}
        ></input>
        <ButtonRegister>등록</ButtonRegister>
      </ContainerForm>
      {message && <WarningMessage>{message}</WarningMessage>}
    </UrlTextWrapper>
  );
};

export default UrlInputWrapper;
