export type ProgressData = {
  uno: number;
  applId: number;
  contsId: number;
  courseId: number;
  lessonId: string;
  cornerId: string;
  pageId: string;
  progressRate: number;
  envlCatgYn: string;
  envlScr?: number;
  complYn: "Y" | "N";
};
