import styled from "@emotion/styled";
import { HtmlContentComponent } from "chai-ui-v2";
import React from "react";
import TextEditor from "../atoms/TextEditor";

const TextViewer = styled.div``;

interface TextEditorViewerProps {
  text: string;
  setText: (text: string) => void;
  isFocused: boolean;
  handleSubmitTextOnBlur?: () => void;
  defaultText?: React.ReactNode;
}
const TextEditorViewer = ({
  text,
  setText,
  isFocused,
  handleSubmitTextOnBlur,
  defaultText = "텍스트를 입력해주세요",
}: TextEditorViewerProps) => {
  return (
    <>
      {!isFocused ? (
        <TextViewer>
          {text ? <HtmlContentComponent html={text} /> : defaultText}
        </TextViewer>
      ) : (
        <TextEditor
          text={text}
          setText={setText}
          onBlur={handleSubmitTextOnBlur}
        />
      )}
    </>
  );
};

export default TextEditorViewer;
