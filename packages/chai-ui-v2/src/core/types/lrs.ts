/**
 * LRS Progress draft type
 */
export type ProgressState = {
  lessonId: string;
  isCompleted: boolean;
  corners: CornerProgress[];
};

export type CornerProgress = {
  cornerId: string;
  isCompleted: boolean;
  pages: PageProgress[];
};

export type PageProgress = {
  pageId: string;
  isCompleted: boolean;
  isChecked: boolean;
};

// export const progressStateSample: ProgressState = {
//   lessonId: "lesson-1",
//   isCompleted: false,
//   corners: [
//     {
//       cornerId: "corner-1",
//       isCompleted: false,
//       pages: [
//         {
//           pageId: "page-1",
//           isCompleted: false,
//           isChecked: false,
//         },
//         {
//           pageId: "page-2",
//           isCompleted: false,
//           isChecked: false,
//         },
//       ],
//     },
//     {
//       cornerId: "corner-2",
//       isCompleted: false,
//       pages: [
//         {
//           pageId: "page-3",
//           isCompleted: false,
//           isChecked: false,
//         },
//         {
//           pageId: "page-4",
//           isCompleted: false,
//           isChecked: false,
//         },
//       ],
//     },
//   ],
// };
