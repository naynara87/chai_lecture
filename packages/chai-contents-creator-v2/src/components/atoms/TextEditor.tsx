import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["sans-serif"]; // , "yahei"
ReactQuill.Quill.register(Font, true);
export interface TextEditorWrapperProps {
  minHeight?: number;
  editorCss?: SerializedStyles;
}
const TextEditorWrapper = styled.div<TextEditorWrapperProps>`
  background-color: ${colorPalette.white};
  .ql-container {
    ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}px;` : "")}
  }
  .ql-editor {
    ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}px;` : "")}
  }
  .quill__custom {
    ${({ editorCss }) => editorCss}
  }
  .ql-formats {
    margin-right: 0 !important;
  }

  [data-value="yahei"] {
    font-family: "yahei";
    ::before {
      content: "yahei" !important;
    }
  }
`;

export interface TextEditorProps extends TextEditorWrapperProps {
  text: string;
  setText: (text: string) => void;
  /**
   * NOTE: updateContent가 onBlur로 전달하는 콜백 안에서 실행되어야 한다
   * - setText에서 global state까지 업데이트 한다면 onBlur는 전달하지 않아도 된다
   */
  onBlur?: () => void;
  limitTextLength?: number;
}
const TextEditor = ({
  text,
  setText,
  onBlur,
  minHeight,
  editorCss,
  limitTextLength,
}: TextEditorProps) => {
  useEffect(() => {
    const quill = document.querySelector<HTMLDivElement>(".ql-editor");
    if (quill) {
      quill.focus();
    }
  }, []);

  const [innerText, setInnerText] = React.useState<string>(text);

  useEffect(() => {
    if (innerText !== text) {
      setText(innerText);
    }
  }, [innerText, setText, text]);

  const handleChange = (value: string) => {
    const pureText = value.replace(/<[^>]*>?/g, "");
    // NOTE: limitTextLength가 있을 경우, 글자수 제한
    if (limitTextLength && pureText.length > limitTextLength) {
      setInnerText(pureText.slice(0, limitTextLength));
      return;
    }

    setInnerText(pureText ? value : "");
  };

  return (
    <TextEditorWrapper minHeight={minHeight} editorCss={editorCss}>
      <ReactQuill
        onChange={handleChange}
        value={innerText}
        onBlur={onBlur}
        className="quill__custom"
        formats={[
          "bold",
          "color",
          "font",
          "italic",
          "size",
          "strike",
          "underline",
          "header",
          "align",
          "background",
        ]}
        modules={{
          toolbar: [
            [{ font: Font.whitelist }],
            [{ header: [1, 2, 3, false] }],
            ["bold"],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
          ],
        }}
      />
    </TextEditorWrapper>
  );
};

export default TextEditor;
