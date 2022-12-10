import { learningLogData } from "../data/dummyData2";
import { ID } from "../types/appData";

/**
 * 학습 이력 조회
 * @deprecated
 */
export const getLearningLog = async (lessonId: ID) => {
  // const res = await httpLcms.get<LearningLogData>("get_learningLog_url", {
  //   params: {
  //     apiKey: API_KEY,
  //     lessonId,
  //   },
  // });
  // return res.data;
  return learningLogData;
};
