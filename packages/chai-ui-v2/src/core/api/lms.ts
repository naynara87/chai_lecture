import { LMS_SAVE_DATA } from "../constants";
import { httpLms } from "../lib";
import { ID } from "../types";

export interface saveLmsDataParams {
  uno: number;
  applId: number;
  courseId: number;
  contsId: number;
  cornerId: ID;
  lessonId: ID;
  pageId: ID;
  progressRate: string;
  envlCatgYn: string;
  complYn: string;
}

export const saveLmsData = async ({
  uno,
  applId,
  courseId,
  contsId,
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
    contsId,
    lessonId,
    turnId: cornerId,
    pageId,
    progressRate,
    envlCatgYn,
    complYn,
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.data;
};
