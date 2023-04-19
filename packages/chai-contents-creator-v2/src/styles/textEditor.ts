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
    [data-value="0.8vw"] {
      ::before {
        content: "16px" !important;
      }
    }
    [data-value="1vw"] {
      ::before {
        content: "20px" !important;
      }
    }
    [data-value="1.1vw"] {
      ::before {
        content: "22px" !important;
      }
    }
    [data-value="1.2vw"] {
      ::before {
        content: "24px" !important;
      }
    }
    [data-value="1.3vw"] {
      ::before {
        content: "26px" !important;
      }
    }
    [data-value="1.4vw"] {
      ::before {
        content: "28px" !important;
      }
    }
    [data-value="1.6vw"] {
      ::before {
        content: "32px" !important;
      }
    }
    [data-value="1.8vw"] {
      ::before {
        content: "36px" !important;
      }
    }
    [data-value="2vw"] {
      ::before {
        content: "40px" !important;
      }
    }
    [data-value="2.25vw"] {
      ::before {
        content: "45px" !important;
      }
    }
    [data-value="2.4vw"] {
      ::before {
        content: "48px" !important;
      }
    }
    [data-value="2.5vw"] {
      ::before {
        content: "50px" !important;
      }
    }
    [data-value="2.8vw"] {
      ::before {
        content: "56px" !important;
      }
    }
    [data-value="3vw"] {
      ::before {
        content: "60px" !important;
      }
    }
    [data-value="3.2vw"] {
      ::before {
        content: "64px" !important;
      }
    }
    [data-value="3.5vw"] {
      ::before {
        content: "70px" !important;
      }
    }
    [data-value="4vw"] {
      ::before {
        content: "80px" !important;
      }
    }
  }
`;
