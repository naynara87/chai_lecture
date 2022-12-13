import { LMS_SAVE_DATA } from "../constants/api";
import { learningLogData } from "../data/dummyData2";
import httpLms from "../lib/axios/httpLms";
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

interface saveLmsDataParams {
  uno: number;
  applId: number;
  courseId: number;
  subjectId: string;
  cornerId: number;
  lessonId: string;
  pageId: number;
  progressRate: number;
  envlCatgYn: number;
  complYn: string;
}

export const saveLmsData = async ({
  uno,
  applId,
  courseId,
  subjectId,
  cornerId,
  lessonId,
  pageId,
  progressRate,
  envlCatgYn,
  complYn,
}: saveLmsDataParams) => {
  const res = await httpLms.post(LMS_SAVE_DATA, {
    uno,
    applId,
    courseId,
    contsId: subjectId,
    lessonId,
    turnId: cornerId,
    pageId,
    progressRate,
    envlCatgYn,
    complYn,
  });
  return res.data;
};
