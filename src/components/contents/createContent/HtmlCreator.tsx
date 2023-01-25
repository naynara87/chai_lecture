import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { changePXtoVW } from "../../../utils/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar from "../../atoms/createAtoms/QuillToolbar";

interface HtmlWrapperProps {
  customCss?: SerializedStyles;
}

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["sans-serif", "yahei", "Noto-sans"];
ReactQuill.Quill.register(Font, true);

const ReactQuillEditor = {
  toolbar: {
    container: "#toolbar",
    handler: {
      submit: () => {
        alert("asdfsfsfsfs");
      },
    },
  },
};

const Page = styled.div`
  color: #000;
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  [data-value="yahei"] {
    ::before {
      content: "yahei" !important;
    }
  }
  [data-value="Noto-sans"] {
    ::before {
      content: "노토 산스 폰트" !important;
    }
  }
`;

const HtmlWrapper = styled.div<HtmlWrapperProps>`
  > h1 {
    font-size: ${changePXtoVW(64)};
  }

  > p {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }

  > h2 {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }

  > h4 {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }
  ${(props) => props.customCss}
`;

interface HtmlCreatorProps extends HtmlWrapperProps {
  html: string;
  onSubmitHtml: (text: string, keyName?: string, index?: number | string) => void;
  keyName?: string;
  index?: number | string;
  id: string;
  focusEditor: string | undefined;
  onClickHtml: () => void;
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
          <ReactQuill value={text} onChange={setText} theme="snow" modules={ReactQuillEditor} />
        </Page>
      );
    } else {
      if (text && text.length > 0) {
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
  }, [id, focusEditor, customCss, html, text, onClickHtml, handleSubmitHtml]);

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
