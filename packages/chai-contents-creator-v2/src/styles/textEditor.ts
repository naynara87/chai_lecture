import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import { TextEditorWrapperProps } from "../components/atoms/TextEditor";
import { css } from "@emotion/react";
import { rem } from "../utils/font";

const QlSizeHasFontSize = css`
  .ql-size {
    .ql-picker-options {
      height: 300px;
      overflow: scroll;
      overflow-x: hidden;
    }
    [data-value="2vmin"] {
      ::before {
        content: "20px" !important;
      }
    }
    [data-value="2.2vmin"] {
      ::before {
        content: "22px" !important;
      }
    }
    [data-value="2.4vmin"] {
      ::before {
        content: "24px" !important;
      }
    }
    [data-value="2.6vmin"] {
      ::before {
        content: "26px" !important;
      }
    }
    [data-value="2.8vmin"] {
      ::before {
        content: "28px" !important;
      }
    }
    [data-value="3.2vmin"] {
      ::before {
        content: "32px" !important;
      }
    }
    [data-value="3.6vmin"] {
      ::before {
        content: "36px" !important;
      }
    }
    [data-value="4vmin"] {
      ::before {
        content: "40px" !important;
      }
    }
    [data-value="4.5vmin"] {
      ::before {
        content: "45px" !important;
      }
    }
    [data-value="4.8vmin"] {
      ::before {
        content: "48px" !important;
      }
    }
    [data-value="5vmin"] {
      ::before {
        content: "50px" !important;
      }
    }
    [data-value="5.6vmin"] {
      ::before {
        content: "56px" !important;
      }
    }
    [data-value="6vmin"] {
      ::before {
        content: "60px" !important;
      }
    }
    [data-value="6.4vmin"] {
      ::before {
        content: "64px" !important;
      }
    }
    [data-value="7vmin"] {
      ::before {
        content: "70px" !important;
      }
    }
  }
`;

const QlSizeHasNotFontSize = css`
  .ql-size {
    .ql-picker-options {
      height: 100px;
      overflow: scroll;
      overflow-x: hidden;
    }
    [data-value=${rem(16)}] {
      ::before {
        content: "16px" !important;
      }
    }
    [data-value=${rem(20)}] {
      ::before {
        content: "20px" !important;
      }
    }
    [data-value=${rem(22)}] {
      ::before {
        content: "22px" !important;
      }
    }
    [data-value=${rem(24)}] {
      ::before {
        content: "24px" !important;
      }
    }
    [data-value=${rem(26)}] {
      ::before {
        content: "26px" !important;
      }
    }
    [data-value=${rem(28)}] {
      ::before {
        content: "28px" !important;
      }
    }
    [data-value=${rem(32)}] {
      ::before {
        content: "32px" !important;
      }
    }
    [data-value=${rem(36)}] {
      ::before {
        content: "36px" !important;
      }
    }
    [data-value=${rem(40)}] {
      ::before {
        content: "40px" !important;
      }
    }
    [data-value=${rem(45)}] {
      ::before {
        content: "45px" !important;
      }
    }
    [data-value=${rem(48)}] {
      ::before {
        content: "48px" !important;
      }
    }
    [data-value=${rem(50)}] {
      ::before {
        content: "50px" !important;
      }
    }
    [data-value=${rem(56)}] {
      ::before {
        content: "56px" !important;
      }
    }
    [data-value=${rem(60)}] {
      ::before {
        content: "60px" !important;
      }
    }
    [data-value=${rem(64)}] {
      ::before {
        content: "64px" !important;
      }
    }
    [data-value=${rem(70)}] {
      ::before {
        content: "70px" !important;
      }
    }
    [data-value=${rem(80)}] {
      ::before {
        content: "80px" !important;
      }
    }
  }
`;

export const TextEditorWrapper = styled.div<TextEditorWrapperProps>`
  width: 100%;
  background-color: ${colorPalette.white};

  .ql-container {
    ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}px;` : "")}
  }
  .ql-editor {
    ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}px;` : "")}
  }
  .quill__custom {
    ${({ editorCss }) => editorCss}
  }
  .ql-formats {
    margin-right: 0 !important;
  }

  [data-value="timesRoman"] {
    font-family: "timesRoman", "serif";
    ::before {
      content: "TimesRoman" !important;
    }
  }

  ${({ hasFontSize }) => {
    return hasFontSize ? QlSizeHasFontSize : QlSizeHasNotFontSize;
  }}
`;
