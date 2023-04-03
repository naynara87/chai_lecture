import { ContextDetail, XapiIndicators } from "chai-ui-v2";

export const object_context: XapiIndicators = {
  "https://profile.caihong.co.kr/content-management/course/local-content-id": 33, // 레슨 id
  "https://profile.caihong.co.kr/content-management/course/course-id": 123,
  "https://profile.caihong.co.kr/content-management/course/course-name":
    "개발콘텐츠",
  "https://profile.caihong.co.kr/content-management/course/course-name/chinese":
    "开发内容",
  "https://profile.caihong.co.kr/content-management/course/course-name/english":
    "development content",
  "https://profile.caihong.co.kr/content-management/course/course-name/spanish":
    "contenido de desarrollo",
  "https://profile.caihong.co.kr/content-management/course/course-type-id": 10,
  "https://profile.caihong.co.kr/content-management/course/course-type-name":
    "빨강",
  "https://profile.caihong.co.kr/content-management/course/image-id":
    "y1wbi6UjSRGxzCAPgZyKwujU",
  "https://profile.caihong.co.kr/content-management/course/image-url":
    "https://d3ck2c76fu5pug.cloudfront.net/assets/4ilM8sOn2dbqgxC7JbwlYcUN/tD0GrqAJnWmkRgWYgvgT20NSwV9NiPJR.jpeg",
  "https://profile.caihong.co.kr/content-management/course/lessons/lesson-name":
    "1레슨",
  "https://profile.caihong.co.kr/content-management/course/lessons/lesson-id": 123,
  "https://profile.caihong.co.kr/content-management/course/lessons/lesson-type-code": 10,
  "https://profile.caihong.co.kr/content-management/course/lessons": 10,
  "https://profile.caihong.co.kr/content-management/course/lessons/lesson": 3,
};
export const result_extensions: XapiIndicators = {
  // todo ms 통합플레이어에서 가져와야함
  "https://profile.caihong.co.kr/content-management/course/lessons/part-name":
    "복습",
  "https://profile.caihong.co.kr/content-management/course/lessons/part-id": 70,
  "https://profile.caihong.co.kr/content-management/course/lessons/pages/page": 4, // 현재페이지라 js 구성 필요
  "https://profile.caihong.co.kr/content-management/course/lessons/pages/page-id": 123, // 현재페이지라 js 구성 필요

  // todo ms lms에서 데이터를 받아와야 함
  "https://profile.caihong.co.kr/content-management/course/lessons/pages": 20, // 총페이지 수
  "https://profile.caihong.co.kr/content-management/course/lessons/pages/page-name":
    "1-1-2페이지", // 못구함...
  "https://profile.caihong.co.kr/content-management/course/lessons/pages/page-template-code": 10,
  "https://profile.caihong.co.kr/content-management/course/lessons/pages/page-template-name":
    "TP01",
  "https://profile.caihong.co.kr/content-management/course/lessons/pages/study-type-code": 10,
  "https://profile.caihong.co.kr/content-management/course/lessons/pages/page-style-code": 31,
  "https://profile.caihong.co.kr/content-management/course/lessons/pages/page-area-code":
    "a1",
};

export const context_details: ContextDetail = {
  registration: "cf3ca788-d7cc-464e-a654-a98a777d2372",
  revision: "1.0",
  contextActivities: {
    category: [
      {
        id: "https://profile.caihong.co.kr/xapi/profile/course",
        objectType: "Activity",
      },
    ],
    parent: [
      {
        definition: {
          description: {
            "en-US": "과정 설명",
          },
          name: {
            "en-US": "과정명",
          },
        },
        id: "https://profile.caihong.co.kr/content-management/course/1234",
        objectType: "Activity",
      },
    ],
  },
};

export const extension_details: XapiIndicators = {
  "https://profile.caihong.co.kr/content-management/course/subject-name":
    "중국어",
  "https://profile.caihong.co.kr/content-management/course/subject-id": 10,
  "https://profile.caihong.co.kr/content-management/course/curriculum-name":
    "유패스 중고등",
  "https://profile.caihong.co.kr/content-management/course/curriculum-id": 20,
  "https://profile.caihong.co.kr/content-management/course/recommendage-name":
    "유아",
  "https://profile.caihong.co.kr/content-management/course/recommendage-id": 30,
  "https://profile.caihong.co.kr/content-management/course/learning-type-name":
    "온라인 강의",
  "https://profile.caihong.co.kr/content-management/course/learning-type-id": 40,
  "https://profile.caihong.co.kr/content-management/course/difficulty-name":
    "최상",
  "https://profile.caihong.co.kr/content-management/course/difficulty-id": "d1",
  "https://profile.caihong.co.kr/content-management/course/year": 2023,
  "https://profile.caihong.co.kr/content-management/course/rating-name":
    "HSK 1급",
  "https://profile.caihong.co.kr/content-management/course/rating-id": 10,
  "https://profile.caihong.co.kr/content-management/course/publiccourse-name":
    "1학기",
  "https://profile.caihong.co.kr/content-management/course/publiccourse-id": 20,
  "https://profile.caihong.co.kr/content-management/course/registration-date":
    "2022.12.1 18:00",
  "https://profile.caihong.co.kr/course-management/course/education-type-name":
    "디지털",
  "https://profile.caihong.co.kr/course-management/course/education-type-code":
    "ET01",
  "https://profile.caihong.co.kr/course-management/course/course-name":
    "[디지털] 과정 101",
  "https://profile.caihong.co.kr/course-management/course/course-name-id": 101,
  "https://profile.caihong.co.kr/course-management/course/course-code":
    "CSR101",
  "https://profile.caihong.co.kr/course-management/course/classification-name":
    "주니어",
  "https://profile.caihong.co.kr/course-management/course/classification-code":
    "B001",
  "https://profile.caihong.co.kr/course-management/course/category-name":
    "자격증",
  "https://profile.caihong.co.kr/course-management/course/category-code":
    "PC01",
  "https://profile.caihong.co.kr/course-management/course/recommendage-name":
    "유아, 초등",
  "https://profile.caihong.co.kr/course-management/course/recommendage-code":
    "0005, 0002",
  "https://profile.caihong.co.kr/course-management/course/period": 10,
  "https://profile.caihong.co.kr/course-management/course/use": "사용",
  "https://profile.caihong.co.kr/course-management/course/registration-date":
    "2022.12.8 14:58",
  "https://profile.caihong.co.kr/product-management/course/product-code":
    "CH00241",
  "https://profile.caihong.co.kr/product-management/course/producttype-code":
    "PGC01",
  "https://profile.caihong.co.kr/product-management/course/classification-name":
    "주니어",
  "https://profile.caihong.co.kr/product-management/course/classification-code":
    "B001",
  "https://profile.caihong.co.kr/product-management/course/category-name":
    "자격증",
  "https://profile.caihong.co.kr/product-management/course/category-code":
    "PC01",
  "https://profile.caihong.co.kr/product-management/course/education-type-name":
    "방문",
  "https://profile.caihong.co.kr/product-management/course/education-type-code":
    "ET01",
  "https://profile.caihong.co.kr/product-management/course/recommendage-name":
    "유아, 초등",
  "https://profile.caihong.co.kr/product-management/course/recommendage-code":
    "0005, 0002",
  "https://profile.caihong.co.kr/product-management/course/product-name":
    "[결합] 학습용 결합상품 01",
  "https://profile.caihong.co.kr/product-management/course/product-id": 42,
  "https://profile.caihong.co.kr/product-management/course/pay": "결제상품",
  "https://profile.caihong.co.kr/product-management/course/period-name":
    "1개월",
  "https://profile.caihong.co.kr/product-management/course/period-code": 1,
  "https://profile.caihong.co.kr/product-management/course/display": "진열안함",
  "https://profile.caihong.co.kr/product-management/course/sale": "판매안함",
  "https://profile.caihong.co.kr/product-management/course/price": 50000,
  "https://profile.caihong.co.kr/product-management/course/review-period": 180,
  "https://profile.caihong.co.kr/product-management/course/registration-date":
    "2022.12.8 14:58",
  "https://profile.caihong.co.kr/content-management/course/lessons/pages": 20, // 총 페이지 수
};
