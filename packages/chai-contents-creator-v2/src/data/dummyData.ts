import { PageListDataResponse } from "chai-ui-v2";

export const DUMMY_DATA: PageListDataResponse = {
  code: "200",
  message: 200,
  body: {
    // 복습 코너 메타 정보
    meta: {
      id: 11,
      lessonId: 1,
    },
    // 복습 page 리스트
    data: [
      {
        page_id: "b7a77db1-9417-4295-abc1-a2314cfdb149",
        contents_uuid: "e1dbafba-816d-4442-9d12-9ce13780f94e",
        pageArea_type: "a4",
        pageStyle_code: "12",
        contents_type: "10",
        contents_data:
          '{"id": "627ea773-940a-4ad4-a667-9b5c39a6222a", "data": {"id": 1, "type": "Template01", "contents": [{"id": "84b95697-6fa3-4f3c-a8b7-7792e2665c2e", "data": {"text": "<p class=\\"ql-align-center\\"><span style=\\"\\">지난 레슨의 학습 내용을 잘 기억하고 있는지 확인해 볼까요?</span></p>", "character": {"src": ""}}, "type": "cornerGuideCharacter"}]}, "name": "단어 퀴즈", "type": "singlePage"}',
      },
    ],
  },
};
