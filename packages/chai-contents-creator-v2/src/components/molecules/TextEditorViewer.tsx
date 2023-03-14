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
}
const TextEditorViewer = ({
  text,
  setText,
  isFocused,
  handleSubmitTextOnBlur,
}: TextEditorViewerProps) => {
  return (
    <>
      {!isFocused ? (
        <TextViewer>
          {text ? (
            <HtmlContentComponent html={text} />
          ) : (
            "텍스트를 입력해주세요"
          )}
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
