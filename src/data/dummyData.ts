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
        title: "지난 시간에 배운 내용을 복습해 봐요.",
        description: "지난 시간 복습 상세 사항.",
      },
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page01.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: "<p>성조는 운모 위에 표시합니다.</p>",
                  },
                ],
              },
            ],
          },
        },
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
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
          id: 19,
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
          id: 20,
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
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
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
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
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
          id: 24,
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
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
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
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
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
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page02.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: "<p>성조는 운모 위에 표시합니다.</p>",
                  },
                ],
              },
            ],
          },
        },
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
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
          id: 19,
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
          id: 20,
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
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
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
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
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
          id: 24,
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
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
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
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
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
          id: 28,
          title: "단어 & 회화",
          description: "중국어로 숫자를 배워봅시다.",
          template: {
            type: "TP08G",
            contents: [
              {
                type: "numberTable",
                data: [
                  {
                    text: "一",
                    pronunciation: "yi",
                    meaning: "1",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "二",
                    pronunciation: "er",
                    meaning: "2",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "三",
                    pronunciation: "san",
                    meaning: "3",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "四",
                    pronunciation: "si",
                    meaning: "4",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "五",
                    pronunciation: "wu",
                    meaning: "5",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "六",
                    pronunciation: "liu",
                    meaning: "6",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "七",
                    pronunciation: "qi",
                    meaning: "7",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "八",
                    pronunciation: "ba",
                    meaning: "8",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "九",
                    pronunciation: "jiu",
                    meaning: "9",
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    text: "十",
                    pronunciation: "shi",
                    meaning: "10",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    kind: "tip",
                    text: "liù, jiǔ는 운모 iou 앞에 성모가 와서 가운데 운모 o가 생략된 형태입니다. 또한 운모 i와 u가 함께 있으면 뒤에 있는 운모 위에 성조를 표기합니다.",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 29,
          title: "회화 알아보기",
          description: "회화를 들어보세요.",
          template: {
            type: "TP02K",
            contents: [
              {
                type: "dialog",
                data: [
                  {
                    id: "a",
                    icon: {
                      src: "http://icon_url",
                    },
                    text: "<p>点点十分。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>2시 10분.</p>",
                    hasQuestion: false,
                    audio: {
                      src: "https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2022-11-21&format=wav&deliver=browser",
                    },
                  },
                  {
                    id: "b",
                    icon: {
                      src: "http://icon_url",
                    },
                    text: "<p>你几点 *blank*</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>너 몇 시에 집에 돌아가니?</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["回家", "现在"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://files.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G,+BWV+1007.mp3&preview",
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "http://icon_url",
                    },
                    text: "<p>*blank* 四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["下午", "十午"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2022-11-21&format=wav&deliver=browser",
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "http://icon_url",
                    },
                    text: "<p>*blank* 四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["下午", "十午"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2022-11-21&format=wav&deliver=browser",
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "http://icon_url",
                    },
                    text: "<p>*blank* 四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["下午", "十午"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2022-11-21&format=wav&deliver=browser",
                    },
                  },
                  {
                    id: "a",
                    icon: {
                      src: "http://icon_url",
                    },
                    text: "<p>*blank* 四点回家。</p>",
                    pronunciation: "<p>Méi xiǎngdào zài lùshang yùjiàn nǐ.</p>",
                    meaning: "<p>오후 4시에 돌아가.</p>",
                    hasQuestion: true,
                    question: {
                      choices: ["下午", "十午"],
                      answerIndex: 0,
                    },
                    audio: {
                      src: "https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2022-11-21&format=wav&deliver=browser",
                    },
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
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page03.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: "<p>성조는 운모 위에 표시합니다.</p>",
                  },
                ],
              },
            ],
          },
        },
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
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
          id: 19,
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
          id: 20,
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
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
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
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
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
          id: 24,
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
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
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
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
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
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page04.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: "<p>성조는 운모 위에 표시합니다.</p>",
                  },
                ],
              },
            ],
          },
        },
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
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
          id: 19,
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
          id: 20,
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
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
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
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
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
          id: 24,
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
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
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
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
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
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page05.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: "<p>성조는 운모 위에 표시합니다.</p>",
                  },
                ],
              },
            ],
          },
        },
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
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
          id: 19,
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
          id: 20,
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
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
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
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
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
          id: 24,
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
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
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
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
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
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page06.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: "<p>성조는 운모 위에 표시합니다.</p>",
                  },
                ],
              },
            ],
          },
        },
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
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
          id: 19,
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
          id: 20,
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
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
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
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
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
          id: 24,
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
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
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
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
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
      cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page07.png`,
      pages: [
        {
          id: 10,
          title: "워밍업 퀴즈",
          description: "중국의 크기를 알고 있나요?",
          template: {
            type: "TP11F",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhj",
                    },
                    text: "<p>중국의 면적은 약 960만 km²로 매우 넓습니다.<br />한국의 면적은 약 100만 km²입니다.</p>",
                  },
                ],
              },
              {
                type: "chooseText",
                data: [
                  {
                    choices: ["그렇다", "아니다"],
                    answerIndex: 0,
                    tip: "",
                    explanation: "<p>성조는 운모 위에 표시합니다.</p>",
                  },
                ],
              },
            ],
          },
        },
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
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
                    src: `${process.env.PUBLIC_URL}/images/icon/tabs_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 18,
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
          id: 19,
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
          id: 20,
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
          id: 21,
          title: "성모",
          description: "성모는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP04A",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image1.png`,
                  },
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp04a_image2.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h2>쌍순음</h2><p>윗입술과 아랫입술을 붙였다 떼면서 발음합니다.</p>",
                  },
                  {
                    text: "<h2>순치음</h2><p>윗니를 아랫입술에 살짝 댓다 떼면서 발음합니다.</p>",
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
          id: 22,
          title: "성모",
          description: "성모 g, k는 음절의 첫소리로, 모두 21개입니다.",
          template: {
            type: "TP02C",
            contents: [
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp02c_image.png`,
                  },
                ],
              },
            ],
          },
        },
        {
          id: 23,
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
          id: 24,
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
        {
          id: 25,
          title: "회화 미리보기",
          description: "무슨 이야기를 하고 있을까요?",
          template: {
            type: "TP02F",
            contents: [
              {
                type: "video",
                data: [
                  {
                    src: "https://cdn.bubblecon.io/videos/45.mp4",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 26,
          title: "단어 익히기",
          description: "단어를 확인해 보세요.",
          template: {
            type: "TP02N",
            contents: [
              {
                type: "studyWords",
                data: [
                  {
                    text: "对不起",
                    pronunciation: "duibuqi",
                    meaning: "미안합니다",
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
                  },
                  {
                    text: "没关系",
                    pronunciation: "méi guanxi",
                    meaning: "괜찮습니다",
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
          id: 27,
          title: "회화 알아보기",
          description: "따라 읽어 보세요.",
          template: {
            type: "TP07A",
            contents: [
              {
                type: "iconText",
                data: [
                  {
                    icon: {
                      src: "",
                    },
                    text: "따라 읽어 보세요.",
                  },
                ],
              },
              {
                type: "images",
                data: [
                  {
                    src: `${process.env.PUBLIC_URL}/images/icon/tp07a_image.png`,
                  },
                ],
              },
              {
                type: "html",
                data: [
                  {
                    text: "<h1>对不起。</h1><p>Duìbuqǐ.</p>",
                  },
                ],
              },
              {
                type: "audioRecord",
                data: [
                  {
                    audio: {
                      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    },
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
