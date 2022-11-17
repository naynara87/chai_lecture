import { css } from "@emotion/react";
import { colorPalette } from "./colorPalette";

const globalStyle = css`
  /* =================== base =================== */
  html,
  body,
  div,
  p,
  span,
  ul,
  ol,
  dl,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  footer,
  header,
  main,
  section,
  article,
  aside,
  nav,
  [class] {
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 1.15;
    vertical-align: baseline;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    font-family: "Apple SD Gothic", "pretendard", sans-serif;
    letter-spacing: -0.04em;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  html {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colorPalette.backgroundWhite};
  }

  a {
    outline: 0;
    background-color: transparent;
    text-decoration: none;
    color: #222222;
    cursor: pointer;
  }

  ol,
  ul,
  dl,
  li {
    list-style: none;
  }

  textarea {
    resize: none;
  }

  select {
    padding: 5px 10px;
  }

  /* ie 화살표 제거 */
  select::-ms-expand {
    display: none;
  }

  address {
    font-style: normal;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Reset img */
  img {
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 5.2vw;
    color: ${colorPalette.textBoxesTitle};
    font-weight: 700;
  }

  /* =================== fonts =================== */
  /* ---------- pretendard ---------- */
  @font-face {
    font-family: "pretendard";
    font-weight: 400;
    src: url("${process.env.PUBLIC_URL}/fonts/Pretendard-Regular.woff2") format("woff2"),
      url("${process.env.PUBLIC_URL}/fonts/Pretendard-Regular.woff") format("woff"),
      url("${process.env.PUBLIC_URL}/fonts/Pretendard-Regular.otf") format("opentype");
  }
  @font-face {
    font-family: "pretendard";
    font-weight: 600;
    src: url("${process.env.PUBLIC_URL}/fonts/Pretendard-Bold.woff2") format("woff2"),
      url("${process.env.PUBLIC_URL}/fonts/Pretendard-Bold.woff") format("woff"),
      url("${process.env.PUBLIC_URL}/fonts/Pretendard-Bold.otf") format("opentype");
  }
  /* ---------- inter ---------- */
  @font-face {
    font-family: "inter";
    font-weight: 400;
    src: url("${process.env.PUBLIC_URL}/fonts/Inter-Regular.woff2") format("woff2"),
      url("${process.env.PUBLIC_URL}/fonts/Inter-Regular.woff") format("woff"),
      url("${process.env.PUBLIC_URL}/fonts/Inter-Regular.otf") format("opentype");
  }
  @font-face {
    font-family: "inter";
    font-weight: 600;
    src: url("${process.env.PUBLIC_URL}/fonts/Inter-Bold.woff2") format("woff2"),
      url("${process.env.PUBLIC_URL}/fonts/Inter-Bold.woff") format("woff"),
      url("${process.env.PUBLIC_URL}/fonts/Inter-Bold.otf") format("opentype");
  }
`;

export default globalStyle;
