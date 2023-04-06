import { LMS_SAVE_DATA } from "chai-ui";
import { httpLms } from "../lib";

interface saveLmsDataParams {
  uno: number;
  applId: number;
  courseId: number;
  subjectId: number;
  cornerId: number;
  lessonId: number;
  pageId: number;
  progressRate: number;
  envlCatgYn: string;
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.data;
};
