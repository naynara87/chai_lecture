import { SerializedStyles } from "@emotion/react";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TextEditorWrapper } from "../../styles/textEditor";
import { useToast } from "chai-ui-v2";
// import { rem } from "../../utils/font";

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["timesRoman"];
ReactQuill.Quill.register(Font, true);
const Size = ReactQuill.Quill.import("attributors/style/size");
Size.whitelist = [
  "16px",
  "20px",
  "22px",
  "24px",
  "26px",
  "28px",
  "32px",
  "36px",
  "40px",
  "45px",
  "48px",
  "50px",
  "56px",
  "60px",
  "64px",
  "70px",
  "80px",
];
ReactQuill.Quill.register(Size, true);

const Align = ReactQuill.Quill.import("formats/align");
Align.whitelist = ["left", "center", "right", "justify"];
var Icons = ReactQuill.Quill.import("ui/icons");
Icons.align["left"] = Icons.align[""];

export interface TextEditorWrapperProps {
  minHeight?: number;
  editorCss?: SerializedStyles;
  hasFontSize?: boolean;
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
  hasFontSize = true,
}: TextEditorProps) => {
  useEffect(() => {
    const quill = document.querySelector<HTMLDivElement>(".ql-editor");
    if (quill) {
      quill.focus();
    }
  }, []);

  const { addToast } = useToast();

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

  useEffect(() => {
    if (hasFontSize) {
      return;
    }
    const fontSizeSelector =
      document.querySelector<HTMLDivElement>(".ql-size")!;
    const fontSizeBox = fontSizeSelector.parentElement!;
    fontSizeBox.style.display = "none";
    // NOTE gth 만약 프론트에서 적용된 폰트 사이즈를 제거하려면 아래와 같이 적용 가능합니다
    // Size.whitelist = [
    //   rem(16),
    //   rem(20),
    //   rem(22),
    //   rem(24),
    //   rem(26),
    //   rem(28),
    //   rem(32),
    //   rem(36),
    //   rem(40),
    //   rem(45),
    //   rem(48),
    //   rem(50),
    //   rem(56),
    //   rem(60),
    //   rem(64),
    //   rem(70),
    //   rem(80),
    // ];
    // addToast("에디터가 보이지 않는다면 다시 클릭해주세요.");
  }, [hasFontSize, addToast]);

  return (
    <TextEditorWrapper
      minHeight={minHeight}
      editorCss={editorCss}
      onBlur={handleBlur}
      hasFontSize={hasFontSize}
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
        preserveWhitespace
      />
    </TextEditorWrapper>
  );
};

export default TextEditor;
