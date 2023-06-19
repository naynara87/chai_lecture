import { DELETE_PHP_URL, NAS_UPLOAD_URL } from "../constants";
import httpPhp from "../lib/axios/httpPhp";
import { DeleteQuestionData } from "../types";

/**
 * NOTE kjw 문제템플릿 다시하기 api
 */
export const deleteQuestion = async (
  contentIds: (string | undefined)[],
  userId: string,
) => {
  const res = await httpPhp.delete<DeleteQuestionData>(DELETE_PHP_URL, {
    data: {
      content_id: contentIds,
      user_id: userId,
    },
  });
  return res.data;
};

interface NasAddFileResponse {
  url: string;
}

export const nasAddFile = async (formData: FormData) => {
  const res = await httpPhp.post<NasAddFileResponse>(NAS_UPLOAD_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
