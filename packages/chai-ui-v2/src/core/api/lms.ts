import { LMS_SAVE_DATA } from "../constants";
import { httpLms } from "../lib";
import { ProgressData } from "../types";

export const saveLmsData = async ({
  uno,
  applId,
  courseId,
  contsId,
  turnId,
  lessonId,
  pageId,
  progressRate,
  envlCatgYn,
  complYn,
}: ProgressData) => {
  const res = await httpLms.post(LMS_SAVE_DATA, {
    uno,
    applId,
    courseId,
    contsId,
    lessonId,
    turnId,
    pageId,
    progressRate,
    envlCatgYn,
    complYn,
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.data;
};
