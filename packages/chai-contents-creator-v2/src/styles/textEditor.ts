import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import { TextEditorWrapperProps } from "../components/atoms/TextEditor";
import { css } from "@emotion/react";
import { rem } from "../utils/font";

const QlSizeHasFontSize = css`
  .ql-size {
    .ql-picker-options {
      height: 100px;
      overflow: scroll;
      overflow-x: hidden;
    }
    [data-value="16px"] {
      ::before {
        content: "16px" !important;
      }
    }
    [data-value="20px"] {
      ::before {
        content: "20px" !important;
      }
    }
    [data-value="22px"] {
      ::before {
        content: "22px" !important;
      }
    }
    [data-value="24px"] {
      ::before {
        content: "24px" !important;
      }
    }
    [data-value="26px"] {
      ::before {
        content: "26px" !important;
      }
    }
    [data-value="28px"] {
      ::before {
        content: "28px" !important;
      }
    }
    [data-value="32px"] {
      ::before {
        content: "32px" !important;
      }
    }
    [data-value="36px"] {
      ::before {
        content: "36px" !important;
      }
    }
    [data-value="40px"] {
      ::before {
        content: "40px" !important;
      }
    }
    [data-value="45px"] {
      ::before {
        content: "45px" !important;
      }
    }
    [data-value="48px"] {
      ::before {
        content: "48px" !important;
      }
    }
    [data-value="50px"] {
      ::before {
        content: "50px" !important;
      }
    }
    [data-value="56px"] {
      ::before {
        content: "56px" !important;
      }
    }
    [data-value="60px"] {
      ::before {
        content: "60px" !important;
      }
    }
    [data-value="64px"] {
      ::before {
        content: "64px" !important;
      }
    }
    [data-value="70px"] {
      ::before {
        content: "70px" !important;
      }
    }
    [data-value="80px"] {
      ::before {
        content: "80px" !important;
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
