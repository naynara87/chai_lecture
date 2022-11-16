import { AppData } from "../types/appData";

// 과정(course) > 레슨(lesson) > 회차(corner) > 페이지(page)
export const dummyData: AppData = {
  isCompleted: false,
  course: {
    id: 1,
    title: "빨강",
  },
  lesson: {
    id: 1,
    title: "Lesson 1",
  },
  lastCornerId: 1,
  lastPageId: 1,
  title: "학습 리스트",
  description: "중국과 중국어에 대해 학습을 통해 알아봅시다.",
  corners: [
    {
      id: 1,
      type: "review",
      title: "복습",
      isCompleted: true,
      introduction: {
        title: "복습모달 제목",
        description: "복습 모달 문구",
      },
      cornerIcon:
        "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhjLVIqDjy9qPNhbZyp8Gm_K03UAgP3IZnItJMA4",
      pages: [
        {
          id: 11,
          title: "중국어의 개요",
          description: "중국어의 개요에 대해 알아봅시다.",
          tabs: [
            {
              name: "한어",
              active: true,
              pageId: 11,
            },
            {
              name: "보통화",
              active: false,
              pageId: 13,
            },
            {
              name: "중국어의 구성(한자)",
              active: false,
              pageId: 15,
            },
            {
              name: "중국어의 구성(한어 병음)",
              active: false,
              pageId: 17,
            },
          ],
          template: {
            type: "TP15A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    kind: "description",
                    text: "<p>중국에서는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 '간화자'를 사용합니다.</p>",
                  },
                  {
                    kind: "tip",
                    text: "<p>'간화자'는 간체자'라고도 합니다.</p>",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: "https://i.picsum.photos/id/116/700/500.jpg?hmac=xnRVRAfW8IZ_-xe8038EpnpF2G2EFtHn32lCz1Nd2Mw",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 12,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<p>성조는 음의 높낮이와 그 변화를 표시한 것으로, <br />중국어에는 네 개의 성조가 있습니다.</p>",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "o",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "e",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "i",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 13,
          title: "중국어의 개요13",
          description: "중국어의 개요에 대해 알아봅시다.",
          tabs: [
            {
              name: "한어",
              active: false,
              pageId: 11,
            },
            {
              name: "보통화",
              active: true,
              pageId: 13,
            },
            {
              name: "중국어의 구성(한자)",
              active: false,
              pageId: 15,
            },
            {
              name: "중국어의 구성(한어 병음)",
              active: false,
              pageId: 17,
            },
          ],
          template: {
            type: "TP15A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    kind: "description",
                    text: "<p>중국에서는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 '간화자'를 사용합니다.</p>",
                  },
                  {
                    kind: "tip",
                    text: "<p>'간화자'는 간체자'라고도 합니다.</p>",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: "https://i.picsum.photos/id/116/700/500.jpg?hmac=xnRVRAfW8IZ_-xe8038EpnpF2G2EFtHn32lCz1Nd2Mw",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 14,
          title: "단어 익히기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 ...",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                    sub: "",
                    description: "<p>ai ao an ang</p>",
                  },
                  {
                    main: "한어",
                    sub: "",
                    description: "<p>ou ong</p>",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 15,
          title: "중국어의 개요15",
          description: "중국어의 개요에 대해 알아봅시다.",
          tabs: [
            {
              name: "한어",
              active: false,
              pageId: 11,
            },
            {
              name: "보통화",
              active: false,
              pageId: 13,
            },
            {
              name: "중국어의 구성(한자)",
              active: true,
              pageId: 15,
            },
            {
              name: "중국어의 구성(한어 병음)",
              active: false,
              pageId: 17,
            },
          ],
          template: {
            type: "TP15A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    kind: "description",
                    text: "<p>중국에서는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 '간화자'를 사용합니다.</p>",
                  },
                  {
                    kind: "tip",
                    text: "<p>'간화자'는 간체자'라고도 합니다.</p>",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: "https://i.picsum.photos/id/116/700/500.jpg?hmac=xnRVRAfW8IZ_-xe8038EpnpF2G2EFtHn32lCz1Nd2Mw",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 16,
          title: "지난 레슨 확인하기",
          description: "녹음을 듣고 알맞은 발음을 고르세요.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "<p>성조는 음의 높낮이와 그 변화를 표시한 것으로, <br />중국어에는 네 개의 성조가 있습니다.</p>",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "o",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "e",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "i",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                  {
                    main: "u",
                    sub: "",
                    description: "",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 17,
          title: "중국어의 개요17",
          description: "중국어의 개요에 대해 알아봅시다.",
          tabs: [
            {
              name: "한어",
              active: false,
              pageId: 11,
            },
            {
              name: "보통화",
              active: false,
              pageId: 13,
            },
            {
              name: "중국어의 구성(한자)",
              active: false,
              pageId: 15,
            },
            {
              name: "중국어의 구성(한어 병음)",
              active: true,
              pageId: 17,
            },
          ],
          template: {
            type: "TP15A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    kind: "description",
                    text: "<p>중국에서는 기존의 복잡한 한자(번체자)를 쉽고 간단하게 만든 '간화자'를 사용합니다.</p>",
                  },
                  {
                    kind: "tip",
                    text: "<p>'간화자'는 간체자'라고도 합니다.</p>",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: "https://i.picsum.photos/id/116/700/500.jpg?hmac=xnRVRAfW8IZ_-xe8038EpnpF2G2EFtHn32lCz1Nd2Mw",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 2,
      type: "study1",
      title: "학습 1",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon:
        "https://i.picsum.photos/id/623/200/200.jpg?hmac=xquTjHIYmAPV3XEGlIUaV_KWyEofkbortxrK79jJhWA",
      pages: [
        {
          id: 10,
          title: "중국어의 개요",
          description: "중국어의 개요에 대해 알아봅시다.",
          template: {
            type: "TP01A",
            contents: [
              {
                type: "chooseTextByAudio",
                data: [
                  {
                    choices: ["he", "ge"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["he", "ge"],
                    answerIndex: 1,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["qi", "xi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    choices: ["ji", "qi"],
                    answerIndex: 0,
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    choices: ["ying", "wang"],
                    answerIndex: 1,
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          id: 21,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 1성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 2성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 3성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 4성",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "운모",
          description: "운모에 대해 알아봅시다.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                  },
                  {
                    main: "o",
                  },
                  {
                    main: "e",
                  },
                  {
                    main: "i",
                  },
                  {
                    main: "u",
                  },
                  {
                    main: "u2",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
          title: "성조3",
          description: "발음을 듣고 따라 읽어보세요.3",
          template: {
            type: "TP03C",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                  },
                  {
                    main: "o",
                  },
                  {
                    main: "e",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h4>설면음</h4><p>혀뿌리를 입천장 뒤쪽에 가까이 대고 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 24,
          title: "운모",
          description: "운모에 대해 알아봅시다",
          template: {
            type: "TP03D",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                    description: "ai ao an ang",
                  },
                  {
                    main: "o",
                    description: "ou ong",
                  },
                  {
                    main: "e",
                    description: "ei en eng er",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 25,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: "https://i.picsum.photos/id/474/800/400.jpg?hmac=CwQKBMVE4mgQWYJ56eO34xu7DuJ_O_WtUcvqm_kQcaI",
                  },
                  {
                    src: "https://i.picsum.photos/id/32/800/400.jpg?hmac=uHYnFiU5OPiGKsmFMu3z66361eMQZzV3ZAF7L5BDgnY",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h4>쌍순음</h4><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h4>순치음</h4><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
                  },
                ],
              },
              {
                type: "audio",
                data: [
                  {
                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: "https://i.picsum.photos/id/474/800/400.jpg?hmac=CwQKBMVE4mgQWYJ56eO34xu7DuJ_O_WtUcvqm_kQcaI",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 27,
          title: "중국어 경성, 한어병음 표기 규칙",
          description: "한어병음 표기 규칙에 대해 알아봅시다.",
          template: {
            type: "TP02M",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "경성",
                  },
                  {
                    main: "한어병음 표기 규칙",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 28,
          title: "운모",
          description: "i, u, o와 결합한 운모를 알아봅시다..",
          template: {
            type: "TP05A",
            contents: [
              {
                type: "textBoxes",
                data: [
                  {
                    main: "i",
                    description:
                      "<p>ia ie iao iou ian in iang ing iong<br />(yi: ya ye yao you yan yin yang ying young)</p>",
                  },
                  {
                    main: "u",
                    description:
                      "<p>ua uo uai uei uan uen uang ueng<br />(wu: wa wo wai wei wan wen wang weng)</p>",
                  },
                  {
                    main: "u",
                    description: "ue uan un (yu: yue yuan yun)",
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "ie, uei, ue의 e는 '으'와 '어'의 중간 소리가 아닌 '에'에 가깝게 발읍합니다. ian, uan의 a는 '아'가 아닌 '에'에 가깝게 발음합니다. ( )의 발음 표기는 성모 없이 운모만 쓸 때의 표기법입니다. 운모 iou, uei, uen 앞에 성모가 오면 가운데 운모는 생략합니다.",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 3,
      type: "study1",
      title: "학습 2",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon:
        "https://i.picsum.photos/id/40/200/200.jpg?hmac=xkvWvgGjMuaPySCsshiYpLBOaphxinRhPkMRgx-LIYQ",
      pages: [
        {
          id: 31,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 1성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 2성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 3성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 4성",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 32,
          title: "운모",
          description: "운모에 대해 알아봅시다.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                  },
                  {
                    main: "o",
                  },
                  {
                    main: "e",
                  },
                  {
                    main: "i",
                  },
                  {
                    main: "u",
                  },
                  {
                    main: "u2",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 33,
          title: "성조3",
          description: "발음을 듣고 따라 읽어보세요.3",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 1성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 2성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 3성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 4성",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 4,
      type: "study1",
      title: "학습 3",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon:
        "https://i.picsum.photos/id/583/200/200.jpg?hmac=6WdmRS6vtdQqa1zktgLfV0t3Afny4XE1zeDdlJ2K_mo",
      pages: [
        {
          id: 21,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 1성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 2성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 3성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 4성",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "운모",
          description: "운모에 대해 알아봅시다.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                  },
                  {
                    main: "o",
                  },
                  {
                    main: "e",
                  },
                  {
                    main: "i",
                  },
                  {
                    main: "u",
                  },
                  {
                    main: "u2",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 5,
      type: "study1",
      title: "회화",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon:
        "https://i.picsum.photos/id/112/200/200.jpg?hmac=a8Ve-HhSWAKC-SNBLKVosZ5gHmqMhgtNkPMYVMjEAbI",
      pages: [
        {
          id: 21,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 1성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 2성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 3성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 4성",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "운모",
          description: "운모에 대해 알아봅시다.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                  },
                  {
                    main: "o",
                  },
                  {
                    main: "e",
                  },
                  {
                    main: "i",
                  },
                  {
                    main: "u",
                  },
                  {
                    main: "u2",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 6,
      type: "study1",
      title: "문화",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon:
        "https://i.picsum.photos/id/813/200/200.jpg?hmac=KPqV3ldCcUrVRZi3-HZU491hRCs8AZAagGXxoAomcYU",
      pages: [
        {
          id: 21,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 1성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 2성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 3성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 4성",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "운모",
          description: "운모에 대해 알아봅시다.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                  },
                  {
                    main: "o",
                  },
                  {
                    main: "e",
                  },
                  {
                    main: "i",
                  },
                  {
                    main: "u",
                  },
                  {
                    main: "u2",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 7,
      type: "study1",
      title: "연습문제",
      isCompleted: false,
      introduction: {
        title: "성조와 운모을 공부해봐요",
        description: "성조와 운모 학습 상세 사항",
      },
      cornerIcon:
        "https://i.picsum.photos/id/787/200/200.jpg?hmac=CBLWRcHYFRDgc9zVqCgHmh5o2J6ADdShlYwX6ZKfqA4",
      pages: [
        {
          id: 21,
          title: "성조",
          description: "발음을 듣고 따라 읽어보세요.",
          template: {
            type: "TP03A",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "성조는 음의 높낮이와 그 변화를 표시한 것으로, 중국어에는 네 개의 성조가 있습니다.",
                  },
                ],
              },
              {
                type: "listenWords",
                data: [
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 1성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 2성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 3성",
                  },
                  {
                    text: "a",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                    meaning: "제 4성",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 22,
          title: "운모",
          description: "운모에 대해 알아봅시다.",
          template: {
            type: "TP03B",
            contents: [
              {
                type: "html",
                data: [
                  {
                    text: "운모는 음절에서 성모를 제외한 나머지 부분으로, 모두 36입니다.",
                  },
                ],
              },
              {
                type: "textBoxes",
                data: [
                  {
                    main: "a",
                  },
                  {
                    main: "o",
                  },
                  {
                    main: "e",
                  },
                  {
                    main: "i",
                  },
                  {
                    main: "u",
                  },
                  {
                    main: "u2",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
