import { LessonData } from "../types";

export const v2LessonData: LessonData = {
  // 레슨 메타 정보
  meta: {
    id: 1,
    name: "Lesson 1",
    courseId: 1,
    courseName: "차이홍(샘플데이터)-빨강",
  },
  // 코너 리스트
  data: [],
};

export const v2CornerData = {
  // 코너 메타 정보
  meta: {
    id: 11,
    name: "학습1",
    lessonId: 1,
    lessonName: "Lesson 1",
    courseId: 1,
    courseName: "차이홍(샘플데이터)-빨강",
  },
  // chapter 리스트
  data: [],
};

export const v1LessonDataServer = {
  body: {
    meta: {
      lessonId: 1,
      lessonName: "Lesson 1",
      subjectId: 1,
      subjectName: "차이홍(샘플데이터)-빨강",
      lessonTpCd: 10,
    },
    data: [
      {
        turnId: 1,
        turnName: "학습1",
        introduction: {
          title: "학습 목표",
          subTitle: "중국어 개요, 성조, 운모를 배워 봅시다. ",
          contentsTitle: "학습 내용",
          contents: ["중국어 개요"],
          confirmButtonText: "확인",
        },
        pages: [1, 2, 3, 4, 5, 6],
      },
      {
        turnId: 2,
        turnName: "학습2",
        introduction: {
          title: "학습 목표",
          subTitle: "중국어 개요, 성조, 운모를 배워 봅시다. ",
          contentsTitle: "학습 내용",
          contents: ["성조"],
          confirmButtonText: "확인",
        },
        pages: [7, 8, 9, 10, 11, 12],
      },
      {
        turnId: 3,
        turnName: "학습3",
        introduction: {
          title: "학습 목표",
          subTitle: "중국어 개요, 성조, 운모를 배워 봅시다. ",
          contentsTitle: "학습 내용",
          contents: ["운모"],
          confirmButtonText: "확인",
        },
        pages: [13, 14, 15, 16, 17, 18, 19, 20],
      },
      {
        turnId: 4,
        turnName: "회화",
        introduction: {
          title: "학습 목표",
          subTitle: "회화를 익혀 봅시다.",
          contentsTitle: "학습 내용",
          contents: ["만남/헤어짐"],
          confirmButtonText: "확인",
        },
        pages: [21, 22, 23, 24, 25, 26],
      },
      {
        turnId: 5,
        turnName: "문화",
        introduction: {
          title: "학습 목표",
          subTitle: "중국 문화를 알아봅시다.",
          contentsTitle: "학습 내용",
          contents: ["중국의 개요"],
          confirmButtonText: "확인",
        },
        pages: [27, 28, 29, 30],
      },
    ],
  },
  code: 200,
  message: "성공",
};

export const v1CornerDataServer = {
  body: {
    meta: {
      lessonId: 1,
      cornerId: 1,
    },
    data: [
      {
        page_id: 1,
        contents_data: {
          title: "중국어 개요",
          description: "중국어에 대해 얼마나 알고 있나요?",
          template: {
            type: "TP11A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://icon_url",
                    },
                    text: "<p>중국은 국토가 넓고 다양한 민족과 방언이 있어 표준어인 ‘북경어’를 제정했습니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 1,
                    explanation: {
                      text: "<p>중국은 표준어인 ‘보통화’를 제정하여 사용합니다.</p>",
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      {
        page_id: 2,
        contents_data: {
          title: "중국어 개요",
          description: "선생님의 설명을 들어 보세요.",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://d3ck2c76fu5pug.cloudfront.net/assets/EOkLp5L6lEh3i8joP7gcVZKrC97aCIKA/giZ0nFZV/A01_video_gm.01.m3u8",
                  },
                ],
              },
            ],
          },
        },
      },
      {
        page_id: 3,
        contents_data: {
          title: "중국어 개요",
          description: "중국어 개요를 알아봅시다.",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: true,
                tabPages: [
                  {
                    title: "중국어 개요",
                    description: "중국어 개요를 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              kind: "description",
                              text: "<p>중국에서는 중국어를 ‘<strong><span class='c1'>한어</span></strong><span class='c1'>(?? H?ny?</span>)’라고 합니다. 중국 인구의 대다수를 차지하는 한족(?族H?nz?)이 쓰는 언어라는 뜻입니다.</p>",
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                tabName: "보통화",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한자)",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한어병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
      },
      {
        page_id: 4,
        contents_data: {
          title: "중국어 개요",
          description: "중국어 개요를 알아봅시다.",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: false,
                tabPages: [],
              },
              {
                tabName: "보통화",
                active: true,
                tabPages: [
                  {
                    title: "중국어 개요",
                    description: "중국어 개요를 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              kind: "description",
                              text: "<p>중국은 국토가 넓고 다양한 민족과 방언이 있어 표준어인‘<strong><span class='c1'>보통화</span></strong><span class='c1'>(普通? p?t?nghu?</span>)’를 제정하여 사용합니다.</p>",
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                tabName: "중국어의 구성(한자)",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한어병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
      },
      {
        page_id: 5,
        contents_data: {
          title: "중국어 개요",
          description: "중국어 개요를 알아봅시다.",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: false,
                tabPages: [],
              },
              {
                tabName: "보통화",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한자)",
                active: true,
                tabPages: [
                  {
                    title: "중국어 개요",
                    description: "중국어 개요를 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              kind: "description",
                              text: "<p>중국에서는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 ‘<strong><span class='c1'>간화자</span></strong><span class='c1'>(?化字 ji?nhu?z?)</span>*’를 사용합니다.<br>*‘간화자’는 ‘간체자(??字 ji?nt?z?)’라고도 합니다.</p>",
                            },
                          ],
                        },
                        {
                          type: "video",
                          data: [
                            {
                              src: "https://d3ck2c76fu5pug.cloudfront.net/assets/4kV85veSKFLFPCwS8Nf9uTvYKkzT7h0q/BfsoNcyk/A01_video_learn1_01.m3u8",
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                tabName: "중국어의 구성(한어병음)",
                active: false,
                tabPages: [],
              },
            ],
          },
        },
      },
      {
        page_id: 6,
        contents_data: {
          title: "중국어 개요",
          description: "중국어 개요를 알아봅시다.",
          template: {
            type: "TPTab",
            tabs: [
              {
                tabName: "한어",
                active: false,
                tabPages: [],
              },
              {
                tabName: "보통화",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한자)",
                active: false,
                tabPages: [],
              },
              {
                tabName: "중국어의 구성(한어병음)",
                active: true,
                tabPages: [
                  {
                    title: "중국어 개요",
                    description: "중국어 개요를 알아봅시다.",
                    template: {
                      type: "TP02",
                      contents: [
                        {
                          type: "html",
                          data: [
                            {
                              kind: "description",
                              text: "<p>한자는 뜻글자이기 때문에 글자만 보아서는 발음을 알 수 없습니다. 그래서 로마자를 활용하여 발음을 표기하는데, 이를 ‘<strong><span class='c1'>한어병음</span></strong><span class='c1'>(???音 H?ny? P?ny?n)</span>’ 또는 ‘병음(?音 P?ny?n)’이라고 합니다. 한어병음은 성조, 성모, 운모로 구성됩니다.</p>",
                            },
                          ],
                        },
                        {
                          type: "video",
                          data: [
                            {
                              src: "https://d3ck2c76fu5pug.cloudfront.net/assets/10sZtKm2tOrcVfmFeqGigJNrdylU3M3n/Yub5ULEO/A01_video_learn1_02.m3u8",
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },
  code: 200,
  message: "성공",
};