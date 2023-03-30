import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["sans-serif", "yahei", "Noto-sans"];
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
  [data-value="Noto-sans"] {
    font-family: "Noto-sans";
    ::before {
      content: "노토 산스" !important;
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
}
const TextEditor = ({
  text,
  setText,
  onBlur,
  minHeight,
  editorCss,
}: TextEditorProps) => {
  useEffect(() => {
    const quill = document.querySelector<HTMLDivElement>(".ql-editor");
    if (quill) {
      quill.focus();
    }
  }, []);

  const handleChange = (value: string) => {
    setText(value.replace(/<[^>]*>?/g, "") ? value : "");
  };

  return (
    <TextEditorWrapper minHeight={minHeight} editorCss={editorCss}>
      <ReactQuill
        onChange={handleChange}
        value={text}
        onBlur={onBlur}
        className="quill__custom"
        modules={{
          toolbar: [
            [{ font: Font.whitelist }],
            [{ header: [1, 2, 3, false] }],
            ["bold"],
            [{ color: [] }, { background: [] }],
          ],
        }}
      />
    </TextEditorWrapper>
  );
};

export default TextEditor;
