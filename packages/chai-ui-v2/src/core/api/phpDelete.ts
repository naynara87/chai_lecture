import { DELETE_PHP_URL } from "../constants";
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
