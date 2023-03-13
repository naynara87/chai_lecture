import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  text: string;
  setText: (text: string) => void;
  /**
   * NOTE: updateContent가 onBlur로 전달하는 콜백 안에서 실행되어야 한다
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
    <div>
      <ReactQuill onChange={handleChange} value={text} onBlur={onBlur} />
    </div>
  );
};

export default TextEditor;
