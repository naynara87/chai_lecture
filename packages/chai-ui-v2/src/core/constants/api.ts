// import { ID } from "../types";

// LMS auth key - header의 authorization에 추가
export const AUTH_KEY = "Basic Y2hpaG9uZzpjaGlob25nMTIjJA==";

// LMS API key - query parameter에 추가
export const API_KEY = "15968aad-ff43-484f-b5b5-b741fda1f521";

// LMS
export const LMS_SAVE_DATA = "/api/edu/add";

// LCMS
export const TOKEN_URL = "/lcms/get-token";

// PHP
export const DELETE_PHP_URL = `api/content-data-destroy`;
export const NAS_UPLOAD_URL = `api/essay-upload`;

// 레슨 데이터(코너 리스트)
// export const getLcmsLessonDataUrl = (lessonId: ID) =>
//   `/lcms/subject/lesson-detail-list/${lessonId}`;

// 코너 데이터(페이지 리스트)
// export const getLcmsSubjectTurnUrl = (turnId: ID) =>
//   `/lcms/subject/turn/${turnId}`;

/* STT */
export const SAVE_STT = "/post_stt/";
export const GET_STT_TOKEN = "/token/";
