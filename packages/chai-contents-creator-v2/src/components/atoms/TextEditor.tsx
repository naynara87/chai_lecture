import { SerializedStyles } from "@emotion/react";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TextEditorWrapper } from "../../styles/textEditor";

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["timesRoman"]; // , "yahei"
ReactQuill.Quill.register(Font, true);
const Size = ReactQuill.Quill.import("attributors/style/size");
Size.whitelist = [
  "20px",
  "22px",
  "24px",
  "26px",
  "28px",
  "36px",
  "40px",
  "45px",
  "48px",
  "56px",
  "64px",
  "70px",
  "80px",
]; // , "yahei"
ReactQuill.Quill.register(Size, true);

const Align = ReactQuill.Quill.import("formats/align");
Align.whitelist = ["left", "center", "right", "justify"];
var Icons = ReactQuill.Quill.import("ui/icons");
Icons.align["left"] = Icons.align[""];

export interface TextEditorWrapperProps {
  minHeight?: number;
  editorCss?: SerializedStyles;
}
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

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.relatedTarget || !event.relatedTarget.className.includes("ql")) {
      onBlur && onBlur();
    }
  };

  return (
    <TextEditorWrapper
      minHeight={minHeight}
      editorCss={editorCss}
      onBlur={handleBlur}
    >
      <ReactQuill
        onChange={handleChange}
        value={innerText}
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
            [{ size: Size.whitelist }],
            [{ align: ["left", "center", "right", "justify"] }],
          ],
        }}
      />
    </TextEditorWrapper>
  );
};

export default TextEditor;
