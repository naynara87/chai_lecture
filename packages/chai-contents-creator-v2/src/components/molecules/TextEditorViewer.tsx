import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { HtmlContentComponent } from "chai-ui-v2";
import React from "react";
import TextEditor from "../atoms/TextEditor";

interface TextViewerProps {
  textViewerCss?: SerializedStyles;
}
const TextViewer = styled.div<TextViewerProps>`
  ${({ textViewerCss }) => textViewerCss};
`;

interface TextEditorViewerProps extends TextViewerProps {
  text: string;
  setText: (text: string) => void;
  isFocused: boolean;
  handleSubmitTextOnBlur?: () => void;
  defaultText?: React.ReactNode;
  editorMinHeight?: number;
  editorCss?: SerializedStyles;
  limitTextLength?: number;
  hasFontSize?: boolean;
}
const TextEditorViewer = ({
  text,
  setText,
  isFocused,
  handleSubmitTextOnBlur,
  textViewerCss,
  defaultText = "텍스트를 입력해주세요",
  editorMinHeight,
  editorCss,
  limitTextLength,
  hasFontSize,
}: TextEditorViewerProps) => {
  return (
    <>
      {!isFocused ? (
        <TextViewer textViewerCss={textViewerCss}>
          {text ? <HtmlContentComponent html={text} /> : defaultText}
        </TextViewer>
      ) : (
        <TextEditor
          text={text}
          setText={setText}
          onBlur={handleSubmitTextOnBlur}
          minHeight={editorMinHeight}
          editorCss={editorCss}
          limitTextLength={limitTextLength}
          hasFontSize={hasFontSize}
        />
      )}
    </>
  );
};

export default TextEditorViewer;
