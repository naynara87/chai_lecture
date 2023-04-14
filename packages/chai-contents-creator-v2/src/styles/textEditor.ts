import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import { TextEditorWrapperProps } from "../components/atoms/TextEditor";

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

  .ql-size {
    .ql-picker-options {
      height: 100px;
      overflow: scroll;
      overflow-x: hidden;
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
