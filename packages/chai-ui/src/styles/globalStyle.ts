import { css } from "@emotion/react";
import { headerHeightNormal } from "../constants/layout";
import { changePXtoVW } from "../utils/styles";
import { colorPalette } from "./colorPalette";

const getPublicUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.REACT_APP_BASE_URL;
  } else {
    return "";
  }
};

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
  nav {
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 1.4;
    vertical-align: baseline;
    box-sizing: border-box;
    /* font-size: 100%; */
    /* font: inherit; */
    font-family: "Apple SD Gothic", "pretendard", sans-serif;
    /* letter-spacing: -0.04em; */
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
  }

  html {
    font-size: 16px;
    /* scroll-behavior: smooth; */
  }

  /* body::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  } */

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

  h1 {
    font-size: ${changePXtoVW(42)};
    line-height: 1.5;
  }

  h2 {
    font-size: ${changePXtoVW(38)};
    line-height: 1.5;
  }

  h3 {
    font-size: ${changePXtoVW(30)};
    line-height: 1.5;
  }

  h4 {
    font-size: ${changePXtoVW(28)};
    line-height: 1.5;
  }

  h5 {
    font-size: ${changePXtoVW(24)};
    line-height: 1.5;
  }

  .c1 {
    color: ${colorPalette.c1tag};
  }

  .c2 {
    color: ${colorPalette.c2tag};
  }

  .c3 {
    color: ${colorPalette.c3tag};
  }

  .c4 {
    color: ${colorPalette.c4tag};
  }

  div[role="presentation"] {
    z-index: 5;
    /* top: ${headerHeightNormal}; */
  }

  /* =================== fonts =================== */
  /* ---------- pretendard ---------- */
  @font-face {
    font-family: "pretendard";
    font-weight: 400;
    src: url("${getPublicUrl()}/fonts/Pretendard-Regular.woff2") format("woff2"),
      url("${getPublicUrl()}/fonts/Pretendard-Regular.woff") format("woff"),
      url("${getPublicUrl()}/fonts/Pretendard-Regular.otf") format("opentype");
  }
  /* @font-face {
    font-family: "pretendard";
    font-weight: 600;
    src: url("${getPublicUrl()}/fonts/Pretendard-Bold.woff2") format("woff2"),
      url("${getPublicUrl()}/fonts/Pretendard-Bold.woff") format("woff"),
      url("${getPublicUrl()}/fonts/Pretendard-Bold.otf") format("opentype");
  } */
  /* ---------- inter ---------- */
  @font-face {
    font-family: "inter";
    font-weight: 400;
    src: url("${getPublicUrl()}/fonts/Inter-Regular.woff2") format("woff2"),
      url("${getPublicUrl()}/fonts/Inter-Regular.woff") format("woff"),
      url("${getPublicUrl()}/fonts/Inter-Regular.otf") format("opentype");
  }
  @font-face {
    font-family: "inter";
    font-weight: 600;
    src: url("${getPublicUrl()}/fonts/Inter-Bold.woff2") format("woff2"),
      url("${getPublicUrl()}/fonts/Inter-Bold.woff") format("woff"),
      url("${getPublicUrl()}/fonts/Inter-Bold.otf") format("opentype");
  }

  /* ******************************************************************************   Tostify  */

  .Toastify__toast {
    padding: 0 !important;
  }

  .Toastify__toast-body {
    padding: 0 !important;
    margin: 0;
  }

  :root {
    --toastify-toast-min-height: 0 !important;
  }

  .btn-wrap {
    margin-top: ${changePXtoVW(64)};
    text-align: center;

    > button:not(:first-of-type) {
      margin-left: ${changePXtoVW(24)};
    }
  }
`;

export default globalStyle;
