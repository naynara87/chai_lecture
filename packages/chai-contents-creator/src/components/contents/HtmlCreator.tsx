import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { HtmlWrapper } from "chai-ui";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar from "../atoms/QuillToolbar";

interface HtmlWrapperProps {
  customCss?: SerializedStyles;
}

// const Font = ReactQuill.Quill.import("formats/font");
// Font.whitelist = ["sans-serif", "yahei", "Noto-sans"];
// ReactQuill.Quill.register(Font, true);

const ReactQuillEditor = {
  toolbar: {
    container: "#toolbar",
  },
};

const Page = styled.div`
  color: #000;
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
`;

interface HtmlCreatorProps extends HtmlWrapperProps {
  html: string;
  onSubmitHtml: (text: string, keyName?: string, index?: number) => void;
  keyName?: string;
  index?: number;
  id: string;
  focusEditor: string | undefined;
  onClickHtml: () => void;
  textMaxLength: number;
}

const HtmlCreator = ({
  html,
  customCss,
  onSubmitHtml,
  keyName,
  index,
  id,
  focusEditor,
  onClickHtml,
  textMaxLength,
}: HtmlCreatorProps) => {
  const [text, setText] = useState(html);

  useEffect(() => {
    setText(html);
  }, [html]);

  const handleSubmitHtml = useCallback(() => {
    if (text.length > 0) {
      setText(text);
      onSubmitHtml(text, keyName, index);
    }
  }, [index, text, keyName, onSubmitHtml]);

  const contents = useMemo(() => {
    if (id === focusEditor) {
      return (
        <Page
          onBlur={() => {
            handleSubmitHtml();
          }}
        >
          <QuillToolbar />
          <ReactQuill
            value={text}
            onChange={(event) => {
              setText(event);
            }}
            onKeyDown={(event) => {
              if (
                textMaxLength !== undefined &&
                event.target.textContent.length > textMaxLength - 1 &&
                event.key !== "Backspace"
              ) {
                event.preventDefault();
              }
            }}
            theme="snow"
            modules={ReactQuillEditor}
          />
        </Page>
      );
    } else {
      if (text && text.replace(/<[^>]*>?/g, "").length > 0) {
        return (
          <HtmlWrapper
            dangerouslySetInnerHTML={{ __html: html }}
            customCss={customCss}
            onClick={onClickHtml}
          ></HtmlWrapper>
        );
      } else {
        return <div onClick={onClickHtml}>텍스트를 입력해주세요.</div>;
      }
    }
  }, [
    id,
    focusEditor,
    customCss,
    html,
    text,
    onClickHtml,
    handleSubmitHtml,
    textMaxLength,
  ]);

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {contents}
    </div>
  );
};

export default HtmlCreator;
