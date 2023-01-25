// import { CornerListData } from "../types/api/lcms";
import { LearningLogData } from "../types/api/lms";

// 과정(course, subject) > 레슨(lesson) > 회차(corner, turn) > 페이지(page)
// export const lessonData: CornerListData = {
//   body: {
//     meta: {
//       subjectId: 1,
//       courseId: 1,
//       courseName: "빨강",
//       lessonId: 1,
//       lessonName: "Lesson 1",
//     },
//     data: [
//       {
//         turnId: 1,
//         turnName: "복습",
//         introduction: {
//           title: "학습 목표",
//           subTitle: "지난 시간에 배운 내용을 복습해 봐요.",
//           contentsTitle: "학습 내용",
//           contents: ["지난 시간 복습 상세 사항"],
//           confirmButtonText: "확인",
//         },
//         pages: [1, 2, 3],
//       },
//       {
//         turnId: 2,
//         turnName: "학습 1",
//         introduction: {
//           title: "학습 목표",
//           subTitle: "이번 시간에 배울 내용을 알아봐요.",
//           contentsTitle: "학습 내용",
//           contents: ["학습 상세 사항"],
//           confirmButtonText: "확인",
//         },
//         pages: [4, 5, 6],
//       },
//       {
//         turnId: 1,
//         turnName: "학습 2",
//         introduction: {
//           title: "학습 목표",
//           subTitle: "이번 시간에 배울 내용을 알아봐요.",
//           contentsTitle: "학습 내용",
//           contents: ["학습 상세 사항"],
//           confirmButtonText: "확인",
//         },
//         pages: [1, 2, 3],
//       },
//       {
//         turnId: 2,
//         turnName: "학습 3",
//         introduction: {
//           title: "학습 목표",
//           subTitle: "이번 시간에 배울 내용을 알아봐요.",
//           contentsTitle: "학습 내용",
//           contents: ["학습 상세 사항"],
//           confirmButtonText: "확인",
//         },
//         pages: [4, 5, 6],
//       },
//       {
//         turnId: 1,
//         turnName: "회화",
//         introduction: {
//           title: "학습 목표",
//           subTitle: "이번 시간에 배울 내용을 알아봐요.",
//           contentsTitle: "학습 내용",
//           contents: ["학습 상세 사항"],
//           confirmButtonText: "확인",
//         },
//         pages: [1, 2, 3],
//       },
//       {
//         turnId: 2,
//         turnName: "문화",
//         introduction: {
//           title: "학습 목표",
//           subTitle: "이번 시간에 배울 내용을 알아봐요.",
//           contentsTitle: "학습 내용",
//           contents: ["학습 상세 사항"],
//           confirmButtonText: "확인",
//         },
//         pages: [4, 5, 6],
//       },
//       {
//         turnId: 1,
//         turnName: "연습문제",
//         introduction: {
//           title: "학습 목표",
//           subTitle: "이번 시간에 배울 내용을 알아봐요.",
//           contentsTitle: "학습 내용",
//           contents: ["학습 상세 사항"],
//           confirmButtonText: "확인",
//         },
//         pages: [1, 2, 3],
//       },
//     ],
//   },
//   code: 200,
//   message: "success",
// };

/**
 * 학습 이력 조회 데이터
 */
export const learningLogData: LearningLogData = {
  uno: 1,
  progressRate: 10,
  applId: 1,
  subjectId: 1,
  courseId: 1,
  lessonId: 1,
  turnId: 1,
  pageId: 1,
};
