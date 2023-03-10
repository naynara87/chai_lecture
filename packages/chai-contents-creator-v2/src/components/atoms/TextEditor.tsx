import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  text: string;
  setText: (text: string) => void;
}
const TextEditor = ({ text, setText }: TextEditorProps) => {
  const handleChange = (value: string) => {
    // todo : 컴포넌트 데이터 변경하기 - debounce 적용 고려?
    setText(value);
  };
  return (
    <div>
      <ReactQuill onChange={handleChange} />
    </div>
  );
};

export default TextEditor;
