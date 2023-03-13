import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditorWrapper = styled.div`
  background-color: ${colorPalette.white};
`;

interface TextEditorProps {
  text: string;
  setText: (text: string) => void;
  /**
   * NOTE: updateContent가 onBlur로 전달하는 콜백 안에서 실행되어야 한다
   * - setText에서 global state까지 업데이트 한다면 onBlur는 전달하지 않아도 된다
   */
  onBlur?: () => void;
}
const TextEditor = ({ text, setText, onBlur }: TextEditorProps) => {
  useEffect(() => {
    const quill = document.querySelector<HTMLDivElement>(".ql-editor");
    if (quill) {
      quill.focus();
    }
  }, []);

  const handleChange = (value: string) => {
    setText(value);
  };
  return (
    <TextEditorWrapper>
      <ReactQuill onChange={handleChange} value={text} onBlur={onBlur} />
    </TextEditorWrapper>
  );
};

export default TextEditor;
